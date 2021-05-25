const formAddToDo = document.querySelector('.form-add-todo');
const inputSearchTodo = document.querySelector('.form-search input');
const todosContainer = document.querySelector('.todos-container');

const addToDo = inputValue => {
    if(inputValue.length){
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo = "${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt" data-trash = "${inputValue}"></i>
            </li>
        `
        event.target.reset();
    }
}
formAddToDo.addEventListener('submit', event => {
    event.preventDefault()


    const inputValue = event.target.add.value.trim();

    addToDo(inputValue)

    
})



const removeToDo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo = "${trashDataValue}"]`)

    if(trashDataValue){
        todo.remove()
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeToDo(clickedElement)
    
})

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos? matchedTodos : !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    })    
}

const hideToDos = (todos, inputValue) => {
    const todoToHide = filterTodos(todos, inputValue, false)
    manipulateClasses(todoToHide, 'hidden', 'd-flex')
}

const showToDos = (todos, inputValue)  => {
    const todoToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todoToShow, 'd-flex', 'hidden')
}

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(todosContainer.children)
    hideToDos(todos,inputValue)
    showToDos(todos,inputValue)
    
    
    
    
})
