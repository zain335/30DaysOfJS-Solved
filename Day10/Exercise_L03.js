import { countries } from "../Day09/Countries.js";

/** Task 01*/
const languageArray = countries.map((c) => c.languages).flat();
const languageSet = new Set(languageArray);
console.log(languageSet.size);

/** Task 02 */
function mostSpokenLanguages(arr, num) {
  let languageMap = new Map();
  for (let language of languageArray) {
    languageMap.set(language, languageMap.get(language) + 1 || 1);
  }
  const result = new Map(
    [...languageMap.entries()].sort((a, b) => a[1] - b[1]).slice(-num).reverse()
  );
  return result;
}
console.log(mostSpokenLanguages(countries, 10));
