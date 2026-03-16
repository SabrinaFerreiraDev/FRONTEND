const values = document.querySelectorAll(".key");
const display = document.querySelector(".calculator-screen");
const reset = document.querySelector(".key-reset");
const keyNumber = document.querySelectorAll(".key-number");
const keyOperator = document.querySelectorAll(".key-operator");
const equals = document.querySelector(".key-equals");
const deleteKey = document.querySelector(".key-delete");
const themeBtn = document.querySelectorAll(".theme-btn");
const toggleBall = document.querySelectorAll(".toggle-ball");
const body=document.body

values.forEach((value) => {
  value.addEventListener("click", () => {
    if (
      value.dataset.value !== "=" &&
      value.dataset.value !== "DEL" &&
      value.dataset.value !== "RESET"
    ) {
      display.textContent += value.dataset.value;
    } else if (value.dataset.value === equals.dataset.value) {
      Calculator();
    } else if (value.dataset.value === deleteKey.dataset.value) {
      Delete();
    } else if (value.dataset.value === reset.dataset.value) {
      ResetCalculator();
    }
  });
});
function ResetCalculator() {
  display.textContent = "";
}

function Calculator() {
  try {
    display.textContent = eval(display.textContent);
  }
  catch {
    display.textContent='Error'
  }

}
//*outra forma de fazer o calculo
/*function Calculator() {

  const expression = display.textContent;

  const parts = expression.match(/(\d+)([\+\-\*\/])(\d+)/);

  if (!parts) return;

  const num1 = Number(parts[1]);
  const operator = parts[2];
  const num2 = Number(parts[3]);

  let result;

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;

  display.textContent = result;
}*/

function Delete() {
  //*pode ser feito assim
  // display.textContent = display.textContent.substring(
  //   0,
  //   display.textContent.length - 1,
  // );
  display.textContent =display.textContent.slice(0,-1)
}

themeBtn.forEach((value) => {
  value.addEventListener("click", () => {
    const theme=value.dataset.theme
    body.classList.remove("theme-1", "theme-2", "theme-3");
    body.classList.add(`theme-${theme}`);  
  });
})
