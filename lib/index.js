// Main entrypoint, just accumulates all the exports.
// Authors: Guy Paterson-Jones and Cary Small.
var map = require('./map.js');
var state = require('./state.js');

exports.Map = map.Map;
exports.Hex = map.Hex;
exports.Tile = map.Tile;
exports.Road = map.Road;
exports.State = state.State;
exports.TileTypes = map.TileTypes;

// DEBUG(guy): Remove me:
var s = new state.State();
var m = new map.Map();
var t = new map.Tile(map.TileTypes.EMPTY, 12, new map.Hex(2, 2));
var h = new map.Hex(0, 0);
var h = new map.Hex(1, 0);

var r1 = new map.Road(
  new map.Hex(0, 0),
  new map.Hex(0, 1),
);

var r2 = new map.Road(
  new map.Hex(0, 0),
  new map.Hex(1, 0),
);

var r3 = new map.Road(
  new map.Hex(0, 1),
  new map.Hex(1, 0),
);
