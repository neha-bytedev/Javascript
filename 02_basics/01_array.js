//array
const myArr=[0,1,2,3,4,5,6,7]
const Myheroes=["shaktiman","Iron-Man"]

const myArr2= new Array(0,2,4,5,6,7)
console.log(myArr2[4]);
//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);

//slice ,splice
console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)//remove element from list
console.log(myn2);
console.log("C",myArr);



