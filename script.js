const groceryForm = document.querySelector("#search-form");
const groceryFormInput = groceryForm.querySelector("#userinput");
const groceryList = document.querySelector("#grocery-list-section>ul");
groceryFormInput.focus()
groceryForm.addEventListener("submit", event => {
    event.preventDefault();
    if (groceryFormInput.value.length > 0) {
        // creation
        const listItem = document.createElement("li");
        const editButton = document.createElement("span")
        const deleteButton = document.createElement("span");
        listItem.className = "list-item";
        deleteButton.className = "delete-button";
        editButton.className = "edit-button"

        // manipulation
        listItem.innerText = groceryFormInput.value + " ";
        listItem.addEventListener("click", () => {
            listItem.classList.toggle("done");
        })
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {
            groceryList.removeChild(listItem);
        });
        editButton.innerText = "edit"
        editButton.addEventListener("click", () => {
            let placeholder = listItem.innerText
            let editVal = prompt("Edit todo", placeholder.substring(0, placeholder.length - 7))
            if (editVal.length > 0) {
                listItem.innerText = editVal;
                listItem.appendChild(editButton)
                listItem.appendChild(deleteButton);
                listItem.classList.toggle("done");
            } else {
                listItem.classList.toggle("done");
                return;
            }


        })
        groceryFormInput.value = ''

        // appending
        listItem.appendChild(editButton)
        listItem.appendChild(deleteButton);
        groceryList.appendChild(listItem);
    }
});






