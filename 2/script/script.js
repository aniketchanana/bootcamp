var list = document.getElementById('tasklist');
var form = document.getElementById('todoform');
var todoInput = document.getElementById('todo');
form.addEventListener('submit',function(event) {
    event.preventDefault();
    addItToList(todoInput.value);
    todoInput.value = "";
})

function addItToList(task) {
    if(task === '') {
        alert('input cannot be empty');
        return ;
    }
    var li = document.createElement('li');
    var date = new Date();
    li.textContent = task + ` ${date}`;
    li.setAttribute('class','mytodo');
    list.appendChild(li);
}

list.addEventListener('click',function(e) {
    console.log(e.target);
    console.log(e.target.classList);
    e.target.classList.toggle('strikeOut');
})