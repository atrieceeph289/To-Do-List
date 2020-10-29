const groceryForm = document.querySelector("#search-form");
const groceryFormInput = groceryForm.querySelector("#userinput");
const groceryList = document.querySelector("#grocery-list-section>ul");
groceryFormInput.focus()
groceryForm.addEventListener("submit", event => {
    event.preventDefault();
    if (groceryFormInput.value.length > 0) {
        // creation
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("span");
        listItem.className = "list-item";
        deleteButton.className = "delete-button";

        // manipulation

        listItem.innerText = groceryFormInput.value + " ";
        listItem.addEventListener("click", () => {
            listItem.classList.toggle("done");
        })
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {
            groceryList.removeChild(listItem);
        });
        groceryFormInput.value = ''

        // appending
        listItem.appendChild(deleteButton);
        groceryList.appendChild(listItem);
    }
});






