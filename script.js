
const list = document.querySelector('.list') // UL element of html


function addItem() {
    const item = (document.querySelector('.addNewItem').value)            // input field to add items
    const listElement = document.createElement('li');                     // creating list element
    listElement.innerText = item;                                       // declaring value to list elements

    if (item.trim() != "") {                                            // preventing empty fields submitted


        const itemBought = document.createElement('button')
        itemBought.classList.add('itemBought')                // creating DONE button
        itemBought.textContent = 'DONE';
        itemBought.addEventListener('click', markAsDone)

        const itemMistake = document.createElement('button')
        itemMistake.classList.add('itemMistake')                        // creating DEL button
        itemMistake.textContent = 'DEL'
       itemMistake.addEventListener('click', markMistake)

        listElement.appendChild(itemBought);
        listElement.appendChild(itemMistake);
        list.appendChild(listElement);                                  // adding list elements to the list

        document.querySelector('.addNewItem').value = ''                // clearing the input field
        document.querySelector(".addNewItem").focus();                  // add focus to input after submitting item
    }
}
function markAsDone(){
 const sideButton = this.parentNode;
 sideButton.classList.add('done')
}

function markMistake(){
    const sideButton = this.parentNode;
    sideButton.classList.add('items--delete')
    setTimeout(function(){
        sideButton.remove();
    }, 300);
}

function deleteAll() {
    const deleteButton = document.getElementsByTagName("li");
    
    // Adding the 'items--delete' class to each element
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].classList.add('items--delete');
    }

    // Removing each element after a 300ms delay
    setTimeout(function () {
        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].remove();
        }
        document.querySelector(".list").innerHTML = "";
    }, 300);
}