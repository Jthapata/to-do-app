const addItemButton = document.getElementById('item-add')
const newItemName = document.getElementById('new-item-name')
const newItemButton = document.getElementById('new-item-button')
const cancelNewItem = document.getElementById('cancel-new-item-button')
const itemDisplay = document.getElementById('display-add-item')
const noListDisplay = document.getElementById('no-list-selected')
const noListBtn = document.getElementById('no-list-button')


function addItemToStorage (name) {
    let listName = document.getElementById('list_name').textContent
    let storageList = localStorage.getItem(listName)
    if (storageList === '') {
        storageList += `${name}`
    } else {
        storageList += `, ${name}`
    }
    localStorage.setItem(listName, storageList)
}

addItemButton.addEventListener('click', function () {
    let listName = document.getElementById('list_name').textContent
    if (listName === '') {
        noListDisplay.className = 'active-display'
    } else {
        itemDisplay.className = 'active-display';
    }
})

newItemButton.addEventListener('click', function () {
    let name = newItemName.value
    addItemToStorage(name)
    itemDisplay.className = 'no-display'
    newItemName.value = ''
    var listName = document.getElementById('list_name').textContent
    renderItems(listName)
})

newItemName.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        newItemButton.click();
    }
})

cancelNewItem.addEventListener('click', function () {
    itemDisplay.className = 'no-display'
    newItemName.value = ''
})

noListBtn.addEventListener('click', function() {
    noListDisplay.className = 'no-display'
})