const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
/** Task 01 */
console.log(Math.random().toString(36).substring(2));

/** Task 02 */
console.log("#" + Math.random().toString(15).substring(2, 8));

/** Task 03 */
let min = 0;
let max = 255;
const r = Math.floor(Math.random() * (max - min)) + min;
const g = Math.floor(Math.random() * (max - min)) + min;
const b = Math.floor(Math.random() * (max - min)) + min;
console.log(`rgb(${r},${g},${b})`);

/** Task 04 */
let countriesCap = [];
for (let c of countries) {
  countriesCap.push(c.toUpperCase());
}
// countriesCap = countries.toString().toUpperCase().split(",")
console.log(countriesCap);

/**Task 05 */
let countriesLen = [];
for (let c of countries) {
  countriesLen.push(c.length);
}
console.log(countriesLen);

/** Task 06 */
let countriesArray = [];
for (let c of countries) {
  countriesArray.push([c, c.substring(0, 3).toUpperCase(), c.length]);
}
console.log(countriesArray);

/** Task 07 */
let countriesLand = [];
for (let c of countries) {
  if (c.toLowerCase().includes("land")) {
    countriesLand.push(c);
  }
}
if (countriesLand.length > 0) {
  console.log(countriesLand);
} else {
  console.log("All these countries are without land");
}

/** Task 08 */
let countriesIA = [];
for (let c of countries) {
  if (c.toLowerCase().endsWith("ia")) {
    countriesIA.push(c);
  }
}
if (countriesIA.length > 0) {
  console.log(countriesIA);
} else {
  console.log("There is no country containing the word 'ai'");
}

/** Task 09 */
let countryBig = "";
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > countries[i - 1].length) {
    countryBig = countries[i];
  }
}
console.log(countryBig, countryBig.length);

/** Task 10 */
let countriesFive = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    countriesFive.push(countries[i]);
  }
}
console.log(countriesFive);
