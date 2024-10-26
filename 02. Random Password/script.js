// Get the password input element by its ID to display the generated password
const passwordBox = document.getElementById("password");

// Define the desired length of the password
const length = 12;

// Define character sets for password generation
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
const number = "0123456789"; // Numbers
const specialSymbol = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/\\`~"; // Special symbols

// Combine all character sets into a single string to choose random characters from
const allChars = upperCase + lowerCase + number + specialSymbol;

// Function to create a new password
function createPassword() {
  let password = "";
  
  // Ensuring the password contains at least one character from each set
  // 1 random uppercase letter
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  // 1 random lowercase letter
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  // 1 random number
  password += number[Math.floor(Math.random() * number.length)];
  // 1 random special symbol
  password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];

  // Add random characters until the password reaches the desired length (12 characters)
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Display the generated password in the input field
  passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
  passwordBox.select(); // Select the password in the input box
  document.execCommand("copy"); // Copy the selected text to the clipboard
}

/*
Steps of the program:
1. Define the character sets for uppercase, lowercase, numbers, and special symbols.
2. Combine all character sets into one string for easy random character selection.
3. Create the `createPassword` function that generates a password:
   a. Ensure the password includes at least one character from each set (uppercase, lowercase, number, and special symbol).
   b. Fill the rest of the password with random characters from the combined character set.
   c. Display the generated password in the input field.
4. Create the `copyPassword` function to allow users to copy the generated password to their clipboard:
   a. Select the password from the input field.
   b. Use `execCommand("copy")` to copy the selected password to the clipboard.
5. (Optional) Call these functions on button clicks or user interaction as needed.
*/
