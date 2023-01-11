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

let countriesCopy = [...countries];

countriesCopy.reverse();

console.log("Original country array")
console.log(countries)

console.log("Copied array with reverse order")
console.log(countriesCopy);