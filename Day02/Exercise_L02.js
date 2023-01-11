console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")
console.log(typeof('10')==typeof(10+""))
console.log(Math.ceil(parseFloat('9.8'))==10)
console.log('python'.includes('on')&&'jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))
console.log(Math.round(Math.random()*100))
console.log(Math.floor(Math.random() * (100 - 50)) + 50);
console.log(Math.floor(Math.random() * (255 - 0)) + 0);
console.log('JavaScript'[Math.round(Math.random()*(9))])
for(i=1;i<=5;i++){console.log(i+'\t1\t'+ i + '\t'+ i**2 +'\t'+ i**3+'\n')} 
const str = 'You cannot end a sentence with because because because is a conjunction'
console.log(str.substr(str.indexOf('because'),'because'.length*3+2))
