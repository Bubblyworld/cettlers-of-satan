import {
  HexGrid,
  Layout,
  Text,
  Hexagon,
  Pattern,
  Path,
  Hex,
} from "react-hexgrid";
import React, { useState } from "react";
import Tile from "../Tile/Tile";
import { boardWidth, boardHeight } from "./Styles";
import BoardView from './BoardView';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board:[{x:0,y:0},{x:1,y:0}]};
  }

  render() {
    return (
      <BoardView board={this.state.board}/>
    );
  }
}

export default Board;
