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
        this.list = [];
        this.container = document.querySelector('.container');
        this.form = document.forms.formTodo;
        this.init();
    }

    init () {
        this.form.addEventListener ("submit", (event) => {
            this.addTodo(event);
        });
    }

    addTodo (event) {
        event.preventDefault();
    }

    render ()
}

new ToDolist();
