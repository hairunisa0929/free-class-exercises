const chai = require('chai');
const expect = chai.expect;

const { gradeEvaluation } = require('../grade-evaluation');

describe("Grade Evaluation", () => {
  describe("Condition Passed", () => {
    it("Should return 'pass' if the grade >= 70", () => {
      let result = gradeEvaluation(80);
      expect(result).to.equal("pass");
    })
  })
  describe("Condition Failed", () => {
    it("Should return 'fail' if the grade < 70", () => {
      let result = gradeEvaluation(60);
      expect(result).to.equal("fail");
    })
  })
});