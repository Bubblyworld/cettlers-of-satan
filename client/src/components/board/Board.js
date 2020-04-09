import {
  HexGrid,
  Layout,
  Text,
  Hexagon,
  Pattern,
  Path,
  Hex,
  HexUtils,
} from "react-hexgrid";
import React, { useState, setState } from "react";
import Tile, { TileCoordinates } from "../Tile/Tile";
import { boardWidth, boardHeight } from "./Styles";
import BoardView from "./BoardView";

const getBoardState = () => {
  return [
    { x: -2, y: 0 },
    { x: -2, y: 1 },
    { x: -2, y: 2 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },
    { x: 0, y: -2 },
    { x: 0, y: -1 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: -2 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: -2 },
    { x: 2, y: -1 },
    { x: 2, y: 0 },
  ];
};

const getBuildingStates = () => {
  return [
    {
      coordinates: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
      ],
      type: 1,
      player: 1,
    },
  ];
};

const printBoard = () => {
  console.log("hi");
};

const mapToBuildingCoordinates = (tiles) => {
  console.log(tiles);
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: getBoardState(),
      building: getBuildingStates(),
    };
  }

  clickHandler = (event, hex) => {    
    console.log(hex.props);
  };

  render() {
    console.log(mapToBuildingCoordinates(this.state.board));
    return (
      <div>
        <HexGrid
          width={boardWidth}
          height={boardHeight}
          viewBox="-50 -50 100 100"
        >
          {/* Grid with manually inserted hexagons */}
          <Layout
            size={{ x: 10, y: 10 }}
            flat={true}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            {this.state.board.map((tileStatus) => (
              <Tile
                className={tileStatus.x+''+tileStatus.y}
                x={tileStatus.x}
                y={tileStatus.y}
                click={this.clickHandler}
              />
            ))}
            ;
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Board;
