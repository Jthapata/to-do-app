const addItemButton = document.getElementById('item-add')
const display = document.getElementById('display-add-item')

addItemButton.addEventListener('click', function () {
    display.className = 'active-display';
})