/** Task 01 */
import { countries } from "./countries.js";
import { companies } from "./web_techs.js";

console.log(countries);
console.log(companies);

/** Task 02 */
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
let words = text.split(" ")
console.log(words)
console.log(words.length)

/** Task 03 */
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.toString().includes("Meat")){
    shoppingCart.unshift("Meat")
}
console.log(shoppingCart)
if(!shoppingCart.toString().includes("Sugar")){
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf("Honey"),1)
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart)

if(countries.indexOf("Ethiopia")!=-1){
    console.log(countries[countries.indexOf("Ethiopia")].toUpperCase())
}else{
    countries.push("Ethiopia")
}

if(companies.indexOf("Sass")!=-1){
    console.log("Sass is a CSS preprocess")
}else{
    companies.push("Sass")
    console.log(companies)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)