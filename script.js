// let button = document.getElementById("enter");
// let input = document.getElementById("userinput");
// const ul = document.querySelector("ul");
// let li = document.getElementsByTagName("li");


// // return input data
// const inputLength = () => {
//     return input.value.length;
// }


// // create list items

// const createListItem = () => {
//     let li = document.createElement("li");
//     let btn = document.createElement("button");
//     li.appendChild(document.createTextNode(input.value + " "));
//     ul.appendChild(li);
//     li.appendChild(btn);
//     btn.innerHTML = "X";
//     input.value = "";
    
//     strikeThroughItem();
//     trashListElement();
// }

// const addLiAfterClick = () => {
//     if (inputLength() > 0) {
//         createListItem();
//     }
// }

// const addLiAfterReturn = (event) => {
//     if (inputLength() > 0 && event.which === 13) {
//         createListItem();
//     }
// }

// const tglClass = () => {
//     this.classList.toggle("done");
// }

// const strikeThroughItem = () => {
//     for(i=0; i<li.length; i++) {
//         li[i].addEventListener("click", tglClass);
//     }
// }

// const trashListElement = () => {
//     let button = document.querySelectorAll('li button');
//     for(i=0; i<button.length; i++) {
//         button[i].addEventListener("click", clearElement);
//     } 
// }

// const clearElement = () => {
//     for(i=0; i<li.length; i++) {
//         this.parentNode.remove();
//     }
// }

// button.addEventListener("click", addLiAfterClick);
// input.addEventListener("keypress", addLiAfterReturn);

const groceryForm = document.querySelector("#search-form");
const groceryFormInput = groceryForm.querySelector("#userinput");
const groceryList = document.querySelector("#grocery-list-section>ul");
groceryForm.addEventListener("submit", event => {
    event.preventDefault();
   
    

// creation
const listItem = document.createElement("li");
const deleteButton = document.createElement("button");

// manipulation
listItem.innerText = groceryFormInput.value + " ";
deleteButton.innerText = "X";
deleteButton.addEventListener("click", () => {
    groceryList.removeChild(listItem)   
});
groceryForm.addEventListener("submit", input => {
    input.value= "";
})
// appending
listItem.appendChild(deleteButton);
groceryList.appendChild(listItem);


    



});


