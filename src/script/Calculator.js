export default class Calculator {
  constructor(expression) {
    this.expression = expression.replace("X", "*");
  }

  calculate() {
    return eval(this.expression);
  }
}