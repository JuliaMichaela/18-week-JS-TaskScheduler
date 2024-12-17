const input = document.querySelector('#input');
const btnAdd = document.querySelector('#btn_add');
const tasks = document.querySelector('#tasks');
const btnClear = document.querySelector('#btn_clear');



function createTask () {
    const valueInput = input.value;
    console.log(valueInput)
    const textTask = document.createElement('p');
    textTask.textContent = valueInput;
    tasks.appendChild(textTask);

    valueInput = '';
}
btnAdd.addEventListener('click', createTask);

function clearList (){
    tasks.textContent= '';
}
btnClear.addEventListener('click', clearList );