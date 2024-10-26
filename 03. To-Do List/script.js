// Get references to the input box and the list container
const inputBox = document.querySelector("#input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
  // Check if the input field is empty
  if (inputBox.value === "") {
    alert("You must write something"); // Alert if the input is empty
  } else {
    // Create a new list item (li)
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; // Set the list item content to the input value
    listContainer.appendChild(li); // Append the new list item to the list container

    // Create a delete button (span with cross icon)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Add the cross (×) icon
    li.appendChild(span); // Append the delete button to the list item

    // Automatically clear the input box after adding the task
    inputBox.value = "";
    saveData(); // Save the current state of the list to local storage
  }
}

// Add event listener to the list container for handling click events
listContainer.addEventListener(
  "click",
  (e) => {
    // Check if the clicked target is a list item (li)
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Toggle between checked and unchecked states
      saveData(); // Save the current state of the list to local storage
    }
    // Check if the clicked target is the delete button (span)
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the parent list item when the delete button is clicked
      saveData(); // Save the updated state of the list to local storage
    }
  },
  false // Set to false to listen in the bubbling phase (default behavior)
);

// Function to save the current list to local storage
function saveData() {
  // Save the inner HTML of the list container to local storage
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display saved tasks from local storage when the page is loaded or refreshed
function showTask() {
  // Retrieve the saved data from local storage and display it
  listContainer.innerHTML = localStorage.getItem("data");
}

// Call the function to display saved tasks on page load
showTask();

/*
Steps of the program:
1. **Initialize Elements**:
   - Get the `inputBox` (for entering new tasks) and `listContainer` (for displaying tasks) using `querySelector` and `getElementById`.

2. **Add Task**:
   - The `addTask()` function checks if the input box is empty.
   - If not, it creates a new `li` (list item) with the content from the input field.
   - It appends a delete button (cross icon) to each list item.
   - After adding the task, it clears the input box and calls `saveData()` to store the current list state in the browser’s local storage.

3. **Event Listener**:
   - An event listener is attached to `listContainer` to handle clicks:
     - If a user clicks on a list item (`li`), it toggles between checked and unchecked states (strikethrough effect).
     - If a user clicks on the delete button (`span`), the respective task (parent `li`) is removed.
     - In both cases, `saveData()` is called to update the local storage.

4. **Save Data**:
   - The `saveData()` function stores the entire inner HTML of the `listContainer` in the browser’s local storage. This allows the list to persist even after the page is refreshed.

5. **Show Task**:
   - The `showTask()` function is called when the page loads or refreshes. It retrieves the saved list from local storage (if any) and displays it inside `listContainer`.

6. **Local Storage**:
   - Local storage is used to persist the task list across page reloads. Whenever tasks are added, removed, or checked/unchecked, the list's HTML structure is saved in local storage.

7. **Interaction**:
   - Users can add tasks, delete tasks, or toggle tasks between checked/unchecked states. The list is saved automatically in the browser so that tasks remain even after refreshing the page.
*/
