/** Task 01 */
let dog = {};

/** Task 02 */
console.log(dog);

/** Task 03 */
dog.name = "Scoobydoo";
dog.leg = 4;
dog.color = "brown";
dog.age = 10;
dog.barkProperties = function () {
  return "woof woof";
};

/** Task 04 */
console.log(dog.name, dog.age, dog.leg, dog.color, dog.barkProperties());

/** Task 05 */
dog.breed = "Great Dane";
dog.getDogInfo = function () {
  return `${dog.name} is a ${dog.color} ${dog.breed} dog having ${dog.leg} legs and ${dog.age} years old`;
};

console.log(dog.getDogInfo())
