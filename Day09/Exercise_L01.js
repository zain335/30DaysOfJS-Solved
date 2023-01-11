import { products } from "./Countries.js";
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** Task 01 */
// => foreach: loop over array and execute callback function;
// => map: lopp over array elements using callback function and return a new array with updated values;
// => filter: loop over array elements and check if certain criteria and returns a new array with the elements that satisfy given criteria;
// => reduce: loop over array elements and run reducer over them and return a single value generally. Its like combine form of filter and map.

/** Task 02 */
const callback = (n) => {
  return n * n;
};

function square(callback, n) {
  return callback(n);
}
console.log(square(callback, 5));

/** Task 03 */
countries.forEach((c) => console.log(c));

/** Task 04 */
names.forEach((n) => console.log(n));

/** Task 05 */
numbers.forEach((n) => console.log(n));

/** Task 06 */
console.log(countries.map((c) => c.toUpperCase()));

/** Task 07 */
console.log(countries.map((c) => c.length));

/** Task 08 */
console.log(numbers.map((n) => n * n));

/** Task 09 */
console.log(names.map((n) => n.toUpperCase()));

/** Task 10 */
console.log(products.map((p) => `${p.product}=${p.price}`));

/** Task 11 */
console.log(countries.filter((c) => c.toLocaleLowerCase().includes("land")));

/** Task 12 */
console.log(countries.filter((c) => c.length == 6));

/** Task 13 */
console.log(countries.filter((c) => c.length >= 6));

/** Task 14 */
console.log(countries.filter((c) => c.startsWith("E")));

/** Task 15 */
console.log(products.filter((p) => typeof p.price != "string"));

/** Task 16 */
function getStringList(arr) {
  return arr.filter((a) => typeof a == "string");
}
console.log(getStringList(["Muhammad Zain ali", 23, "Lahore"]));

/** Task 17 */
console.log(numbers.reduce((a, b) => a + b));

/** Task 18 */
console.log(
  countries.reduce((a, b) =>
    countries.indexOf(b) == countries.length - 1
      ? `${a}, and ${b} are north European countries.`
      : `${a}, ${b}`
  )
);

/** Task 19 */
// => every: check whether all the elements of the array satisfy the given condition or not;
// => some: check whether at least one of the elements of the array satisfies the given condition or not;

/** Task 20 */
console.log(names.some((n) => n.length > 7));

/** Task 21 */
console.log(countries.every((c) => c.includes("land")));

/** Task 22 */
// => find: returns the element value that satisfy the criteria;
// => findIndex: returns the index of element that satisfy the criteria;

/** Task 23 */
console.log(countries.find((c) => c.length == 6));

/** Task 24 */
console.log(countries.findIndex((c) => c.length == 6));

/** Task 25 */
console.log(countries.findIndex((c) => c == "Norway"));

/** Task 26 */
console.log(countries.findIndex((c) => c == "Russia"));
