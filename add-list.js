const addListButton = document.getElementById('list-add')
const newListName = document.getElementById('new-list-name')
const newListButton = document.getElementById('new-list-button')
const cancelNewList = document.getElementById('cancel-new-list-button')
const listDisplay = document.getElementById('display-add-list')

function addListToStorage (name){
    localStorage.setItem(name, '')
    renderLists()
}
function activeListDisplay() {
    listDisplay.className = 'active-display';
    overlay.className = 'active-overlay'
}
function hideListDisplay() {
    listDisplay.className = 'no-display'
    newListName.value = ''
    overlay.className = 'hide-overlay'
}

addListButton.addEventListener('click', function() {
    activeListDisplay()
})
newListButton.addEventListener('click', function() {
    let name = newListName.value
    if (name === '') {
        return
    }
    addListToStorage(name)
    hideListDisplay()
})
newListName.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        newListButton.click();
    }
})
cancelNewList.addEventListener('click', function() {
    hideListDisplay()
})