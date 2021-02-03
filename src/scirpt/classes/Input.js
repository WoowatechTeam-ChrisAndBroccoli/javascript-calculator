import { DIGIT_LENGTH_LIMIT } from '../constants.js';

export default class Input {
  static isOperator(value) {
    if (value === '+' || value === '-' || value === '/' || value === 'X') {
      return true;
    }

    return false;
  }

  static isOperand(value) {
    if (isNaN(value)) {
      return false;
    }

    return true;
  }

  static isOperandCorrect(value) {
    return value.length <= DIGIT_LENGTH_LIMIT;
  }

  static isAllOperandsCorrect(operands) {
    return operands.every((operand) => Input.isOperandCorrect(operand));
  }

  static getOperators(value) {
    const operators = value.match(/(\+|\-|\/|X)/g);
    if (operators === null) {
      return [];
    }

    return operators;
  }

  static getOperands(value, operator) {
    return value.split(operator);
  }

  static isInputCorrect(value) {
    let isCorrect = false;
    const operators = Input.getOperators(value);
    if (operators.length === 0 && Input.isOperandCorrect(value)) {
      isCorrect = true;
    }
    if (operators.length === 1) {
      const operator = operators[0];
      const operands = Input.getOperands(value, operator);
      const leftOperand = operands[0];
      if (leftOperand === '') {
        isCorrect = false;
      } else {
        isCorrect = Input.isAllOperandsCorrect(operands);
      }
    }

    return isCorrect;
  }
}
