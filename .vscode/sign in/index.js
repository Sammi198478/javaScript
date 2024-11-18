const password = document.querySelector("#password");
const togglepassword = document.querySelector("#togglepassword");
togglepassword.addEventListener("click",(e)=>{
    e.preventDefault()
    const type = password.getAttribute("type");
    if(type === "password"){
        password.setAttribute("type", "text");
        togglepassword.textContent = "Hide"
    }
    else{
        password.setAttribute("type", "password");
        togglepassword.textContent = "show"
    }
})