const addListButton = document.getElementById('list-add')
const newListName = document.getElementById('new-list-name')
const newListButton = document.getElementById('new-list-button')
const cancelNewList = document.getElementById('cancel-new-list-button')
const listDisplay = document.getElementById('display-add-list')
const sidebar = document.getElementById('sidebar')

function addList (name){
    let newH4 = document.createElement('h4')
    let itemDelete = document.createElement('i')
    itemDelete.id = 'deleteList'
    itemDelete.setAttribute('class', 'fa-solid fa-trash-can ml-3')
    newH4.innerHTML = name
    newH4.classList.add('list')
    newH4.append(itemDelete)
    sidebar.append(newH4)
    itemDelete.addEventListener('click', function() {
        newH4.remove()
    })
}

addListButton.addEventListener('click', function() {
    listDisplay.className = 'active-display';
})

newListButton.addEventListener('click', function() {
    let name = newListName.value
    addList(name)
    listDisplay.className = 'no-display'
    newListName.value = ''
})

newListName.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        newListButton.click();
    }
})

cancelNewList.addEventListener('click', function() {
    listDisplay.className = 'no-display'
    newListName.value = ''
})