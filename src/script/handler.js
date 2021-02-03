import TotalBoxController from "./TotalBoxController.js";

const $total = document.querySelector("#total");

export const clickHandler = (e) => {
  if (e.target.className === "digit" || e.target.className === "modifier" || e.target.className === "operation") {
    new TotalBoxController($total, e, 3);
  }
}