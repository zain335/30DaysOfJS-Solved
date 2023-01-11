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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

/** Task 01 */
for (let i = 0; i < 10; i++) {
  console.log(countries[i]);
}
let i = 0;
while (i < 10) {
  console.log(countries[i]);
  i++;
}
let j = 0;
do {
  console.log(countries[j]);
  j++;
} while (j < 10);

/** Task 02 */
for (let i = 9; i >= 0; i--) {
  console.log(countries[i]);
}
i = 10;
while (i >= 0) {
  console.log(countries[i]);
  i--;
}
j = 10;
do {
  console.log(countries[j]);
  j--;
} while (j >= 0);

/** Task03 */
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

/** Task 04 */
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

/** Taks 05 */
for (let i = 0; i <= 10; i++) {
  console.log(i + " x " + i + " = " + i * i);
}

/** Taks 06 */
for (let i = 0; i <= 10; i++) {
  console.log(i + " " + i * i + " " + i * i * i);
}

/** Taks 07 */
for (let i = 0; i <= 100; i++) {
  i % 2 == 0 ? console.log(i) : "";
}

/** Task 08 */
for (let i = 0; i <= 100; i++) {
  i % 2 == 0 ? "" : console.log(i);
}

/** Task 09 */
for (let i = 3; i <= 100; i++) {
  let counter = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j == 0) {
      counter++;
    }
  }
  if (counter == 1) {
    console.log(i);
  }
}

/** Task 10 */
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers form 0 to 100 is " + sum);

/** Task 11 */
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 == 0 ? (evenSum += i) : (oddSum += i);
}
console.log(
  "The sum of all evens from 0 to 100 is " +
    evenSum +
    ". And the sum of all odds from 0 to 100 is " +
    oddSum
);

/** Task  12*/
console.log([evenSum, oddSum]);
