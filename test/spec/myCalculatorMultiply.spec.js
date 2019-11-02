const { expect } = require("chai");
const MyCalculator = require("../../app/myCalculator");

describe("MyCalculator 'multiply' method", function () {
    let myCalculator;

    beforeEach(() => {
        myCalculator = new MyCalculator();
    });

    afterEach(() => {
        myCalculator = null;
    });

    it("should return 0 for 0*0", function () {
        myCalculator.enterParameters([0, 0]);
        expect(myCalculator.multiply()).to.equal(0);
    });

    it("should return 0 for 0*1", function () {
        myCalculator.enterParameters([0, 1]);
        expect(myCalculator.multiply()).to.equal(0);
    });

    it("should return 0 for 0*(-1)", function () {
        myCalculator.enterParameters([0, -1]);
        expect(myCalculator.multiply()).to.equal(0);
    });

    it("should return 2 for 2*1", function () {
        myCalculator.enterParameters([2, 1]);
        expect(myCalculator.multiply()).to.equal(2);
    });

    it("should return -2 for (2)*(-1)", function () {
        myCalculator.enterParameters([2, -1]);
        expect(myCalculator.multiply()).to.equal(-2);
    });

    it("should return 2 for (-2)*(-1)", function () {
        myCalculator.enterParameters([-2, -1]);
        expect(myCalculator.multiply()).to.equal(2);
    });

    it("should return error 'Some parameters are not numbers!' for 2*'abc'", function () {
        myCalculator.enterParameters([2, 'abc']);
        let callWithError = () => myCalculator.multiply();
        expect(callWithError).to.throw("Some parameters are not numbers!");
    });

    it("should return error 'Some parameters are not numbers!' for 2*null", function () {
        myCalculator.enterParameters([2, null]);
        let callWithError = () => myCalculator.multiply();
        expect(callWithError).to.throw("Some parameters are not numbers!");
    });
});