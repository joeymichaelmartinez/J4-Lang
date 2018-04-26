// const BooleanLiteral = require("./boolean-literal");
// const NumericLiteral = require("./numeric-literal");

module.exports = class UnaryExpression {
    constructor(op, operand) {
        Object.assign(this, { op, operand });
    }

    analyze(context) {
        this.operand.analyze(context);

        let operandType;

        if (this.operand.id) {
            operandType = this.operand.referent.type;
        } else {
            operandType = this.operand.type;
        }

        if (this.op === "-" && operandType.toString() !== "Number") {
            // console.log(operandType);
            throw new Error(`negative operator cannot be used with type ${this.operand.type}`);
        }

        if (this.op === "not" && operandType.toString() !== "Boolean") {
            throw new Error(`not operator cannot be used with type ${this.operand.type}`);
        }

        this.type = operandType;

    }

    optimize() {
        // this.operand = this.operand.optimize();
        // if (this.op === "not" && this.operand instanceof BooleanLiteral) {
        //     return BooleanLiteral(!this.operand.value);
        // } else if (this.op === "-" && this.operand instanceof NumericLiteral) {
        //     return new NumericLiteral(-this.operand.value);
        // }
        // return this;
    }
};
