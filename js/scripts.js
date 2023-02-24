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

const newOrder = new Pizza("medium", ["olives", "sausage", "bell pepper"]);
console.log(newOrder.getPrice());
