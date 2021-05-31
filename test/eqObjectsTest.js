const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for objects with same keys and same values for corresponding keys", () => {
    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };
    
    const object2 = {
      b: 2,
      c: 3,
      a: 1
    };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("returns false for different number of keys in both objects", () => {
    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };
    
    const object3 = {
      a: 1,
      b: 2
    };

    assert.isFalse(eqObjects(object1, object3));
  });

  it('returns true for { c: "1", d: ["2", 3] } and  { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });

  it('returns false for  {c: "1", d: ["2", 3] } and {c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });

  it("returns true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

  it("returns false for { a: { z: 1, y: { z: 1, f: 5 } }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { z: 1, y: { z: 1, f: 5 } }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns true for { a: { z: 1, y: { z: 1, f: 5 } }, b: 2 } and { a: { z: 1, y: { z: 1, f: 5 } }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1, y: { z: 1, f: 5 } }, b: 2 }, { a: { z: 1, y: { z: 1, f: 5 } }, b: 2 }));
  });
});