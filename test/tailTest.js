const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("remove the first item and return the rest item to new array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
