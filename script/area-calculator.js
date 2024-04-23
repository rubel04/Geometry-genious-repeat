// reusable get function
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const value = parseFloat(inputValue);
  inputFieldClear(inputField);
  return value;
}
// reusable get function
// function setElementInnerText(elementId,area) {
//     const element = document.getElementById(elementId);
//     element.innerText = area;
// }

// input clear reusable function
function inputFieldClear(inputField) {
  inputField.value = "";
}

function calculateTriangleArea() {
  const base = getInputValue("base-field");
  const height = getInputValue("height-field");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }
  const calculate = 0.5 * base * height;
  document.getElementById("triangleArea").innerText = calculate;
  addToCalculationEntry("Triangle", calculate);
}

function calculateRectangleArea() {
  const width = getInputValue("width-field");
  const length = getInputValue("length-field");
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }
  const calculate = width * length;
  document.getElementById("rectangleArea").innerText = calculate;
  addToCalculationEntry("Rectangle", calculate);
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base-field");
  const height = getInputValue("parallelogram-height-field");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }
  const calculate = base * height;
  document.getElementById("parallelogramArea").innerText = calculate;

  // add to calculation entry
  addToCalculationEntry("Parallelogram", calculate);
}

// add to calculation entry

function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById("calculation-entry");
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.classList.add('my-2')
    p.innerHTML = `${count + 1}. ${areaType}    ${area} cm<sup>2</> <button class="btn btn-success btn-sm text-white">Convert</button>`;
    calculationEntry.appendChild(p);
}
