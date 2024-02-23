let editItemButtons = document.querySelectorAll('.editButton')
const editItemName = document.getElementById('edit-item-name')
const changeItemButton = document.getElementById('change-item-button')
const cancelChangeItem = document.getElementById('cancel-change-item-button')
const editDisplay = document.getElementById('display-edit-item')
var oldName;

function displayEditModal(name) {
    editDisplay.className = 'active-display'
    oldName = name
}

// some function with 2 parameters that is called on line 17

changeItemButton.addEventListener('click', function() {
    let newName = editItemName.value
    // some function with 2 parameters
    editDisplay.className = 'no-display'
    editItemName.value = ''
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
})