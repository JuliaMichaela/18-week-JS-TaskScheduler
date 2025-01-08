// const input = document.querySelector('#input');
// const btnAdd = document.querySelector('#btn_add');
// const tasks = document.querySelector('#tasks');
// const btnClear = document.querySelector('#btn_clear');


// document.addEventListener("DOMContentLoaded", function (event) {
//     let arrTasks = localStorage.getItem('arrTasks');
//     if (arrTasks.length != 0) {
//         tasks.value = arrTasks;
//     }
// })

// function createTask () {
//     const valueInput = input.value;
//     console.log(valueInput)
//     const textTask = document.createElement('p');
//     textTask.textContent = valueInput;
//     tasks.appendChild(textTask);

//     valueInput = '';
// }
// btnAdd.addEventListener('click', createTask);

// function clearList (){
//     tasks.textContent= '';
// }
// btnClear.addEventListener('click', clearList );

class ToDolist {
    constructor () {
        this.list = localStorage.getItem("taskArr")? JSON.parse(localStorage.getItem("taskArr")): [];
        this.container = document.querySelector('.container');
        this.form = document.forms.formTodo;
        this.init();
    }

    init () {
        this.form.addEventListener ("submit", (event) => {
            this.addTodo(event);
        });
        this.render();
    }

    addTodo (event) {
        event.preventDefault();
        const {task} = this.form;
        if (task.value === "") alert ("Please enter a task");
        this.list.push(task.value);
        const newList = JSON.stringify(this.list);
        localStorage.setItem("taskArr", newList);
        this.render();
        task.value = "";
    }

    render () {
        if (this.list.length === 0) {
            this.container.innerHTML = "<h2>No todos</h2>";
            return
        }
        this.container.innerHTML = "";
        this.list.forEach((task) => {
            const li = document.createElement ("li");
            li.innerText = task;
            this.container.appendChild(li);
        });
    }
}




// new ToDolist();

const container = document.querySelector('.container');
const form = document.forms.formTodo;
const {task} = form;
const list = localStorage.getItem("taskArr")
? JSON.parse(localStorage.getItem("taskArr"))
: [];

form.addEventListener ("submit", (event) => {
    event.preventDefault();
    if (task.value === "") alert ("Please enter a task");
        list.push(task.value);
        const newList = JSON.stringify(this.list);
        localStorage.setItem("taskArr", newList);
        render();
        task.value = "";
});




function render () {
    if (list.length === 0) {
        container.innerHTML = "<h2>No todos</h2>";
        return
    }
    container.innerHTML = "";
    list.forEach((task) => {
        const li = document.createElement ("li");
        li.innerText = task;
        container.appendChild(li);
    });
}



