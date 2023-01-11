const str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let strArray = str.split(" ");
let counter = 0;
for (i = 0; i < strArray.length; i++) {
  if (strArray[i].includes("love")) {
    counter++;
  }
}
console.log(counter);
const str1 =
  "You cannot end a sentence with because because because is a conjunction";
let strArray1 = str1.split(" ");
let counter1 = 0;
for (i = 0; i < strArray1.length; i++) {
  if (strArray1[i].match("because")) {
    counter1++;
  }
}
console.log(counter1);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleanSentnce = sentence.replace(/[^a-zA-Z ]/g, "");

let cleanArray=cleanSentnce.split(" ")
let max = 0
let freqWord

for(i=0;i<cleanArray.length;i++){
    if(cleanSentnce.split(' '+cleanArray[i]+' ').length>max){
        max = cleanSentnce.split(' '+cleanArray[i]+' ').length
        freqWord = cleanArray[i]
    }
}

console.log(`Most Frequent work is ${freqWord} having frequency ${max}`)

let statement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'


let numArray = []
for(i=0;i<statement.split(',').length;i++) {
let numeric = (statement.split(',')[i].match(/\d/g)).join("")
numArray[i] = numeric
}
let anualRevenue = +numArray[0] * 12 + +numArray[1] + +numArray[2] *12
console.log(anualRevenue)
