import {
  HexGrid,
  Layout,
  Text,
  Hexagon,
  Pattern,
  Path,
  Hex,
} from "react-hexgrid";
import React from "react";
import Tile from "../Tile/Tile";
import { boardWidth, boardHeight } from "./Styles";

const BoardView = (props) => {
  return (
    <HexGrid width={boardWidth} height={boardHeight} viewBox="-50 -50 100 100">
      {/* Grid with manually inserted hexagons */}
      <Layout
        size={{ x: 10, y: 10 }}
        flat={true}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        {props.board.map(tileStatus => <Tile x={tileStatus.x} y={tileStatus.y}/>)};
      </Layout>
    </HexGrid>
  );
};

export default BoardView;
