function orderArray(arrayOfNumbers) {
  const sortedArrayOfNumbers = [...arrayOfNumbers];
  for (let i = 0; i < sortedArrayOfNumbers.length; i++) {
    for (let j = i + 1; j < sortedArrayOfNumbers.length; j++) {
      const currentNumber = sortedArrayOfNumbers[i];
      if (sortedArrayOfNumbers[i] > sortedArrayOfNumbers[j]) {
        sortedArrayOfNumbers[i] = sortedArrayOfNumbers[j];
        sortedArrayOfNumbers[j] = currentNumber;
      }
    }
  }
  return sortedArrayOfNumbers;
}

const btnSort = document.querySelector("#btn-sort");
const inputContainer = document.querySelector("#input-container");
const btnAdd = document.querySelector("#btn-add");

const addInput = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "input-numbers");
  input.addEventListener("keypress", validateKey);
  inputContainer.append(input);
  input.focus();
};

const firstInputNumber = document.querySelector(".input-numbers");
firstInputNumber.focus();
const validateKey = (event) => {
  if (event.code === "Space") {
    addInput();
  }
  if (event.code === "Enter") {
    handleSort();
  }
};
firstInputNumber.addEventListener("keypress", validateKey);
btnAdd.addEventListener("click", addInput);
const handleSort = () => {
  const inputNumbers = document.querySelectorAll(".input-numbers");
  const numbers = [];
  inputNumbers.forEach((input) => {
    numbers.push(input.value);
  });

  alert(numbers);
  const sortedArray = orderArray(numbers);
  alert(sortedArray);
};
btnSort.addEventListener("click", handleSort);
