// Main entrypoint, just accumulates all the exports.
// Authors: Guy Paterson-Jones and Cary Small.
var map = require('./map.js');
var state = require('./state.js');

exports.Map = map.Map;
exports.Tile = map.Tile;
exports.TileTypes = map.TileTypes;
exports.State = state.State;

// DEBUG(guy): Remove me:
var s = new state.State();
var m = new map.Map();
var t = new map.Tile(map.TileTypes.EMPTY, 12);
