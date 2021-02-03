import Render from './classes/Render.js';
import Output from './classes/Output.js';

export default function clickHandler(e) {
  const $clicked = e.target;
  const inputValue = $clicked.innerText;
  switch ($clicked.className) {
    case 'digit': {
      Output.appendValue(inputValue);
      break;
    }
    case 'operation': {
      if (inputValue === '=') {
        Output.calculate();
      } else {
        Output.appendValue(inputValue);
      }
      break;
    }
    case 'modifier': {
      Output.clearTotalValue();
      break;
    }
    default: {
      break;
    }
  }
  const totalValue = Output.getTotalValue();
  Render.show(totalValue);
}
