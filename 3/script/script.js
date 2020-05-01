var list = document.getElementById('tasklist');
var form = document.getElementsByTagName('form')[0];
var todoInput = document.getElementById('todo');
form.addEventListener('submit',function(event) {
    event.preventDefault();
    addItToList(todoInput.value);
    todoInput.value = "";
})

function addItToList(task) {
    var li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
}