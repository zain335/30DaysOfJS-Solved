/**Task 01 */
console.log('/** Task01 */')
let firstName = "Zain";
let lastName = "Ali";
let country = "Pakistan";
let city = "Lahore";
let age = 23;
let isMarried = false;
let year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/**Task 02 */
console.log('/** Task02 */')
console.log(typeof "10" == typeof 10);

/**Task 03 */
console.log('/** Task03 */')
console.log(parseInt("9.8") == 10);

/**Task 04 */
console.log('/** Task04 */')
let truly1 = 1;
let truly2 = "trylyString";
let truly3 = true;

if (truly1 && truly2 && truly3) {
  console.log("All statements are truly");
}

let falsy1 = 0;
let falsy2 = "";
let falsy3 = false;
let falsy4 = undefined;
let falsy5 = null;
let falsy6 = 0n;
let falsy7 = NaN;

if (!(falsy1 && falsy2 && falsy3 && falsy4 && falsy5 && falsy6 && falsy7)) {
  console.log("All statements are falsy");
}

/**Task 05 */
console.log('/** Task05 */')
console.log(4 > 3 ? "True" : "False");
console.log(4 >= 3 ? "True" : "False");
console.log(4 < 3 ? "True" : "False");
console.log(4 <= 3 ? "True" : "False");
console.log(4 == 4 ? "True" : "False");
console.log(4 === 4 ? "True" : "False");
console.log(4 != 4 ? "True" : "False");
console.log(4 !== 4 ? "True" : "False");
console.log(4 != "4" ? "True" : "False");
console.log(4 == "4" ? "True" : "False");
console.log(4 === "4" ? "True" : "False");
console.log("python".length != "jargon".length ? "Not Equal" : "Equal");

/**Task 06 */
console.log('/** Task06 */')
console.log(4 > 3 && 10 <12 ? "True" : "False");
console.log(4 > 3 && 10 >12 ? "True" : "False");
console.log(4 > 3 || 10 <12 ? "True" : "False");
console.log(4 > 3 || 10 >12 ? "True" : "False");
console.log(!(4 > 3) ? "True" : "False");
console.log(!(4 < 3) ? "True" : "False");
console.log(!(false) ? "True" : "False");
console.log(!(4 > 3 && 10 < 12) ? "True" : "False");
console.log(!(4 > 3 && 10 > 12) ? "True" : "False");
console.log(!(4 === '4')? "True" : "False");
console.log(!('python'.includes('on') && 'dragon'.includes('on')) ? "There is 'on' in 'python' and 'dragon' " : "There is no 'on' in 'python' and 'dragon' ");

/**Task 07 */
console.log('/** Task07 */')
let date =  new Date()
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())
