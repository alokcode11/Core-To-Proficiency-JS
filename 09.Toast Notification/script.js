// Get the toastBox container where toast notifications will be appended
let toastBox = document.getElementById("toastBox");

// Predefined messages for success, error, and invalid input
let successMsg =
  '<i class="fa-solid fa-circle-check"></i>Successfully Submitted'; // Success message with an icon
let errorMsg =
  '<i class="fa-solid fa-circle-xmark"></i>Please fix the Error!'; // Error message with an icon
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check Again!'; // Invalid input message with an icon

// Function to display a toast notification
function showToast(msg) {
  // Create a new div element to represent the toast
  let toast = document.createElement("div");
  
  // Add the 'toast' class to the newly created div for styling purposes
  toast.classList.add("toast");
  
  // Set the inner HTML of the toast to the message passed as an argument
  toast.innerHTML = msg;
  
  // Append the new toast to the toastBox container
  toastBox.appendChild(toast);

  // Check if the message contains the word 'Error', and if so, add the 'error' class for error styling
  if (msg.includes("Error")) {
    toast.classList.add("error");
  }

  // Check if the message contains the word 'Invalid', and if so, add the 'invalid' class for invalid input styling
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  // Automatically remove the toast after 6 seconds
  setTimeout(() => {
    toast.remove(); // Remove the toast from the DOM
  }, 6000); // 6000 milliseconds = 6 seconds
}

/* 
Steps:
1. Get the `toastBox` element to hold all toast notifications.
2. Define three predefined messages (`successMsg`, `errorMsg`, `invalidMsg`) with icons and respective messages.
3. Create the `showToast` function to:
   a. Dynamically create a `div` element for the toast.
   b. Assign the 'toast' class to style the toast.
   c. Insert the message as the content of the toast.
   d. Append the toast to the `toastBox`.
   e. Conditionally add 'error' or 'invalid' classes based on the message content.
   f. Set a timeout to automatically remove the toast after 6 seconds.
4. Use the `showToast` function to display different types of toasts (success, error, invalid) by passing the relevant message as an argument.
*/
