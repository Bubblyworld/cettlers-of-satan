// Main entrypoint, just accumulates all the exports.
// Authors: Guy Paterson-Jones and Cary Small.
var grid = require('./grid.js');
var state = require('./state.js');

exports.Grid = grid.Grid;
exports.Hex = grid.Hex;
exports.Tile = grid.Tile;
exports.Road = grid.Road;
exports.State = state.State;
exports.TileTypes = grid.TileTypes;

// DEBUG(guy): Remove me later on. Cheap tests =P.
var s = new state.State();
var m = new grid.Grid(2);
console.log(m.tiles);
console.log(m.roads);
