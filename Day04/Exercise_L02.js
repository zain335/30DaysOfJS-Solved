const prompt = require("prompt-sync")();

/** Task 01 */
const score = prompt('Enter score: ');

let grade = (score>=90 && score<=100) ? 'A' : 
            (score>=70 && score<=89) ? 'B' :
            (score>=60 && score<=69) ? 'C' :
            (score>=50 && score<=59) ? 'D' :
            (score>=0 && score<=49) ? 'F' :
            "Invalid score input.";
console.log(grade)

/** Task 02 */
let month = prompt('Enter month: ');
month = month.toLowerCase();
let season = (month == 'september' || month == 'october' || month == 'november') ? 'Autumn' : 
             (month == 'december' || month == 'january' || month == 'february') ? 'Winter' :
             (month == 'march' || month == 'april' || month == 'may') ? 'Spring' :
             (month == 'june' || month == 'july' || month == 'august') ? 'Summer' :
             "Invalid month input.";
console.log(season)

/** Task 03 */
let day = prompt("Enter day: ");
day = day.toLowerCase();
day == 'saturday' || day == 'sunday' ? console.log(`${day.toUpperCase()} is a weekend`)  : console.log(`${day.toUpperCase()} is a working`);
