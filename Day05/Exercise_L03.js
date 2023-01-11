import { countries } from "./Exercise_L02/countries.js";

/** Task 01 */
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages = new Int8Array(ages);
ages.sort();

parseInt(ages);
console.log(ages[0]);
console.log(ages[ages.length - 1]);
console.log(ages);

console.log(
  ages.length % 2 == 0
    ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    : ages[parseInt(ages.length / 2)]
);
let avgAge = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(avgAge);

console.log(Math.abs(ages[0] - avgAge) >= Math.abs(ages[ages.length - 1] - avgAge));

/** Task 02 */
console.log(countries.slice(0,10))

console.log(countries[parseInt(countries.length/2)]+" Having index "+countries.indexOf(countries[parseInt(countries.length/2)]))

/** Task 03 */
let countriesFirstHalf = countries.slice(0,Math.ceil(countries.length/2))
console.log(countriesFirstHalf.length)
let countriesSecondtHalf = countries.slice(parseInt(countries.length/2),countries.length-1)
console.log(countriesSecondtHalf.length)