function habluFun(a,b,c) {
    console.log(a,b,c)
    
}
habluFun(10,20,30)

//return value
function add(eshan,tutul){
    return eshan + tutul
}
let hablu = add('founder ',' cofounder');
console.log(hablu)

//first-class-citizen function
function get(a,b){
    return a + b
}
let sum = get
console.log(sum(20,30))
console.log(get(30,30))

//nested function
function Ahad(a){
    function tutul(b) {
        function sajeeb(c){
            console.log(a + b + c)
        }
        sajeeb(' sajeeb is tha founder at becodemy \n')
        
    }
    tutul(' tutul is tha co-founder at hablu programmer \n')
}
Ahad(' Ahad is tha founder at hablu programmer \n')

//function as a parameter
function add(a,b){
    return a + b;
}
let total = add;
function count(a,b, fun){
    return fun(a,b)* 5;
}
let result = count(2,5, total)
console.log(result)

//anonymous function
// (
//     function(){
//         console.log("anonymous function")
//     }
// )()
// output ase console.log is not a function

//function expression
let y = function(a,b){return a + b}
console.log(y(20,60))

//pass by-value of pwimitives values
function gablu(a){
    return a = a * a
}
let b = 10;
;let result1 = gablu(b)
console.log(result1)

//pass-by-value of reference value
let person = {
    NAME: "ESHAN",
    age: 20
}
function Increase(a){
    a.age = a.age + 1
}
Increase(person)
console.log(person)

//Recursive function
function Hello(number){
    if (number === 0)return;
    console.log(number)
    Hello(number - 1)
}
Hello(10)

//Default parameter
function dibbo(a = 'esmitha'){
    console.log(a)
}
dibbo('sha esmitha')

//Array forEach
const info = ['eshan','tutul','sajeeb'];
info.forEach(companyinfo)
function companyinfo(value, index, itself){
    console.log(value + '' + index)
}

//Array Map()
const Nisa = [2,4,6,8,10];
let number = Nisa.map(function(value){
    return value * 3
})
console.log(number)
console.log(Nisa)




//Regular search()/match
let text = 'please subscrib hablu programmer';
let result2 = text.search(/hablu/ig)
console.log(result2)

//replace()
let changed = text.replace(/hablu programmer/ig,'Hablu mama')
console.log(changed)


//Global scope
let say = 'hi';
console.log(say)





//function scope//block scope
function say1(){
    let sayhi = 'message';
    console.log(say1)
}


//block scope
{
    let sayHello = 'message sent';
    console.log(sayHello)
}


//try......catch......finally
try{
    console.log('hablu mama')
}catch{
    let result = hablu(10,20);
    console.log(result)
}finally{
    console.log('please subscrib')
}