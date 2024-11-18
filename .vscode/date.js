//Formeting
let mydate = new Date('2024-07-29');
console.log(mydate)

//get date method
let myDate = new Date();
let currentdate = myDate.getFullYear();
let currentmonth = myDate.getMonth();
let currentday = myDate.getDay();
let currenthours = myDate.getHours();
let currentminutes = myDate.getMinutes();
let currentseconds = myDate.getSeconds();
let currentmilliseconds = myDate.getMilliseconds();
console.log(currentmonth)

//set date method
let d = new Date();
d.setFullYear(2024,11,3);
d.setMonth(7);
console.log(d)

//Math object
//math rounded
let math = Math.round(4.5);
console.log(math)

//math.ceil
let ceil = Math.ceil(1.2);
console.log(ceil)

//math floor
let floor = Math.floor(1.9);
console.log(floor)

//math.trunc
let trunc = Math.trunc(1.8);
console.log(trunc)

//math.sign
let sign = Math.sign(-100);
console.log(sign)

//math power()
let pow = Math.pow(8,3);
console.log(pow)

//math.sqrt
let sqrt = Math.sqrt(89);
console.log(sqrt)

//math.absolute
let absolute = Math.abs(-100.99);
console.log(absolute)

//math random
let random = Math.random();
console.log(random)

//math.min
let min = Math.min(1,2,3,4,5,6,-4);
console.log(min)

//math.max
let max = Math.max(5,9,3,7,29);
console.log(max)

//control flow statement
let age = 20;
if(age <= 20){
    console.log("welcome to hablu programmer")
}

//Nested if statement
let age1 = 16;
let country = "Bangladesh";
if(country == "Bangladesh"){
    if(age1 >= 16){
        console.log('you are selected for driving licence')
    }
}

if(country == 'Bangladesh' && age >= 16){
    console.log('you are selected')
}else{
    console.log('you are not selected')
}

//if else if statement
let a = 20;
let b = 30;
let c = 'Hablu';
if(a > b){
    console.log('a is greater than b')
}
else if(a < b){
    console.log('a is less than b')
}
else{
    console.log('a is not greater than b')
}

//Ternary operator
let old = 17;
let message = old > 17 ? 'you can drive': 'you cannot drive';
console.log(message)

//Multiple condition in Ternary operator
let speed = 80;
let message1 = speed >=120 ? 'speed is too fast': speed >= 80 ? 'average you can drive': 'slow';
console.log(message1)

//switch case
let day = 3;
let dayName;
switch(day){
    case 1:
        dayName = 'saturday';
    case 2:
        dayName = 'sunday';
    case 3:
        dayName = 'Monday';
    case 4:
        dayName = 'tuesday';
    case 5:
        dayName = 'wednesday';
    case 6:
        dayName = 'thursday';
    case 7:
        dayName = 'Friday';
    default:
        dayName = 'Invalid day name';
}
console.log(dayName)

//For loops
for(let i= 0; i <= 10; i ++ ){
    console.log('Hello')
}

//For in loop
const person = {
    name: ' kaniz',
    phone: ' 3265890',
    age: ' 24',
    gender: ' Female'
}
let storage = '';
for(let prop in person){
    storage += person[prop ]
}
    
console.log(storage)

//For of loop
const arr = ['eshan','tutul','rakibul','nasif','sajeeb'];
for (let i of arr){
    console.log(i)
}

//while loop
let count = 0;
while(count <= 5){
    console.log(count)
    count ++
}

//do..while loop
let count1 = 0;
do{
    console.log(count1)
    count1 ++
}while(count1 <= 10)
