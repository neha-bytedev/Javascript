const score=400
console.log(score);

const balance= new Number(100) //for dedicately specify number
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// output- 400.00 

const otherNumber=23.565667
// console.log(otherNumber.toPrecision(3)); precise upto 3 value
const hundreds=100000;

// console.log(hundreds.toLocaleString);//output- 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));
//+++++++MATHS ++++++///

console.log(Math);

console.log(Math.abs(-4));//absolute change to positive
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));//upper
// console.log(Math.floor(4.3));//lower
console.log(Math.max(4,3,6,7));
console.log(Math.random());
console.log((Math.random()*10) +1);

const min=20
const max=30


console.log(Math.floor(Math.random()*(max-min+1))+min);

