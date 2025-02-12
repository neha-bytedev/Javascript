let score="33abc"
console.log( typeof score);
console.log(typeof(score));
//let {score}=req.body
let valueInNumber= Number (score)// guarantee conversion to string
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*
"33"=>33
"33abc"=> NaN
null=>0
undefined=>NaN
"string"=>NaN
true =>1 / false=> 0
*/
let IsLoggedIn=1
let booleanIsloggedIn= Boolean(IsLoggedIn)
console.log(booleanIsloggedIn);
/*
1 => true / 0 => false
""=> false / "neha"=> true
*/
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
// ------ Operations -----//
let value=3
let negvalue=-value
console.log(negvalue)



let str1="hello"
let str2=" Neha"
 let str3=str1+str2
 console.log(str3);


 console.log("1"+2);
 console.log(1+3+"2");//first number then string
 console.log("2"+ 1+ 2);//first string make all string
 // use parenthesis better operations//
 console.log((3+4)*5/3);
 console.log(true);
 // conversion into strings
 console.log(+true);// its shows  value =>1
 console.log(+"");// value=>0
 
 let num1,num2,num3
 num1=num2=num3= 2+2 // not good readability
  let gameCounter=100
  gameCounter++
  //++gameCounter
  console.log(gameCounter)
 
 

 
 
 
 
 