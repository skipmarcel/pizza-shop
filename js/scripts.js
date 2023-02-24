//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getPrice = function () {
  const basePrice = 10;
  const sizeFactors = {
    small: 1,
    medium: 1.5,
    large: 2,
  };
  const sizeMultiplier = sizeFactors[this.size] || 1;
  const toppingPrice = 1.5;
  const numToppings = this.toppings.length;
  const toppingCost = numToppings * toppingPrice;
  const totalPrice = basePrice * sizeMultiplier + toppingCost;
  return totalPrice;
};

let newOrder = new Pizza("", []);
console.log(newOrder);

const orderBtn = document.getElementById("orderBtn");
const olivesCheckbox = document.getElementById("olives");

orderBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (olivesCheckbox.checked) {
    newOrder.toppings.push("olives");
  }
});

console.log(newOrder);
