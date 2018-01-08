const chai = require("chai");
const assert = chai.assert;

const validateIp = require("../index");

let tests = {
    case1: "123.123.123.123",
    case2: "12.12.12",
    case3: "256.256.256.256",
    case4: "12a.12a.12a.12a",
    case5: "0123.0123.0123.0123",
    case5: "0123.0123.0123.0123",

}

describe("Validate IP address", () => {
    it("should return true", () => {
        assert(validateIp(tests.case1));
    });
    it("should return false", () => {
        assert.isFalse(!validateIp(tests.case2));
        assert.isFalse(!validateIp(tests.case3));
        assert.isFalse(!validateIp(tests.case4));
        assert.isFalse(!validateIp(tests.case5));
    });
});