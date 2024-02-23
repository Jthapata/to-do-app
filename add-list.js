const addListButton = document.getElementById('list-add')
const newListName = document.getElementById('new-list-name')
const newListButton = document.getElementById('new-list-button')
const cancelNewList = document.getElementById('cancel-new-list-button')
const listDisplay = document.getElementById('display-add-list')

function addListToStorage (name){
    localStorage.setItem(name, '')
    renderLists()
}

addListButton.addEventListener('click', function() {
    listDisplay.className = 'active-display';
    overlay.className = 'active-overlay'
})

newListButton.addEventListener('click', function() {
    let name = newListName.value
    addListToStorage(name)
    listDisplay.className = 'no-display'
    newListName.value = ''
    overlay.className = 'hide-overlay'
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
    overlay.className = 'hide-overlay'
})