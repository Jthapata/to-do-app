const sidebar = document.getElementById('Lists')
const taskList = document.getElementById('itemList')

function addList(name) {
    let newH4 = document.createElement('h4')
    let itemDelete = document.createElement('i')
    let newListDiv = document.createElement('div')
    itemDelete.id = 'deleteList'
    itemDelete.setAttribute('class', 'fa-solid fa-trash-can ml-3')
    newH4.innerHTML = name
    newListDiv.classList.add('list')
    newListDiv.id = name
    newListDiv.append(newH4)
    newListDiv.append(itemDelete)
    sidebar.append(newListDiv)
    newH4.addEventListener('click', function() {
        renderItems(newH4.textContent)
    })
    itemDelete.addEventListener('click', function() {
        localStorage.removeItem(newH4.textContent)
        newListDiv.remove()
        taskList.innerHTML = ''
        let displayListName = document.getElementById('list_name')
        displayListName.innerHTML = ''
        renderLists()
    })
}

function addItem(name) {
    let listNameToDisplay = document.getElementById('list_name').textContent
    let newDiv = document.createElement('div')
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    let newDelete = document.createElement('i')
    newDelete.id = 'deleteItem'
    newDelete.setAttribute('class', 'fa-solid fa-trash-can ml-3')
    newLabel.setAttribute('for', name)
    newLabel.innerHTML = name
    newInput.type = 'checkbox'
    newInput.name = name
    newDiv.append(newInput)
    newDiv.append(newLabel)
    newDiv.append(newDelete)
    newDiv.className = 'item'
    taskList.append(newDiv)
    newDelete.addEventListener('click', function() {
        newDiv.remove()
        let items = localStorage.getItem(listNameToDisplay)
        let itemArray = items.split(',')
        itemArray.pop(name)
        let updatedArray = itemArray.toString();
        localStorage.setItem(listNameToDisplay, updatedArray)
        renderItems(listNameToDisplay)
    })
}

function renderLists() {
    sidebar.innerHTML = ''
    taskList.innerHTML = ''
    let lists = Object.keys(localStorage)
    for (li of lists) {
        addList(li)
    }
}

function renderItems(listNameToDisplay) {
    taskList.innerHTML = ''
    let displayListName = document.getElementById('list_name')
    displayListName.innerHTML = listNameToDisplay
    let items = localStorage.getItem(listNameToDisplay)
    if (items !== '') {
        let itemArray = items.split(',')
        for (it of itemArray) {
            addItem(it)
        }
    }
}

renderLists()