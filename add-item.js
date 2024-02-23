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
        let itemObject = {}
        itemObject[name] = false
        storageList = JSON.stringify(itemObject)
    } else {
        let storageObject = JSON.parse(storageList)
        storageObject[name] = false
        storageList = JSON.stringify(storageObject)
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
    overlay.className = 'active-overlay'
})

newItemButton.addEventListener('click', function () {
    let name = newItemName.value
    addItemToStorage(name)
    itemDisplay.className = 'no-display'
    newItemName.value = ''
    overlay.className = 'hide-overlay'
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
    overlay.className = 'hide-overlay'
})

noListBtn.addEventListener('click', function() {
    noListDisplay.className = 'no-display'
    overlay.className = 'hide-overlay'
})