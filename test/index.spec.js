const chai = require("chai");
const card = require("../index");
const expect = chai.expect;

// Quando nao houver parametro deve lancar um erro.
// Quando o numero for uma string deve lancar um erro.
// Quando o numero for um inteiro e houver um digito deve lancar um erro.
// Quando o numero for um inteiro e for um cartão válido deve retornar true, se o cartao for invalido deve retornar false.


describe("cardValidator", function() {
  //"describe.only" roda apenas este teste "describe.skip" ou "x" para pular um teste
  describe("Quando nao houver parametro.", function() {
    it("Deve lancar um erro.", function() {
      var badFn = function () { card.cardValidator(null) };
      expect(badFn).to.throw('missingParameter');
    });
  });
  describe("Quando o numero for uma string.", function() {
    it("Deve lancar um erro.", function() {
      var badFn = function () { card.cardValidator('string') };
      expect(badFn).to.throw('stringIsInvalidInput');
    });
  });
  describe("Quando o numero for um inteiro e houver um digito.", function() {
    it("Deve lancar um erro.", function() {
      var badFn = function () { card.cardValidator(15486) };
      expect(badFn).to.throw('DoesNotHaveTheExpectedLength');
    });
  });
  describe("Quando o numero for um inteiro e for um cartão válido.", function() {
    it("Deve retornar true.", function() {
      expect(card.cardValidator(36490102462661)).to.equal(true);
    });
  });
  describe("Quando o numero for um inteiro e for um cartão válido.", function() {
    it("Deve retornar false.", function() {
      expect(card.cardValidator(36490102462662)).to.equal(false);
    });
  });
});
