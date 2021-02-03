import Calculator from "./Calculator.js";

export default class TotalBoxController {
  constructor($total, event, digitLengthLimit) {
    this.$total = $total;
    this.totalValue = $total.innerText;
    this.event = event;
    this.digitLengthLimit = digitLengthLimit;
    this.leftNumber = '';
    this.rightNumber = '';
    this.operator = '';
    this.parseTotalValue();
    this.updateTotalBox();
  }

  checkDigitLength(value, lengthLimit) {
    if (value.length >= lengthLimit) {
      alert(`최대 ${this.digitLengthLimit}자리까지 입력할 수 있습니다.`);
      return false;
    }
    return true;
  }

  setOperator(value) {
    const match = this.totalValue.match(/[X\/+-]/);
    if (match) {
      this.operator = match[0];
    }
  }

  parseTotalValue() {
    let sign = "";
    if (this.totalValue[0] === "-") {
      sign = "-";
      this.totalValue = this.totalValue.slice(1);
    }

    this.setOperator();
    if (this.operator !== '') {
      [this.leftNumber, this.rightNumber] = this.totalValue.split(this.operator);
    } else {
      this.leftNumber = this.totalValue;
    }

    this.leftNumber = sign + this.leftNumber;
    this.totalValue = sign + this.totalValue;
  }
  
  updateTotalBox() {
    const className = this.event.target.className;
    switch (className) {
      case "modifier":
        this.resetTotalBox();
        break;
      case "digit":
        this.updateTotalBoxWithDigit();
        break;
      case "operation":
        if (this.event.target.innerText === "=") {
          console.log("!!");
          this.updateTotalBoxWithCalculatedValue();
        } else {
          this.updateTotalBoxWithOperator();
        }
    }
  }

  resetTotalBox() {
    this.$total.innerText = "0";
  }

  updateTotalBoxWithDigit() {
    const prevDigit = this.operator === "" ? this.leftNumber : this.rightNumber;
    if (!this.checkDigitLength(prevDigit, this.digitLengthLimit)) return;
    if (prevDigit === "0") {
      this.$total.innerText = this.totalValue.slice(0, -1); // 01과 같은 입력 방지
    }
    this.$total.innerText += this.event.target.innerText;
  }

  updateTotalBoxWithOperator() {
    if (this.operator !== "") {
      alert("이미 연산을 입력했습니다.");
      return;
    }
    if (!this.checkDigitLength(this.leftNumber, this.digitLengthLimit + 1)) return; // 계산 결과 값에 이어 연산을 할 경우 leftNumber 검사
    this.$total.innerText += this.event.target.innerText;
  }

  updateTotalBoxWithCalculatedValue() {
    if (this.operator === "" || this.rightNumber ==="") return;
    const calculator = new Calculator(this.totalValue);
    const calculatedValue = calculator.calculate();
    if(!isFinite(calculatedValue)) {
      alert("계산할 수 없는 값입니다.");
      this.resetTotalBox();
      return;
    }
    this.$total.innerText = calculatedValue;
  }
}