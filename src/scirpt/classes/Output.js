import { calculator } from '../store.js';
import Input from './Input.js';
import { INVALID_INPUT_MESSAGE } from '../constants.js';

export default class Output {
  static appendValue(inputValue) {
    const newTotalValue = calculator.totalValue + inputValue;
    if (Input.isInputCorrect(newTotalValue)) {
      calculator.totalValue = newTotalValue;
    } else {
      alert(INVALID_INPUT_MESSAGE);
    }
  }

  static getCalculateResult(leftOperand, operator, rightOperand) {
    let result = 0;
    switch (operator) {
      case '+':
        result = Number(leftOperand) + Number(rightOperand);
        break;
      case '-':
        result = Number(leftOperand) - Number(rightOperand);
        break;
      case '/':
        result = Number(leftOperand) / Number(rightOperand);
        break;
      case 'X':
        result = Number(leftOperand) * Number(rightOperand);
        break;

      default:
        break;
    }

    return Math.floor(result);
  }

  static calculate() {
    const [operator] = Input.getOperators(calculator.totalValue);
    const [leftOperand, rightOperand] = Input.getOperands(
      calculator.totalValue,
      operator
    );
    if (rightOperand === '') {
      alert(INVALID_INPUT_MESSAGE);
      return;
    }
    const result = Output.getCalculateResult(
      leftOperand,
      operator,
      rightOperand
    );
    calculator.totalValue = result;
  }

  static getTotalValue() {
    return calculator.totalValue;
  }

  static clearTotalValue() {
    calculator.totalValue = '';
  }
}
