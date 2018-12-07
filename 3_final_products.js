/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.
var products = [
  {name: "bread", inventory: 12, unit_price: 11.99},
  {name: "milk", inventory: 5, unit_price: 2.99},
  {name: "porridge", inventory: 9, unit_price: 0.99},
  {name: "egg", inventory: 11, unit_price:4.99}
];
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price
//console.log(products[0].name);

//// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.
function listProducts (items) {
var itemnames = [];
  for (var i=0; i<items.length; i++) {
itemnames.push(items[i].name);
}
//  
  console.log(itemnames);
}
//
//// 4. Call the listProducts() function and log the returned value to the console.
listProducts (products);

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value
function totalValue (items) {
var totalinventorycost=0;
var totalitemcost;
  for (var i=0; i<items.length; i++) {
  totalitemcost= items[i].inventory * items[i].unit_price;
    totalinventorycost += totalitemcost;
  }
  return totalinventorycost
}

// 6. Call the totalValue() function and log the returned value to the console.
console.log("$"+totalValue (products)+" is our total inventory cost");

// 7. Run your code by typing node 3_final_products.js in the console below