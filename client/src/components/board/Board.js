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

const getBoardState = () => {
  return [
    {x:-2,y:0},{x:-2,y:1},{x:-2,y:2},
    {x:-1,y:-1}, {x:-1,y:0}, {x:-1,y:1}, {x:-1,y:2},
    {x:0,y:-2}, {x:0,y:-1}, {x:0,y:0}, {x:0,y:1}, {x:0,y:2}, 
    {x:1,y:-2}, {x:1,y:-1}, {x:1,y:0}, {x:1,y:1},
    {x:2,y:-2},{x:2,y:-1},{x:2,y:0}
  ]
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board:getBoardState()};
  }

  render() {
    return (
      <BoardView board={this.state.board}/>
    );
  }
}

export default Board;
