const { expect } = require("chai");
const MyCalculator = require("../../app/myCalculator");

describe("MyCalculator 'add' method", function () {
    let myCalculator;

    beforeEach(() => {
        myCalculator = new MyCalculator();
    });

    afterEach(() => {
        myCalculator = null;
    });

    it("should return 0 for 0+0", function () {
        myCalculator.enterParameters([0, 0]);
        expect(myCalculator.add()).to.equal(0);
    });

    it("should return 1 for 0+1", function () {
        myCalculator.enterParameters([0, 1]);
        expect(myCalculator.add()).to.equal(1);
    });

    it("should return -1 for 0+(-1)", function () {
        myCalculator.enterParameters([0, -1]);
        expect(myCalculator.add()).to.equal(-1);
    });

    it("should return 2 for 1+1", function () {
        myCalculator.enterParameters([1, 1]);
        expect(myCalculator.add()).to.equal(2);
    });

    it("should return -2 for (-1)+(-1)", function () {
        myCalculator.enterParameters([-1, -1]);
        expect(myCalculator.add()).to.equal(-2);
    });

    it("should return error 'Some parameters are not numbers!' for 1+'abc'", function () {
        myCalculator.enterParameters([1, 'abc']);
        let callWithError = () => myCalculator.add();
        expect(callWithError).to.throw("Some parameters are not numbers!");
    });

    it("should return error 'Some parameters are not numbers!' for 1+null", function () {
        myCalculator.enterParameters([1, null]);
        let callWithError = () => myCalculator.add();
        expect(callWithError).to.throw("Some parameters are not numbers!");
    });
});