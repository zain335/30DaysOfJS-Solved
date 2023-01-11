/** Task 01 */
let empltySet = new Set();
console.log(empltySet);

/** Task 02 */
let numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log(numberSet);

/** Task 03*/
numberSet.delete(10);
console.log(numberSet);

/** Task 04 */
numberSet.clear();
console.log(numberSet);

/** Task 05 */
const strArray = ["this", "is", "five", "elements", "array"];
const strSet = new Set(strArray);
console.log(strSet);

/** Task 06 */
const countries = ["Finland", "Sweden", "Norway"];
const countriesMap = new Map();
for (let country of countries) {
  countriesMap.set(country, country.length);
}
console.log(countriesMap);
