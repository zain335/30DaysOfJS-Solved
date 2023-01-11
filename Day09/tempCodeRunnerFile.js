import { products, countries } from "./Countries.js";

/** Task 01 */
// console.log(countries.sort((a, b) => a.name.localeCompare(b.name)));
// console.log(countries.sort((a, b) => a.capital.localeCompare(b.capital)));
// console.log(countries.sort((a, b) => a.population - b.population));

/** Task 02 */
function mostSpokenLanguages(arr, num) {
  let result = [];
  Object.entries(
    arr
      .map((c) => c.languages)
      .flat()
      // .reduce((a, b) => `${a},${b}`)
      // .split(",")
      .reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
      }, {})
  ).forEach((element) => {
    result.push({ language: element[0], count: element[1] });
  });
  return result
    .sort((a, b) => a.count - b.count)
    .slice(result.length - num)
    .reverse();
}
console.log(mostSpokenLanguages(countries, 3));