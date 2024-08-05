const chai = require('chai');
const expect = chai.expect;

const { showName } = require('../object');

describe("Show Property Name", () => {
  it("Show object's property name", () => {
    let dog = {
      id: 1,
      name: "Polo",
      color: "Black"
    };

    let result = showName(dog);
    expect(result).to.equal(dog.name);
  })
});