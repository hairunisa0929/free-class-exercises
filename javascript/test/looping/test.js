const chai = require("chai");
const expect = chai.expect;

const { loopArray } = require("../loop-array");

describe("loopArray", () => {
  it("should log all elements in the array", () => {
    const consoleLogTemp = [];
    const testArray = [1, 2, 3, 4, 5];

    // Override console.log
    const originalLog = console.log;
    console.log = (message) => {
      consoleLogTemp.push(message);
    };

    // Call the function
    loopArray(testArray);

    // Restore console.log
    console.log = originalLog;

    // Check if consoleLogTemp has the same elements as testArray
    expect(consoleLogTemp).to.deep.equal(testArray);
  });
})