let editItemButtons = document.querySelectorAll('.editButton')
const editItemName = document.getElementById('edit-item-name')
const changeItemButton = document.getElementById('change-item-button')
const cancelChangeItem = document.getElementById('cancel-change-item-button')
const editDisplay = document.getElementById('display-edit-item')
var oldName;

function displayEditModal(name) {
    editDisplay.className = 'active-display'
    overlay.className = 'active-overlay'
    oldName = name
}

function editStorage(oldname, newname) {
    let currentListName = document.getElementById('list_name').textContent
    let storageItem = localStorage.getItem(currentListName)
    let jsonStorage = JSON.parse(storageItem)
    delete Object.assign(jsonStorage, {[newname]: jsonStorage[oldname]}) [oldname]
    jsonStorage = JSON.stringify(jsonStorage)
    localStorage.setItem(currentListName, jsonStorage)
    renderItems(currentListName)
}

changeItemButton.addEventListener('click', function() {
    let newName = editItemName.value
    editStorage(oldName, newName)
    editDisplay.className = 'no-display'
    editItemName.value = ''
    overlay.className = 'hide-overlay'
})

editItemName.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        changeItemButton.click();
    }
})

cancelChangeItem.addEventListener('click', function() {
    editDisplay.className = 'no-display'
    editItemName.value = ''
    overlay.className = 'hide-overlay'
})