// Get references to HTML elements where QR code and text input are displayed
let imgBox = document.getElementById("imgBox");  // Element that contains the QR image
let qrImg = document.getElementById("qrImg");    // Image element for displaying the generated QR code
let qrText = document.getElementById("qrText");  // Input field where user enters the text to generate the QR code

// Function to generate the QR code when user provides text input
function generateQR() {
  // Check if the input field has any text
  if (qrText.value.length > 0) {
    // Set the 'src' attribute of the QR image to the QR code API with the input text
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    
    // Add a CSS class to show the QR image (in case it's hidden initially)
    imgBox.classList.add("show-img");
  } else {
    // Add an error class to the input field if the user did not enter any text
    qrText.classList.add("error");
    
    // Remove the error class after 1 second to indicate invalid input visually
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

/* 
Steps:
1. Get the references to the DOM elements: `imgBox`, `qrImg`, and `qrText`.
2. Create a function `generateQR` that is triggered when the user interacts.
3. Inside the function:
   a. Check if the input field `qrText` contains any value.
   b. If there is text, set the image source (`src`) of `qrImg` to the URL that generates a QR code using the API.
   c. Show the QR image by adding a class to `imgBox` that reveals the image.
   d. If the input is empty, add an error class to highlight the issue and remove it after 1 second.
*/ 
