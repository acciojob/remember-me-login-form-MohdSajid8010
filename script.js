//your JS code here. If required.
let submitBtn=document.getElementById("submit");
let usernameEl=document.getElementById("username");
let passwordEl=document.getElementById("password");
let checkboxEl=document.getElementById("checkbox");

let existingBtn=document.getElementById("existing");
let form=document.getElementsByTagName("form")[0];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(checkboxEl.checked)
    {
        let username=usernameEl.value;
        localStorage.setItem("username",JSON.stringify(username))

        let password=passwordEl.value;
        localStorage.setItem("password",JSON.stringify(password))
    }
    else{
        alert(`Logged in as ${usernameEl.value}`)
    }
    form.reset();
})

function loginAsSaved()
{
    let username=JSON.parse(localStorage.getItem("username"));
    let password=JSON.parse(localStorage.getItem("password"));
    if(username && password)
    {
        alert(`Logged in as ${username}`);
    }
}
existingBtn.addEventListener("click",loginAsSaved)
