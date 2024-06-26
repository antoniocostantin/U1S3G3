const myForm = document.getElementById("myForm");
const todoList = document.getElementById("todoList");
const btnInsert = document.getElementById('btnInsert');
const segnaposto = document.getElementById('segnaposto');
const listTodo = [];
const taskDone = [];

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
    } else if (todoList.value === " ") {
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
    console.log(taskDone);
    for (let i = 0; i < listTodo.length; i++) {
        let newp = document.createElement("p");
        newp.innerText = listTodo[i];
        newp.addEventListener("click", function () {
            this.classList.add("completed");
        })
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'button');
        btnDelete.classList.add("bottone")
        btnDelete.addEventListener("click", function () {
            newp.remove();
            listTodo.splice(i, 1);
        });

        // btnDelete.setAttribute('onclick', `deleteItem(${i})`);
        btnDelete.innerHTML = `<span class="material-symbols-outlined">
delete
</span>`;
        newp.appendChild(btnDelete);
        segnaposto.appendChild(newp);
    };
}

function deleteItem(index) {
    listTodo.splice(index, 1);
}


// const attachComplete = function () {
//     list = document.querySelectorAll("#segnaposto p")
//         for (let i = 0; i < list.length; i++) {
//         list[i].addEventListener('click', function () {
//         this.classList.add('completed');
//         });
//     };
// }