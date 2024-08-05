const chai = require('chai');
const expect = chai.expect;

const { showName } = require("../array-of-object");

describe("showName", () => {
  it("should log all names in the array", () => {
    const arrTemp = [];
    const cats = [
      { id: 1, name: "mochi", color: "white" },
      { id: 2, name: "mocha", color: "orange" }
    ];

    // Override console.log
    const originalLog = console.log;
    console.log = (message) => {
      arrTemp.push(message);
    };

    // Call the function
    showName(cats);

    // Restore console.log
    console.log = originalLog;

    // Check if arrTemp has the correct names
    expect(arrTemp).to.deep.equal(["mochi", "mocha"]);
  });
});