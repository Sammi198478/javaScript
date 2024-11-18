//map.get method
const fruits = new Map(
    [
        ["Apples", 500],
        ["Banana", 300],
        ["oranges", 200]
    ]
)
let info = fruits.get('Apples');
console.log("Today Apples price in khulna " + info + 'tk')

//Map.set method
const Teaminfo = new Map();
Teaminfo.set('ceo','Eshan');
Teaminfo.set('teacher','sajeeb');
Teaminfo.set('teamleader','salman');
Teaminfo.set('teammembers',8);
console.log(Teaminfo)

//iief invoked
// (function(a,b){
//     return (a + b)
// })(30,20)

// let sum = ((a,b,c) =>{
//     return console.log(a * b + c)
// })(2,5,6);

//callback function
function displayer(userdata){
    console.log(userdata)
}
function user(firstname,lastname,prof,age){
    firstname;
    lastname;
    prof;
    age;
    let info = firstname + lastname + ' , ' + prof + ' , ' + age;
    return info

}
let myinfo = user('eshan',' ahmed','programmer',20);
displayer(myinfo)

//promise condition
let message = true;
let myPromise = new Promise((resolve,reject)=>{
    if(message){
        resolve([
            {username: 'Eshan',age:20,country:'Bd'},
            {username:'tutul',age:24,country:'Bd'}
        ])
    }else{
        reject('you are not bangladeshi')
    }
})
myPromise.than((success)=>{
    console.log(success)
})
myPromise.catch((error)=>{
    console.log(error)
})


