const addItemButton = document.getElementById('item-add')
const newItemName = document.getElementById('new-item-name')
const newItemButton = document.getElementById('new-item-button')
const cancelNewItem = document.getElementById('cancel-new-item-button')
const itemDisplay = document.getElementById('display-add-item')
const taskList = document.getElementById('itemList')

function addItem (name) {
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

addItemButton.addEventListener('click', function () {
    itemDisplay.className = 'active-display';
})

newItemButton.addEventListener('click', function () {
    let name = newItemName.value
    addItem(name)
    itemDisplay.className = 'no-display'
    newItemName.value = ''
})

cancelNewItem.addEventListener('click', function () {
    itemDisplay.className = 'no-display'
    newItemName.value = ''
})