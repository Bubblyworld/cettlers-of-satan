var util = require('./util.js');

class Map {
  constructor() {
  }
}

class Tile {
  constructor(tipe, value) {
    util.assertEnum(tipe, TileTypes, 'tipe');
    util.assertType(value, 'number', 'value');

    if (value < 2 || value > 12) {
      throw new Error('tile value must be in the interval [2, 12]');
    }

    this.tipe = tipe;
    this.value = value;
  }
}

const TileTypes = Object.freeze({
  EMPTY: { name: 'empty' },
});

exports.Map = Map;
exports.Tile = Tile;
exports.TileTypes = TileTypes;
