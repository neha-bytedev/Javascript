//array
const myArr=[0,1,2,3,4,5,6,7]
const Myheroes=["shaktiman","Iron-Man"]

const myArr2= new Array(0,2,4,5,6,7)
console.log(myArr2[4]);//access elements by indexing
//Array Methods
// shallow copy share the same reference and deep copy doesn't
myArr.push(6)//add element
myArr.push(7)
myArr.pop()//remove element from last
// console.log(myArr);
// myArr.unshift(9)//Insert from first
// console.log(myArr);
// myArr.shift()//delete from first

// const newArr=myArr.join()//add element into string
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);// output - string

//slice ,splice
console.log("A",myArr);

const myn1=myArr.slice(1,3)//include first exclude last and remain original one
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)//remove element from list and include last
console.log(myn2);
console.log("C",myArr);



