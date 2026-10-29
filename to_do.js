const inputbox = document.getElementById("task");
const list = document.getElementById("list");

function addtask(){
    if(inputbox.value === ''){
        alert("Girl...")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let close = document.createElement("close")
        close.innerHTML = "\u00d7";
        li.appendChild(close);  

    } 
    inputbox.value = "";
    store();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); store();}
        else if(e.target.tagName === "CLOSE"){
            e.target.parentElement.remove();
            store();
        }
    }, false)

function store(){
    localStorage.setItem("data", list.innerHTML);
}

function show(){
    list.innerHTML = localStorage.getItem("data");
}

show();