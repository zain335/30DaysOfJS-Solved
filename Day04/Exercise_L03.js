const prompt = require("prompt-sync")();

/** Task 01 */
let month = prompt('Enter month: ');
let year = prompt('Enter year: ');

let isLeapYear = parseInt(year) % 400 == 0 ? true : false
month = month.toLowerCase();
let days = (month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december') ? 31 : 
             (month == 'april' || month == 'june' || month == 'september' || month == 'november') ? 30 :
             (month == 'february' && isLeapYear) ? 29 :
             (month == 'february' && !isLeapYear) ? 28 : 
             -1;
days == -1 ? console.log(`${month} is an invalid input`) : console.log(`${month.toUpperCase()} has ${days} days.`);
