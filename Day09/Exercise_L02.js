import { products, countries } from "./Countries.js";

/** Task 01 */
console.log(
  products
    .map((p) => p.price)
    .filter((p) => typeof p == "number")
    .reduce((a, b) => a + b)
);

/**Task 02 */
console.log(
  products.reduce(
    (a, b) => (typeof b.price == "number" ? a + b.price : a + 0),
    0
  )
);

/** Task 03 */
function categorizeCountries(pattern) {
  return countries.filter((c) => c.name.includes(pattern));
}
// console.log(categorizeCountries("land"));

/** Task 04 */
function letterCounter(arr) {
  return arr
    .map((c) => c.name)
    .reduce((acc, cur) => {
      acc[cur.charAt(0)] = ++acc[cur.charAt(0)] || 1;
      return acc;
    }, {});
}
console.log(letterCounter(countries));

/** Task 05 */
function getFirstTenCountries(arr) {
  return arr.slice(0, 10);
}
console.log(getFirstTenCountries(countries));

/** Task 06 */
function getLastTenCountries(arr) {
  return arr.slice(arr.length - 10);
}
console.log(getLastTenCountries(countries));

/** Task 07 */
const c = letterCounter(countries);
const letter = Object.keys(c).find(
  (key) =>
    c[key] ===
    Object.values(c)
      .sort((a, b) => a - b)
      .reverse()[0]
);
console.log(
  `${letter} letter is used ${c[letter]} times as initial for a country name`
);
