module.exports = class Argument {
    constructor(expression) {
        Object.assign(this, { expression });
    }

    analyze(context) {
        this.expression.analyze(context);
    }

    optimize() {
        this.expression = this.expression.optimize();
        return this;
    }
};