localStorage.setItem('test list', 'orange juice, lemonade, pizza')
const sidebar = document.getElementById('Lists')
const taskList = document.getElementById('itemList')

function addList(name) {
    let newH4 = document.createElement('h4')
    let itemDelete = document.createElement('i')
    itemDelete.id = 'deleteList'
    itemDelete.setAttribute('class', 'fa-solid fa-trash-can ml-3')
    newH4.innerHTML = name
    newH4.classList.add('list')
    newH4.append(itemDelete)
    sidebar.append(newH4)
    newH4.addEventListener('click', function() {
        console.log('clicked list')
        renderItems(newH4.textContent)
    })
    itemDelete.addEventListener('click', function() {
        localStorage.removeItem(newH4.textContent)
        newH4.remove()
        taskList.innerHTML = ''
        let displayListName = document.getElementById('list_name')
        displayListName.innerHTML = ''
        renderLists()
    })
}

function addItem(name) {
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
    items = localStorage.getItem(listNameToDisplay)
    itemArray = items.split(', ')
    for (it of itemArray) {
        addItem(it)
    }
}

renderLists()