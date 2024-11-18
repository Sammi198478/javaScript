const framework = document.querySelector("#framework");
const btnAdd = document.querySelector("#btnAdd");
const list = Document.querySelector("#list");
const btnRemove = document.querySelector("#btnRemove");

btnAdd.addEventListener("click",(event)=>{
    event.preventDefault()

    if(framework.value == ""){
        alert("input fild is empty");
        return;
    }
    const option = new Option(framework.value, framework.value);
    list.add(option,undefined);
    framework.value = "";
})
btnRemove.addEventListener("click",(e)=>{
    e.preventDefault();
    let selected = [];
    for(let i = 0; i <list.Options.length; i++){
        selected[i] = list.option[i].selected;

    }
let index = list.options.length;
    while (index--){
        if(selected[index]){
            list.remove(index)
        }
    }
})

