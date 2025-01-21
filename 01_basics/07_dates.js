//Dates

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

//let createdDate= new Date(2023,0,23)
// createdDate= new Date(2023,0,23,5,3)
// console.log(createdDate.toDateString());

// console.log(createdDate.toLocaleString());

let mycreateDate=new Date("2023-01-22")
console.log(mycreateDate);
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(mycreateDate.getTime());
let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"narrow"
})






