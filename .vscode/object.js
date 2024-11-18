//variable
const car = "color:red " + " weight:600kg " + " model:Bmw"
console.log(car)

//object
const person ={
    firstname:"kaniz",
    lastname:"Farhana",
    nickname:"shammi",
    phone:"326569889",
    address:"khulna,bangladesh"

}
person.firstname = "Dibbo"
person.gfnumber = "0676454223"
delete person.gfnumber
console.log("age" in person)

//Arithmetic operators
//Addition operator
let price = 20;
let deliverycharge = 50;
const totalprice = 50 + 20
console.log(totalprice)

//subtraction operator -
let productprice = 100;
let discountprice = 30;
total = productprice - discountprice
console.log(total)

//multiplication operator *
let mult = 7*10;
console.log(mult)

//divide operator /
let result = 140/2;
console.log(result)

//string Addition
let firstName = "smitha";
let lastName = "Dibbo";
let FullName = firstName  + '  ' +  lastName
console.log(FullName)

let x = "this is x letter";
x +=  " & the next letter is y";
console.log(x)

//strings and Numbers
let str = "this is Dibbo";
let num = 100;
let sum = str + num
console.log(sum)

let bum = "10" + 5;
console.log(bum)

//Remainder operator
let dum = 10 % 3;
console.log(dum)

//unary +
let s = "10";
let p = +s
console.log(s)

//logical Not!
let eligible = false;
let required = true
console.log(eligible || required)

//Exponentiation operator
let ptr1 = 10;
let ptr2 = 2;
console.log(ptr1 ** ptr2)

//string

//charAt
let text = "Hello junior";
console.log(text.charAt(0))

//concat() string
let text1 = "Hello";
let text2 = "programmer";
let text3 = "whats up";
console.log(text1.concat('  ',text2," ", text3))

//string indexof() / string length
let str1 = "Hello my lovely people, How is going";
// console.log(str1.indexOf("is"))
console.log(str1.length)

//string repeat()
let text4 = "Hello world, ";
console.log(text4.repeat(9))

//string replace
let Hablu = "hablu mama";
console.log(Hablu.replace("hablu","Eshan"))

//touppercase and to lowercase
let text5 = "hello kemon aso tomra";
console.log(text5.toUpperCase())

//Back-Tics syntax
let text6 = `hello "hablu mama" `;
console.log(text6)

//multipole string
let text7 = `banlga
english
hindi
urdho`;
console.log(text7)

let text8 = "Eshan";
let text9 = "Ahmed";
console.log(`My name is ${text8} ${text9}`)

//convert variable to number
let n = "1000";
console.log(typeof parseInt(n))

//Array
const mylist = ["item1","item2",100,200,true,false,null];
mylist[1] = "Eshan"
mylist.push('Tutul')
mylist.unshift('kaniz')
mylist.pop()
mylist.shift()
console.log(mylist)

//Array to string
const MyInfo = ["Eshan","Tutul", 20,"Rajshahi"];
// let info = MyInfo.at(2)
// console.log(info)
console.log(MyInfo.join(" # "))

//marging array(concatenating)
const array1 = [1,2,3,4,5,];
const array2 = [6,7,8,9,10];
const array3 = [11,12,13,14,15];
let Info = array1.concat(array2,array3)
console.log(Info)
// array1.splice(o,2);
// console.log(array1)

//Array flat()
const flatingArray = [[1,2],[3,4],[5,6],[7,8]]
console.log(flatingArray.flat())

//Array tospliced()
const Array4 = [1,2,3,4,5,6,7,8,9,10]
const Array5 = [11,12,13,14,15,16,17,18,19,20]
const spl = Array4.toSpliced(0,2);
console.log(spl)
// Array4.splice(0,4);
// console.log(Array4)

//Arrow Function
let fun = function (a,b){
    return a+b
  }
  console.log(fun(20,30))

  let arrowFun = (c,d) => c+d;
  console.log(arrowFun(50,40))


  //Funtion Call()
  const person1 = {
    FullName: function(){
        return this.FirstName +' '+ this.LastName

    }
  }
  const person2 ={
    FirstName: 'Foysol',
    LastName: 'Ahmed',
  }
  const valu = person1.FullName.call(person2)
  console.log(valu)

  //Function Apply method
  const person3 = {
    Full: function(city,country){
        return this.Firstname +'  '+ this.Lastname +' ,'+ city +'  '+ country
    }

  }
  const person4 = {
    Firstname: 'kaniz',
    Lastname: 'Farhana',


  }
 let fullvalu = person3.Full.apply(person4, ['Dhaka','Bangladesh']);
 console.log(fullvalu)

 //Function bind()
 const data = {
    fullName: 'shah',
    listname: 'Esmitha',
    display: function(){
       console.log(this.fullName +' '+ this.listname) 
    }
 }

 let display = data.display.bind(data)
 setTimeout(Date.display, 3000);



