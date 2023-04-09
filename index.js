const btnSub = document.querySelector(".sub");
const btnAdd = document.querySelector(".add");
const btnDiv = document.querySelector(".div");
const btnMult = document.querySelector(".mult");
const inputOne = document.querySelector(".first");
const inputTwo = document.querySelector(".second");
let inputThree = document.querySelector(".third");

btnSub.addEventListener("click", function () {
  inputThree.value = Number(inputOne.value) - Number(inputTwo.value);
});
btnMult.addEventListener("click", function () {
  inputThree.value = Number(inputOne.value) * Number(inputTwo.value);
});
btnDiv.addEventListener("click", function () {
  inputThree.value = Number(inputOne.value) / Number(inputTwo.value);
});
btnAdd.addEventListener("click", function () {
  inputThree.value = Number(inputOne.value) + Number(inputTwo.value);
});
