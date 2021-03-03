const formAddTodo = document.querySelector('.form-add-todo');
const inputSearchTodo = document.querySelector('.form-search input');
const todosContainer = document.querySelector('.todos-container')



const addTodo = (inputValue, event) => {
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

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = matchedTodos
        return returnMatchedTodos ? matchedTodos: !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove);
        todo.classList.add(classToAdd);
    })
}


const hideTodos = (todos, inputValue) => {
    const todoToHide = filterTodos(todos,inputValue, false)
    manipulateClasses(todoToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todoToShow = filterTodos(todos,inputValue, true)
    manipulateClasses(todoToShow, 'd-flex', 'hidden')
}



formAddTodo.addEventListener('submit', event => {
    event.preventDefault();  

    const inputValue = event.target.add.value.trim();

    addToDo(inputValue, event)
    
})

const removeTodo =  clickedElement => {

    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo = "${trashDataValue}"]`);
    if(trashDataValue){
        todo.remove()
        
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target;
    removeToDo(clickedElement)
})

inputSearchTodo.addEventListener('input', event => {
    
    const inputValue = event.target.value.trim()
    const todos = Array.from(todosContainer.children);

    hideTodos(inputValue)
    showTodos(inputValue)
    

    
})