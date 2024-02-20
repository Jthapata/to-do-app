
function createNewElement (name) {
    let newDiv = document.createElement('div')
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    let newDelete = document.createElement('i')
    newDelete.id = 'deleteItem'
    newDelete.setAttribute('class', 'fa-solid fa-trash-can ml-3')
    newLabel.setAttribute('for', name)
    newLabel.innerHTML = name
    newInput.type = 'checkbox'
    newInput.name = name
    newDiv.append(newInput)
    newDiv.append(newLabel)
    newDiv.append(newDelete)
    newDiv.className = 'item'
    newDelete.addEventListener('click', function() {
        newDiv.remove()
    })
    return(newDiv)
}

console.log(createNewElement('pizza'))
console.log(localStorage)