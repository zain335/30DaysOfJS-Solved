const prompt = require("prompt-sync")({ sigint: true });

/** Task 01 */
let emptyArray = Array();

/** Task 02 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/** Task 03 */
console.log(array.length);

/** Task 04 */
console.log(
  array[0],
  array[parseInt(array.length / 2)],
  array[array.length - 1]
);

/** Task 06 */
let isCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

/** Taks 07 */
console.log(isCompanies);

/** Task 08 */
console.log(isCompanies.length);

/** Task 09 */
console.log(
  isCompanies[0],
  isCompanies[parseInt(isCompanies.length / 2)],
  isCompanies[isCompanies.length - 1]
);
/** Task 10 */
for (i = 0; i < isCompanies.length; i++) {
  console.log(isCompanies[i]);
}

/** Task 11 */
for (i = 0; i < isCompanies.length; i++) {
  console.log(isCompanies[i].toUpperCase());
}

/** Task 12 */
var output = "";
for (i = 0; i < isCompanies.length; i++) {
  if (i == isCompanies.length - 1) {
    output += "and " + isCompanies[i].toUpperCase();
  } else {
    output += isCompanies[i].toUpperCase() + ", ";
  }
}
console.log(output + " are big IT companies.");

/** Task 13 */
var input = prompt("Enter company name: ");
if (isfound(input)) {
  console.log("company found");
} else {
  console.log("comapny not found");
}
function isfound(company) {
  for (i = 0; i < isCompanies.length; i++) {
    if (isCompanies[i].toUpperCase() == input.toUpperCase()) {
      return true;
    }
  }
  return false;
}

/** Task 14 */
var filteredCompanies = [];
for (i = 0; i < isCompanies.length; i++) {
  if (
    isCompanies[i].toUpperCase().indexOf("O") !=
    isCompanies[i].toUpperCase().lastIndexOf("O")
  ) {
    filteredCompanies.push(isCompanies[i]);
  }
}
console.log(filteredCompanies);

/** Task 15 */
console.log(isCompanies.sort());

/** Task 16 */
console.log(isCompanies.reverse());

/** Task 17 */
console.log(isCompanies.slice(0, 3));

/** Task 18 */
console.log(isCompanies.slice(isCompanies.length - 3));

/** Task 19 */
console.log(
  isCompanies.slice(
    parseInt(isCompanies.length / 2),
    parseInt(isCompanies.length / 2) + 1
  )
);

/** Task 20 */
isCompanies.splice(0, 1);
console.log(isCompanies);

/** Task 21 */
isCompanies.splice(parseInt(isCompanies.length / 2), 1);
console.log(isCompanies);

/** Task 22 */
isCompanies.splice(isCompanies.length - 1, 1);
console.log(isCompanies);

/** Task 23 */
isCompanies.splice(0);
console.log(isCompanies);
