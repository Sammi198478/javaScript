function say(message = "hello dear thanks for colling me"){
    console.log(message)
}
say()

function MyInfo(...argu){
    console.log( ...argu)
}
MyInfo(2,4,6,8,10,14,18,22)

//constructing array
let ValueOne = [1,2,3,4,5];
let ValueTwo= [...ValueOne,8,9,10,12,16];
console.log(ValueTwo)

//concatenating array
let Teacher = ["ahad","tutul","sajeeb"]
let SupportTeam = ["salman","rakibul","nasif"]
let HabluProgrammer = [...Teacher,...SupportTeam];
console.log(HabluProgrammer)

//object literal syntex
function sayHi(username,userinfo){
    return{
        username,
        userinfo
    }
}
console.log(sayHi("eshan","Founder and ceo at hablu programmer"))

//step2
let message = "Hi, junior programmer";
username = "kaniz"
const Name = {
    message:message,
    username:username
}
 console.log(Name)

 //step3

 let MyName = "Dibbo";
 let info = {
    [MyName]:"he is founder and ceo",
 }
 console.log(info)

 //step 4

 let server = {
    name:"server side",
    restart(){
        console.log("This is concise method");
    }
 }
 console.log(server.restart())


 //For..of loop


 //object destructuring

//  const ratings = [
//     {username:"Eshan",info:"ceo at hablu programmer"},
//     {username:"tutul",info:"co-founder at hablu programmer"},
//     {username:"sajeeb",info:"founder at becodemy"},
//  ]
//  let sum = 0;
//  for (let {username} of ratings){
//     console.log{username}
//  }
//template string
let text6 = `Hello hablu programmer`;
console.log(text6)

//class
class userInfo {
    constructor(name,prof,age,gender,hometown){
        this.name = name;
        this.prof = prof;
        this.age = age;
        this.gender = gender;
        this.hometown = hometown;
    }
}
const user1 = new userInfo("kaniz","freelancer",20,"female","khulna");
console.log(user1)
//get keey
const person = {
    firstname:"Eshan",
    lastname:"Ahmed",
    age:22,
    prof:"programmer",
    get pro(){
        return this.prof;
    }

}
console.log(person.prof)

//set keey
const Info = {
    userName:"kaniz",
    email:"farhanakanij4@gmail.com",
    set Newemail(newmail){
        this.email = newmail

    }
}
Info.newmail = "admin@gmail.com";
console.log(Info)

//Fasr class cityzen
function Factory(Habluclass){
    return new Habluclass()
}
let greeting = Factory(class{
    sayHi(){
        console.log("Hello junior programmer")
    }
})
greeting.sayHi()


//computed proparty
let problame = "userName";
const userinfo = {
    [problame]:"eshan",
    email:"admin@gmail.com",
    hobby:"codding",
    age:24,
}
console.log(userinfo)

//inheritance
class car {
    constructor(Brand){
        this.Brand = Brand;
    }
    parent(){
        return "my car Brand Name Is" + this.Brand
    }
}
class Model extends car{
    constructor(Brand,Model){
        super(Brand);
        this.Model = Model;
    }
    show(){
        return this.parent() + "And model Is" + this.Model;
    }
}
let mycar = new Model("Ford","Mustang");
console.log(mycar)


//new.target
function person(name){
    if(!new.target){
        throw "must use new operator with this person function";
    }
    this.name = name;
}
let myperson = new person ("kaniz Farhana")
console.log(myperson)