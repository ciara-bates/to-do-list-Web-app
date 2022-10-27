
// allow message passing between client and server
import Ajax from "./ajax.js";
import toDo from "./toDo.js";


const add_button = document.getElementById("add-button");
const gif = document.getElementById("gif");

//function must be befoore loadDefaultList
const displayGif = function (inputTask) {
    //Fetches a gif matching the top answer using an API
    const request = {
        "inputTask": inputTask,
        "type": "getGif"
    };
    let response = Ajax.query(request);
    response.then(function (res) {
        gif.setAttribute("src", res.gifUrl);
    });
};

loadDefaultList();

//creating a new item in the list
add_button.onclick = function () {
    var li = document.createElement("li");

    //getting the new list item from the input box
    var inputTask = document.getElementById("item").value;
    var inputHours = parseInt(document.getElementById("hours").value);
    var inputMins = parseInt(document.getElementById("mins").value);
    var inputArray = [inputTask, inputHours, inputMins];

    li.appendChild(document.createTextNode(toDo.task_and_time(inputArray)));

    //checking that the user entered a valid input (not blank)
    if(inputTask === "" || (inputHours === 0 && inputMins === 0)) {
        alert("Please type in a task to add to your list and select how long it will take");
    }else {
        document.getElementById("list").appendChild(li);
    }

    //making text box and dropdown menus default again
    document.getElementById("item").value = "";
    document.getElementById("hours").value = "0";
    document.getElementById("mins").value = "0";

    //adding a cross on the end of list item
    let closebox = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    closebox.className = "close";
    closebox.appendChild(txt);
    li.appendChild(closebox);

    // displays a gif of the most recently added task
    displayGif(inputTask);

    let close = document.getElementsByClassName("close");

    //if cross is clicked, remove the item
    for(let i=0; i<close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    };
};



/*if the list item is clicked, then it crosses out.
If it is clicked again, it returns back to normal*/
var list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if(ev.target.tagName ==="LI"){
        /*the class of that list item will be 'checked'
        the css code adds a marker before (looks like a check mark)
        and changes the style of the text*/
        ev.target.classList.toggle("checked");
    }
},false);


// loads one default item to show the user what the list looks like
function loadDefaultList(){
    var li = document.createElement("li");

    //default list (just one task)
    var inputArray = ["Learn to code a web app",0,15];

    li.appendChild(document.createTextNode(toDo.task_and_time(inputArray)));

    document.getElementById("list").appendChild(li);

    //adding a cross on the end of list item
    var closebox = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    closebox.className = "close";
    closebox.appendChild(txt);
    li.appendChild(closebox);

    displayGif(inputArray[0]);

    var close = document.getElementsByClassName("close");

    //if cross is clicked, remove the item
    for(let i=0; i<close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display = "none";
        };
    };
};

