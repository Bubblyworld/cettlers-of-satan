var util = require('./util.js');

class Map {
  constructor() {
  }
}

// Cettlers of Satan uses cube coordinates for the hex grid.
//   see https://www.redblobgames.com/grids/hexagons/#coordinates
//
// The basic idea is to have one coordinate for each of the 3 axes of symmetry
// of a hex, which we'll call "x, y, z". We then enforce the constraint that 
// "x + y + z = 0" so that each point has a unique representation. Here we
// only store the "x, y" part of this representation.
class Hex {
  constructor(x, y) {
    util.assertType(x, 'number', 'x');
    util.assertType(y, 'number', 'y');

    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x = this.x + dx;
    this.y = this.y + dy;
  }

  neighbours() {
    return [
      new Hex(this.x + 1, this.y),
      new Hex(this.x - 1, this.y),
      new Hex(this.x, this.y + 1),
      new Hex(this.x, this.y - 1),
      new Hex(this.x + 1, this.y - 1),
      new Hex(this.x - 1, this.y + 1),
    ];
  }

  adjacentTo(a) {
    if (!(a instanceof Hex)) {
      throw new Error('adjacentTo takes a Hex as input');
    }
    
    var dx = this.x - a.x;
    var dy = this.y - a.y;

    return (dx == 0 && (dy == -1 || dy == 1)) ||
      (dy == 0 && (dx == -1 || dx == 1)) ||
      (dx == -1 && dy == 1) ||
      (dx == 1 && dy == -1);
  }
}

class Tile {
  constructor(tipe, value, pos) {
    util.assertEnum(tipe, TileTypes, 'tipe');
    util.assertType(value, 'number', 'value');
    util.assertInstance(pos, Hex, 'pos');

    if (value < 2 || value > 12) {
      throw new Error('tile value must be in the interval [2, 12]');
    }

    this.tipe = tipe;
    this.value = value;
  }
}

const TileTypes = Object.freeze({
  EMPTY:  { name: 'empty' },
  BRICK:  { name: 'brick' },
  DESERT: { name: 'desert' },
  ORE:    { name: 'ore' },
  SHEEP:  { name: 'sheep' },
  WHEAT:  { name: 'wheat' },
  WOOD:   { name: 'wood' },
});

exports.Map = Map;
exports.Hex = Hex;
exports.Tile = Tile;
exports.TileTypes = TileTypes;
