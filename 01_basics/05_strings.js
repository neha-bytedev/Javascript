const name="Neha"
const repoCount=50
//console.log(name+ repoCount+"Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}.`);

const gameName=new String('neha-sh-ar')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-6,4)
console.log(anotherString);

const otherString="  neha  "
console.log(otherString);
console.log(otherString.trim());

const url="neha.saman%30gmail.com"
console.log(url.replace('%30','-'));
console.log(url.includes('neha'));
console.log(url.includes('hello'));

console.log(gameName.split('-'));

