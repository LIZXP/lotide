const assert = require("chai").assert;
const middle = require("../middle");
const eqArrays = require("../eqArrays");

describe("#middle", () => {
  it("return 3rd item if its odd length array", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
  });
  it("return 3rd and 4th item if its even length array", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
  });
});
