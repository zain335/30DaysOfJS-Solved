/** Task 01 */
function myName() {
  console.log("Muhammad Zain Ali");
}
myName();

/** Task 02 */
function fullName(firstname, lastname) {
  return `${firstname} ${lastname}`;
}
console.log(fullName("Zain", "Ali"));

/** Task 03 */
function addNumbers(x, y) {
  return x + y;
}
console.log(addNumbers(5, 7));

/** Task 04 */
function areaOfRectangle(lenght, width) {
  return lenght * width;
}
console.log(areaOfRectangle(5, 7));

/** Task 05 */
function perimeterOfRectangle(lenght, width) {
  return 2 * (lenght + width);
}
console.log(perimeterOfRectangle(5, 7));

/** Task 06 */
function volumeOfRectPrism(lenght, width, height) {
  return lenght * width * height;
}
console.log(volumeOfRectPrism(5, 7, 3));

/** Task 07 */
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(areaOfCircle(5));

/** Task 08 */
function circumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumference(5));

/** Task 09 */
function density(mass, vloume) {
  return mass / vloume;
}
console.log(density(10, 4));

/** Task 10 */
function speed(distance, time) {
  return distance / time;
}
console.log(speed(29, 5));

/** Task 11 */
function weight(mass) {
  return 9.8 * mass;
}
console.log(weight(60));

/** Task 12 */
function convertCelsiusToFahrenheit(cTemperature) {
  return cTemperature * (9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(37.6));

/** Task 13 */
function bmi(weight, height) {
  bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "under weight";
  }
  if (bmi < 24.9) {
    return "normal weight";
  }
  if (bmi < 29.9) {
    return "over weight";
  }
  return "obese";
}
console.log(bmi(78, 1.7));

/** Task 14 */
function checkSeason(month) {
  if (month >= 12 && month <= 2) {
    return "Winter";
  }
  if (month >= 3 && month <= 6) {
    return "Spring";
  }
  if (month >= 7 && month <= 8) {
    return "Summer";
  }
  if (month >= 9 && month <= 11) {
    return "Autumn";
  }
  return "invalid month";
}
console.log(checkSeason(11));

/** Task 15 */
function findMax(...args) {
  return args.sort().reverse()[0];
}
console.log(findMax(1, 5, 3, 2, 6, 8, 4));
