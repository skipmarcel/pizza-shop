# _Pizza Shop_

#### By _**Tyler Adams**_

#### \_\_

#### https://github.com/skipmarcel/pizza-shop.git

## Technologies Used

- _HTML_
- _CSS_
- _javaScript_

## Description

_This is a website for placing a pizza order_
_A patron of this pizza parlor should be able to order a small, medium or large with multiple toppings._
_They will also get a price for their order at the end of the transaction_

## Setup/Installation Requirements

- _This page runs with a standard index.html, styles.css and scripts.js file_
- _There is a googlepis link in the HTML head for a font reference_

## Known Bugs

-

## Tests

_Describe: Pizza()_

\_Test: "It should return a Pizza object with two properties for size and toppings"
\_Code: const pizzaOrder = new Pizza(["medium", ["olives", "sausage", "bell pepper"]);
\_Expected Output: Pizza { size: "medium" toppings: ["olives", "sausage", "bell pepper"] };

_Describe: prototype.getPrice_

\_Test: "It should calculate the cost of the pizza according to size and number of toppings"
\_Code: const newOrder = new Pizza("medium", ["olives", "sausage", "bell pepper"]);
\_Expected Output: 19.5 (medium pizza with 3 toppings)

## License

_If there are any isues you find, please contact me via email: skipmarcel@gmail.com_

Copyright (c) _02/23/2023_ _Tyler Adams_
