const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("return 3rd item if its odd length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("return 3rd and 4th item if its even length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
