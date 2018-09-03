const mocha = require("mocha");
const chai = require("chai");
const cardValidator = require("../functionLib/mainFunction");
const expect = chai.expect;

describe("cardValidator", function() {
  describe("#cardValidator", function() {
    //"describe.only" roda apenas este teste "describe.skip" ou "x" para pular um teste
    describe("when there is no parameter to function", function() {
      it("should return an error", function() {
        expect(mainFunction.cardValidator("A função precisa receber um parâmetro.")).to.be.a('number');
      });
    })
