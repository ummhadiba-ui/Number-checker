const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value;   // get what user typed
    
    const newTask = document.createElement("li");  // create new <li>
    newTask.innerText = taskText;                    // add the text
    taskList.appendChild(newTask);                   // add it to the list
    
    taskInput.value = "";   // clear the input box after adding
});
