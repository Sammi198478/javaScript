const person = {
    firstName:"Eshan",
    lastName:"Ahmed",
    age: 20
}
let {firstName, lastName, prof = "PROGRAMMER"} = person;
console.log(firstName)
console.log(prof)

//string destructuring
let str = "welcome to the programming world";
let [a,b,c,d,e,f] = str;
console.log(a,b,c,d,e,f)

//array destructuring
let fruits = ["apple","banana","mango"];
let [fruits1, fruits2, fruits3] = fruits;
console.log(fruits1)