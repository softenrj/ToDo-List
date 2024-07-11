var counter = 0;

document.querySelector(".add-button").addEventListener("click",addList());
function addList(){
    var listItem = document.querySelector("input").value;
    if (listItem.trim() !== "") {
        counter++;
        
        document.querySelector(".todo-lists").innerHTML += `
            <div class="ls${counter} list">
               <p>${listItem}</p>
                <button class="remove">X</button>
            </div>
        `;

        document.querySelector("input").value = "";
        updateRemoveListeners();
    }
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function() {
            this.parentElement.remove();
            counter--;
        });
    });
}

document.querySelector("input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addList();
    }
});