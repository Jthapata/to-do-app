const editItemName = document.getElementById('edit-item-name')
const editItemButton = document.getElementById('edit-item-button')
const cancelEditItem = document.getElementById('cancel-edit-item-button')
const editDisplay = document.getElementById('display-edit-item')

editItemName.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        editItemButton.click();
    }
})

cancelEditItem.addEventListener('click', function() {
    editDisplay.className = 'no-display'
    editItemName.value = ''
})