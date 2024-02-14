const additemButton = document.getElementById('item-add')
const newitemName = document.getElementById('new-item-name')
const newitemButton = document.getElementById('new-item-button')
const cancelNewitem = document.getElementById('cancel-new-item-button')
const display = document.getElementById('display-add-item')

function additem (name){
    let newH4 = document.createElement('h4')
    newH4.innerHTML = name
    newH4.classitem.add('item')
    sidebar.append(newH4)
}

additemButton.addEventlistener('click', function() {
    display.className = 'active-display';
})

newitemButton.addEventlistener('click', function() {
    let name = newitemName.value
    additem(name)
    display.className = 'no-display'
    newitemName.value = ''
})

cancelNewitem.addEventlistener('click', function() {
    display.className = 'no-display'
    newitemName.value = ''
})