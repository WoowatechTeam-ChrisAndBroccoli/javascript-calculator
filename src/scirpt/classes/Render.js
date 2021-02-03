const $total = document.querySelector('#total');

export default class Render {
  static show(inputValue) {
    if (inputValue === '') {
      inputValue = 0;
    }
    $total.innerText = inputValue;
  }
}
