//Primitive /Call by value
//7 types:String,Number,Boolean,null, undefined,Symbol,BigInt(scientific Value) 
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null;
let userEmail=undefined// let userEmail;
const Id=Symbol('123')
const anotherId=Symbol('123')
console.log(Id===anotherId); //False
const bigNumber=345678920113766n //BigInt
//Non-Primitive / Call by refernce 

//Array, Objects.Functions

const heros=["shaktimaan","IronMan","Spiderman"]//Array
let myObj={
    name:"Neha",  //Object
    age:19,
}
const myfunction= function(){    
    console.log("hello World");  //Functions=> object function
    
}
 //console.log(typeof myObj);
 //console.log(typeof myfunction);
 console.log(typeof heros);
 //+++++++++++++++++++++++++++++++
 //Stack (Primitive),Heap (Non-Primitive)
 let myYoutubechannel="neha.saman.com"
 let anothername= myYoutubechannel
 anothername="geeksforgeeks"
 console.log(myYoutubechannel);//original
 console.log(anothername);//copy value 

 let userOne={
    email:"user12@google.com",
    upi:"user@ybl",
 }
 
  let userTwo=userOne
  userTwo.email="neha123@gmail.com"
  console.log(userOne);
  console.log(userTwo);
  
  /*
  typeof data_types
 Number=> number
 String=>string
 Boolean=> boolean
 null=> object
 undefined=> undefined
 Symbol=> symbol
 BigInt=>bigint

 Array=>Object
 Function=>function
 Object=> object function
  */
 
