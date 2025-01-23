const marvel_heros=["thor","Iron-man","Spider-man"]
const dc_heros=["Shakti-man","Naag-raj","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros=marvel_heros.concat(dc_heros) //Concat Operator
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]//preferrable(spread operator)

console.log(all_new_heros);
const another_array=[1,2,,3,4,[5,6,7],[9,10,11,[23,34]]]

const real_array=another_array.flat(Infinity)
console.log(real_array)

console.log(Array.isArray("Neha"))
console.log(Array.from("Neha"))
console.log(Array.from ( {name:"Neha"}))
    // Interesting 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
    



