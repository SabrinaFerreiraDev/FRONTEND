const money = document.getElementById("Bill");
const tip = document.querySelectorAll(".tip-btn");
const people = document.getElementById("People");
const tipCustom = document.getElementById("Custom");
const tipAmount = document.getElementById("TipAmount");
const totalAmount = document.getElementById("TotalAmount");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset-btn");



money.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tipCustom.addEventListener("input", calculate);

function calculate() {
    const tipValueCustom = tipCustom.value;
    const peopleValue = people.value;
    const moneyValue = money.value;
console.log(tip.values)
    if (tipValueCustom) {
        tipAmount.innerHTML = `$${(moneyValue * tipValueCustom / 100 / peopleValue).toFixed(2)}`;
        totalAmount.innerHTML = `$${(moneyValue * (1 + tipValueCustom / 100) / peopleValue).toFixed(2)}`;
    } else {
        tip.forEach((e) => {
            if(peopleValue == 0){
                tipAmount.innerHTML = "$0.00";
                totalAmount.innerHTML = "$0.00";
                error.style.display = "block";
                setTimeout(() => {
                    error.style.display = "none";
                }, 2000);
            }
            if (e.classList.contains("ative")) {
                tipAmount.innerHTML = `$${(moneyValue * e.value / 100 / peopleValue).toFixed(2)}`;
                totalAmount.innerHTML = `$${(moneyValue * (1 + e.value / 100) / peopleValue).toFixed(2)}`;
            }
        });
    }

  
}





























tip.forEach((e) => {
    e.addEventListener("click", () => {
      tip.forEach((e) => {
            e.classList.remove("ative");
        });
        e.classList.toggle("ative");
    });
});

reset.addEventListener("click", () => {
    tip.forEach((e) => {
        e.classList.remove("ative");
    });
    money.value = "";
    tipCustom.value = "";
    people.value = "";
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
});