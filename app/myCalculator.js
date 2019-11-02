class MyCalculator {
    constructor() {
        this.array;
    }

    enterParameters(array) {
        this.array = array;
        console.log('[Debug] Parameters are: ' + this.array);
    }

    add() {
        let result = 0;
        isArrayOfNumbers(this.array);
        this.array.forEach(element => { result = result + element });
        console.log('[Debug] Summation result is: ' + result);
        return result;
    }

    multiply() {
        let result = 1;
        isArrayOfNumbers(this.array);
        this.array.forEach(element => { result = result * element });
        console.log('[Debug] Multiplication result is: ' + result);
        return result;
    }
}

function isArrayOfNumbers(array) {
    array.every((element) => { return isNumber(element) });
}

function isNumber(value) {
    let result = (typeof value === 'number');
    if (!result) {
        const err = new Error('Some parameters are not numbers!');
        console.log('[Debug] ' + err);
        throw err;
    }
    return result;
}

module.exports = MyCalculator;
