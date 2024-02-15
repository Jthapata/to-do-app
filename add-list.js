const addListButton = document.getElementById('list-add')
const newListName = document.getElementById('new-list-name')
const newListButton = document.getElementById('new-list-button')
const cancelNewList = document.getElementById('cancel-new-list-button')
const listDisplay = document.getElementById('display-add-list')
const sidebar = document.getElementById('sidebar')

function addList (name){
    let newH4 = document.createElement('h4')
    newH4.innerHTML = name
    newH4.classList.add('list')
    sidebar.append(newH4)
}

addListButton.addEventListener('click', function() {
    listDisplay.className = 'active-display';
})

newListButton.addEventListener('click', function() {
    let name = newListName.value
    addList(name)
    listDisplay.className = 'no-display'
    newListName.value = ''
})

cancelNewList.addEventListener('click', function() {
    listDisplay.className = 'no-display'
    newListName.value = ''
})