// javascript

let count = 0;
let countlet = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countlet.textContent = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  countlet.textContent = 0;
  count = 0;
}
