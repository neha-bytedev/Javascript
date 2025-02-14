//Dates

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

//let createdDate= new Date(2023,0,23) //Mon Jan 23 2023
// createdDate= new Date(2023,0,23,5,3)
// console.log(createdDate.toDateString());

// console.log(createdDate.toLocaleString());

let mycreateDate=new Date("2023-01-22")// YY-MM-DD
console.log(mycreateDate);
let myTimeStamp=Date.now()// typeof Date is Object
// console.log(myTimeStamp);
// console.log(mycreateDate.getTime());//OUTPUT-222040328 ms
let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"narrow"
})

//+++++++Functions Operated on Dates ++++++++++//

console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z




