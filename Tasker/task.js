var overlay=document.getElementById("overlay")
var popup=document.querySelector(".popUp")
function addTask(){
    var overlay=document.getElementById("overlay")
    overlay.style.display='block'
    popup.style.display='block'
}


var input=document.getElementById("taskName").value
var selectInput=document.getElementById("category")
function taskAdd(){
    if(input.length===0){
        alert("Type the task...")
    }
    selectedValue=selectInput.value
    var spanele=document.createElement("span")
    spanele.value=input
    var tasksAdded=document.getElementById("tasksAdded")
    tasksAdded.appendChild(spanele)
    overlay.style.display='none'
    popup.style.display='none'
    tasksAdded.style.display='block'

}