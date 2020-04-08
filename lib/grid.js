var util = require('./util.js');

class Grid {
  constructor(n) {
    util.assertType(n, 'number', 'n');
    
    // TODO(guy): Generate an actual map. For now we just generate a size-n
    //            hex grid with random types and values for the tiles.
    var y = 0;
    var len = n;
    this.tiles = [];
    for (var i = 0; i < 2*n - 1; i++) {
      for (var x = 0; x < len; x++) {
        this.tiles.push(new Tile(TileTypes.DESERT,
          8, new Hex(x, y)));
      }

      y++;
      if (i < n-1) {
        len++;
      } else {
        len--;
      }
    }

    this.roads = [];
    var seen = new util.PairSet();
    for (var a of this.tiles) {
      for (var b of this.tiles) {
        if (!a.hex.adjacentTo(b.hex)) {
          continue
        }

        var ah = a.hex;
        var bh = b.hex;
        if (seen.has(ah, bh) || seen.has(bh, ah)) {
          continue;
        }

        this.roads.push(new Road(ah, bh));
        seen.add(ah, bh);
      }
    }
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
    util.assertType(dx, 'number', 'dx');
    util.assertType(dy, 'number', 'dy');
    
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

  // adjacentTo returns true if this hex shares an edge with the given hex.
  adjacentTo(h) {
    util.assertInstance(h, Hex, 'h');
    
    var dx = this.x - h.x;
    var dy = this.y - h.y;

    return (dx === 0 && (dy === -1 || dy === 1)) ||
      (dy === 0 && (dx === -1 || dx === 1)) ||
      (dx === -1 && dy === 1) ||
      (dx === 1 && dy === -1);
  }

  equals(h) {
    return (this.x === h.x) && (this.y === h.y);
  }
}

class Road {
  constructor(a, b) {
    util.assertInstance(a, Hex, 'a');
    util.assertInstance(b, Hex, 'b');

    this.a = a;
    this.b = b;
    this.owner = 0;
    this.owned = false;
  }

  // incidentWith returns true if this road shares an endpoint with the given one.
  // This is true if and only if they share a hex and the other two hexes are
  // adjacent.
  incidentWith(r) {
    if (!(this.a.equals(r.a) || this.a.equals(r.b)) &&
      !(this.b.equals(r.a) || this.b.equals(r.b))) {

      return false;
    }

    if (this.a.equals(r.a)) {
      return this.b.adjacentTo(r.b);
    }

    if (this.a.equals(r.b)) {
      return this.b.adjacentTo(r.a);
    }

    if (this.b.equals(r.a)) {
      return this.a.adjacentTo(r.b);
    }

    if (this.b.equals(r.b)) {
      return this.a.adjacentTo(r.a);
    }

    return false;
  }

  equals(r) {
    return (this.a.equals(r.a) && this.b.equals(r.b)) ||
      (this.a.equals(r.b) && this.b.equals(r.a));
  }
}

class Tile {
  constructor(tipe, value, hex) {
    util.assertEnum(tipe, TileTypes, 'tipe');
    util.assertType(value, 'number', 'value');
    util.assertInstance(hex, Hex, 'hex');

    if (value < 2 || value > 12) {
      throw new Error('tile value must be in the interval [2, 12]');
    }

    this.tipe = tipe;
    this.value = value;
    this.hex = hex;
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

exports.Grid = Grid;
exports.Hex = Hex;
exports.Road = Road;
exports.Tile = Tile;
exports.TileTypes = TileTypes;
