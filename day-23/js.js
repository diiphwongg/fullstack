
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");

// Hàm thêm công việc
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById("todo-list");
        const newTodo = document.createElement("li");
        newTodo.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;
        todoList.appendChild(newTodo);
        todoInput.value = "";

        // Xóa công việc
        newTodo.querySelector(".delete-btn").addEventListener("click", function() {
            newTodo.remove();
        });

        // Chỉnh sửa công việc
        newTodo.querySelector(".edit-btn").addEventListener("click", function() {
            const todoTextElement = newTodo.querySelector(".todo-text");
            const newText = prompt("Edit your task:", todoTextElement.innerText);
            if (newText !== null && newText.trim() !== "") {
                todoTextElement.innerText = newText.trim();
            }
        });
    }
}

// Thêm công việc khi nhấn nút "Add Todo"
addTodoBtn.addEventListener("click", addTodo);

// Thêm công việc khi nhấn phím Enter
todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
