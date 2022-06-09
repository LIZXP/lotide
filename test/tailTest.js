const assert = require("chai").assert;
const tail = require("../tail");
const eqArrays = require("../eqArrays");

describe("#tail", () => {
  it("remove the first item and return the rest item to new array", () => {
    assert.strictEqual(
      eqArrays(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]),
      true
    );
  });
});
