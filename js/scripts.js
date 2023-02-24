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
  let total = document.createElement("p");
  total.innerHTML =
    "Your total is $" + "<strong>" + totalPrice.toFixed(2) + "</strong>";
  costButton.after(total);
};

function resetForm() {
  document.getElementById("orderForm").reset();
}

let newOrder = new Pizza("", []);

const orderBtn = document.getElementById("orderBtn");
const smallRadio = document.getElementById("small");
const mediumRadio = document.getElementById("medium");
const largeRadio = document.getElementById("large");
let orderInfo = document.getElementById("orederInfo");

const costButton = document.getElementById("cost");
costButton.addEventListener("click", (event) => {
  newOrder.getPrice();
});

//UI logic

orderBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (smallRadio.checked) {
    newOrder.size = "small";
  }
  if (mediumRadio.checked) {
    newOrder.size = "meduim";
  }
  if (largeRadio.checked) {
    newOrder.size = "large";
  }
  const toppingsCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  if (toppingsCheckbox.length > 0) {
    toppingsCheckbox.forEach((checkbox) => {
      newOrder.toppings.push(checkbox.value);
    });
  }
  document.getElementById("orderInfo").innerHTML =
    " One " + "<strong>" + newOrder.size + "</strong>" + " pizza " + "with:";
  let toppingsOl = document.createElement("ol");
  for (let i = 0; i < newOrder.toppings.length; i++) {
    let toppingsLi = document.createElement("li");
    toppingsLi.innerText = newOrder.toppings[i];
    toppingsOl.appendChild(toppingsLi);
  }
  document.getElementById("orderInfo").appendChild(toppingsOl);
  document.getElementById("cost").removeAttribute("class");
  resetForm();
});
