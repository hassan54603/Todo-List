const input = document.querySelector(".js-name-input");

const btn = document.querySelector(".js-add-todo-button");

const todoList = document.querySelector(".Todo-list");

// check if input is empty 
function checkInput() {
  btn.disabled = input.value.length === 0;
}

input.addEventListener("input", checkInput);

checkInput();
// input.addEventListener("input", () =>{
//     btn.disabled = input.value.length === 0;
// })

// add input value inside list items 
btn.addEventListener("click", () =>{
    const li = createListItem(input.value);
    todoList.appendChild(li);
    input.value = "";
    btn.disabled = true;
})

// create list items elements
const createListItem = (name) =>{
    const li =document.createElement("li")
    const list = `<h2>${name}</h2>
                <button class="js-delete-todo-button delete-todo-button">🗑️</button>`;
    li.innerHTML = list;
    return li;
    
}
// delete todo
todoList.addEventListener("click", (e) =>{
    if (e.target.classList.contains("js-delete-todo-button")) {
      const li = e.target.closest("li");
      li.remove();
    }
})