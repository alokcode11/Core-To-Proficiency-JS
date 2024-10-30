// URL of the Google Apps Script that will handle the form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbwyH8xx4SlONT0tNSJ6mGRX2BhkXZIyFhffixSSqdimrjp9w-gMqTl9m_n9BhuUiXiWBw/exec';

// Reference to the form element (with the name 'submit-to-google-sheet')
const form = document.forms['submit-to-google-sheet'];

// Reference to the element where messages will be displayed (e.g., success message)
const msg = document.getElementById("msg");

// Event listener for the form submission
form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the default form submission behavior (page reload)

  // Send form data to the Google Apps Script URL using the POST method
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)  // Send the form data in the body of the request
  })
  .then(response => {
      // On successful form submission, show a thank-you message
      msg.innerHTML = "Thank You For Subscribing!";

      // Hide the message after 5 seconds (5000 milliseconds)
      setTimeout(function () {
          msg.innerHTML = "";
      }, 5000);

      // Reset the form fields to empty after submission
      form.reset();
  })
  .catch(error => {
      // Log any errors that occur during the form submission process
      console.error('Error!', error.message);
  });
});


/*
Steps:
1. Define the URL of the Google Apps Script that will handle the form data submission.
2. Get a reference to the form (`submit-to-google-sheet`) and the message display element (`#msg`).
3. Add an event listener for the 'submit' event on the form.
   - Prevent the default form submission (which would normally reload the page).
4. Send the form data using the `fetch()` method:
   - Use the `POST` method to submit the form data as a `FormData` object to the Google Apps Script.
5. On successful form submission:
   - Display a success message ("Thank You For Subscribing!") in the `msg` element.
   - Use `setTimeout()` to clear the message after 5 seconds.
   - Reset the form to its initial state (clear all input fields).
6. If there is an error during submission:
   - Log the error message to the console.
*/
