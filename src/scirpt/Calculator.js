export default class Calculator {
  constructor($total, inputValue, digitLengthLimit) {
    this.$total = $total;
    this.totalValue = $total.innerText;
    this.leftNumber = '';
    this.rightNumber = '';
    this.operator = '';
    this.inputValue = inputValue;
    this.digitLengthLimit = digitLengthLimit;
    this.parseTotalValue();
  }

  checkDigitLength(value) {
    return value.length <= 3;
  }

  isInputValueCorrect() {
    if (this.operator !== '' && this.getOperator(this.inputValue) !== '') {
      return false;
    }
    return true;
  }

  getOperator(value) {
    let operator = '';
    if (value.includes('+')) {
      operator = '+';
    } else if (value.includes('-')) {
      operator = '-';
    } else if (value.includes('/')) {
      operator = '/';
    } else if (value.includes('X')) {
      operator = 'X';
    }

    return operator
  }

  parseTotalValue() {
    this.operator = this.getOperator(this.totalValue);
    if (this.operator !== '') {
      const values = totalValue.split(this.operator);
      this.leftNumber = values[0];
      this.rightNumber = values[1];
    }
  }
  
  render() {
    if (!this.checkDigitLength()) return;

    this.$total.innerText = `${this.totalValue === '0' ? '' : this.totalValue}${this.inputValue}`;
  }
}