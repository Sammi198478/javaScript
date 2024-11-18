const data = document.getElementById("hablu");
console.log(data)

const data1 = document.querySelector(".child")
console.log(data1.parentNode)

const parents = document.querySelector("#menu")
console.log(parents.firstChild)

let div = document.createElement('div');
div.innerHTML = "<h1> This is h1 tag </h1>";
document.body.appendChild(div);


let div = Document.createElement("div");
div.id = "content";
div.className = "Note";
div.innerHTML = " <a href=''>click me</a>";
document.body.appendChild(div)

const data2 = document.getElementById('myP');
console.log(data2.innerHTML)
console.log(data2.innerText)
console.log(data2.textContent)
 

//Append()method
const app = document.querySelector("#app");
let langs = ["javaScript","python","c","c#"];
let nodes = langs.map((prolang)=>{
    let li = document.createElement("li");
    li.textContent = prolang;
    return li
})
app.append(...nodes)