const NumberType = require("./number-type");

module.exports = class NumberLiteral {
    constructor(value) {
        this.value = value;
        this.type = new NumberType();
    }

    analyze() { // eslint-disable-line class-methods-use-this
        //Let empty on purpose
    }
};
