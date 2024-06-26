const myForm = document.getElementById("myForm");
const todoList = document.getElementById("todoList");
const btnInsert = document.getElementById('btnInsert');
const segnaposto = document.getElementById('segnaposto');
const listTodo = [];

function checkInput() {
    if (todoList.value === '') {
        return false;
    } else {
        return true;
    }
}

btnInsert.addEventListener('click', function (e) {
    e.preventDefault();
    if (!checkInput()) return;
    popolateArray();
    printList();
    myForm.reset();
});

function popolateArray() {
    listTodo.push(todoList.value);
    console.log(todoList);
}

function printList() {
    segnaposto.innerHTML = '';
    for (let i = 0; i < listTodo.length; i++) {
        let newp = document.createElement('h1');
        // newp.innerText = listTodo[i];
        // let btnDelete = document.createElement('button');
        // btnDelete.setAttribute('type', 'button');
        // btnDelete.setAttribute('onclick', `deleteItem(${i});`);
        // btnDelete.innerText = "lol";
        newp.appendChild(myForm);
        // todoList.appendChild(newp);
    }
}