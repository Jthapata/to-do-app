// code change: move css from css file to html file for create list button
// bonus: user can't add blank list or item
// bonus: add css to item when checked
// bonus: animate creating and deleting task/list
// bonus: change css for lists

const sidebar = document.getElementById('Lists')
const taskList = document.getElementById('itemList')
const overlay = document.getElementById('overlay')

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
        let displayListName = document.getElementById('list_name')
        if (name === displayListName.textContent) {
            taskList.innerHTML = ''
            displayListName.innerHTML = ''
        }
        renderLists()
    })
}

function addItem(name, bool) {
    let listNameToDisplay = document.getElementById('list_name').textContent
    let newDiv = document.createElement('div')
    let newInput = document.createElement('input')
    let newP = document.createElement('p')
    let newDelete = document.createElement('i')
    let editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'
    editButton.className = 'editButton'
    newDelete.id = 'deleteItem'
    newDelete.setAttribute('class', 'fa-solid fa-trash-can ml-3')
    newP.innerHTML = name
    newInput.type = 'checkbox'
    newInput.checked = bool
    newDiv.append(newInput)
    newDiv.append(newP)
    newDiv.append(newDelete)
    newDiv.append(editButton)
    newDiv.className = 'item'
    taskList.append(newDiv)
    newDelete.addEventListener('click', function() {
        newDiv.remove()
        let items = localStorage.getItem(listNameToDisplay)
        let ItemsObject = JSON.parse(items)
        delete ItemsObject[`${newP.textContent}`]
        updatedObject = JSON.stringify(ItemsObject)
        localStorage.setItem(listNameToDisplay, updatedObject)
        renderItems(listNameToDisplay)
    })
    newInput.addEventListener('change', function() {
        if (this.checked) {
            let items = localStorage.getItem(listNameToDisplay)
            let ItemsObject = JSON.parse(items)
            ItemsObject[newP.textContent] = true
            updatedObject = JSON.stringify(ItemsObject)
            localStorage.setItem(listNameToDisplay, updatedObject)
            renderItems(listNameToDisplay)
        }
        if (!this.checked) {
            let items = localStorage.getItem(listNameToDisplay)
            let ItemsObject = JSON.parse(items)
            ItemsObject[newP.textContent] = false
            updatedObject = JSON.stringify(ItemsObject)
            localStorage.setItem(listNameToDisplay, updatedObject)
            renderItems(listNameToDisplay)
        }
    })
}

function renderLists() {
    sidebar.innerHTML = ''
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
        let itemsObject = JSON.parse(items)
        for (it in itemsObject) {
            addItem(it, itemsObject[it])
        }
    }
    editItemButtons = document.querySelectorAll('.editButton')
    editItemButtons.forEach((button) => {
        button.addEventListener('click', function() {
            let itemToEdit = button.parentElement.childNodes[1].textContent
            displayEditModal(itemToEdit)
        })
    })
}

renderLists()