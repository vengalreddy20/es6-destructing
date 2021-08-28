//oject destructing

let person={name:'vengalreddy',age:'21',place:'hyderabad'}

let {fname,years,city}=person;
console.log(person)



let animals=['tiger','lion','cat']

let [first,second,third]=animals
console.log(first)
let [,,third1]=animals

console.log(third1)


//spread operator

let one=[1,2,3,4]
let two=[7.8,9]
 let combine=[...one,...two]
 console.log(combine)
 let combine1=[...one,5,...two]
 console.log(combine1)
 