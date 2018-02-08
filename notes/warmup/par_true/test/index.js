const chai = require("chai");
const assert = chai.assert;

const parens = require("../index.js");

const tests = [
    ")",
    "(()",
    "(())",
    "))(("
]

describe("balance parentheses", ()=>{
    it("should return false", ()=>{
        assert.isFalse(parens(tests[0]));
        assert.isFalse(tests[1]);
        assert.isFalse(tests[3]);
    });
    it("should return true", ()=>{
        assert.isTrue(parens(tests[2]))
    })
})