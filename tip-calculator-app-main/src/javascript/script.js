const money = document.getElementById("Bill");
const people = document.getElementById("People");
const tipButtons = document.querySelectorAll(".tip-btn");
const tipCustom = document.getElementById("Custom");

const tipAmount = document.getElementById("TipAmount");
const totalAmount = document.getElementById("TotalAmount");

const error = document.querySelector(".error");
const reset = document.querySelector(".reset-btn");

money.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tipCustom.addEventListener("input", calculate);

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipButtons.forEach((b) => b.classList.remove("ative"));

    btn.classList.add("ative");

    tipCustom.value = "";

    calculate();
  });
});

function calculate() {
  const bill = Number(money.value);
  const persons = Number(people.value);
  const customTip = Number(tipCustom.value);

  if (!persons) {
    showError();
    resetValues();
    return;
  }

  let tipPercent = customTip;

  if (!tipPercent) {
    const activeBtn = document.querySelector(".tip-btn.ative");
    if (activeBtn) tipPercent = Number(activeBtn.value);
  }


  const tipPerPerson = (bill * tipPercent) / 100 / persons;
  const totalPerPerson = (bill * (1 + tipPercent / 100)) / persons;

  tipAmount.textContent = `${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `${totalPerPerson.toFixed(2)}`;
}


function showError() {
  error.style.display = "block";
  setTimeout(() => (error.style.display = "none"), 2000);
}


reset.addEventListener("click", () => {
    tipAmount.textContent = "0.00";
    totalAmount.textContent = "0.00";

    money.value = "";
    people.value = "";
    tipCustom.value = "";
    tipButtons.forEach((b) => b.classList.remove("ative"));
});