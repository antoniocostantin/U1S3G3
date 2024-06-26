const myForm = document.getElementById("myForm");
const todoList = document.getElementById("todoList");
const btnInsert = document.getElementById('btnInsert');
const segnaposto = document.getElementById('segnaposto');
const listTodo = [];

btnInsert.addEventListener('click', function (e) {
    e.preventDefault();
    if (!checkInput()) return;
    popolateArray();
    printList();
    myForm.reset();
});

function checkInput() {
    if (todoList.value === "") {
        return false;
    } else {
        return true;
    }
}

function popolateArray() {
    listTodo.push(todoList.value);
    console.log(listTodo);
}

function printList() {
    segnaposto.innerHTML = '';
    for (let i = 0; i < listTodo.length; i++) {
        let newp = document.createElement("p");
        newp.classList.add("task");
        newp.innerText = listTodo[i];
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'button');
        btnDelete.classList.add("bottone")
        btnDelete.setAttribute('onclick', `deleteItem(${i})`);
        btnDelete.innerHTML = `<span class="material-symbols-outlined">
delete
</span>`;
        newp.appendChild(btnDelete);
        segnaposto.appendChild(newp);
    };
    attachComplete();
}

function deleteItem(index) {
    listTodo.splice(index, 1);
    printList();
}

const attachComplete = function () {
    list = document.querySelectorAll("#segnaposto p")
        for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
        this.classList.add('completed');
        });
    };
}