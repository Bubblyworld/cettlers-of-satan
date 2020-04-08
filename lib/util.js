exports.assertType = function(x, tipe, name) {
  if (typeof(x) !== tipe) {
    throw new Error(`${name} must be of type ${tipe}`);
  }
}

exports.assertEnum = function(x, enm, name) {
  for (var k of Object.keys(enm)) {
    if (x === enm[k]) {
      return;
    }
  }

  throw new Error(`${name} must be a valid enum value`);
}

exports.assertInstance = function(x, inst, name) {
  if (!(x instanceof inst)) {
    throw new Error(`${name} must be an instance of ${inst.name}`);
  }
}
