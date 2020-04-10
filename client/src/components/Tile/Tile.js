import React from 'react'
import {Hexagon} from 'react-hexgrid';

const Tile = (props) => {
    return <Hexagon
      q={props.x}
      r={props.y}
      s={4}
      onClick={(e,i) => props.click(e,i)}
  />
  };

  export default Tile;
  
