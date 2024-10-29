// The API URL to fetch random quotes from "quotable.io" API
const apiUrl = "https://api.quotable.io/random";

// Get references to the DOM elements where the quote and author will be displayed
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Asynchronous function to fetch and display the quote from the API
async function getquote(url) {
    // Fetch the quote from the provided URL (apiUrl)
    const response = await fetch(url);
    
    // Parse the response into JSON format
    var data = await response.json();
    
    // Display the quote content in the designated element
    quote.innerHTML = data.content;
    
    // Display the author of the quote in the designated element
    author.innerHTML = data.author;
}

// Call the getquote function to load a random quote on page load
getquote(apiUrl);

// Function to tweet the current quote and author via Twitter
function tweet() {
    // Open a new window to share the quote on Twitter with a pre-filled message
    window.open(
        "https://twitter.com/intent/tweet?text=" 
        + quote.innerHTML // Add the quote content
        + " ----by " 
        + author.innerHTML, // Add the author's name
        "Tweet Window", 
        "width=600, height=300" // Set the size of the popup window
    );
}

/*
Steps:
1. Set the API URL (https://api.quotable.io/random) to fetch random quotes.
2. Select the HTML elements where the quote content and author's name will be displayed.
3. Create an async function `getquote()` to fetch a random quote from the API and display it.
4. Inside `getquote()`, use fetch to get the quote and parse it into JSON format.
5. Update the quote and author elements with the fetched data.
6. Call the `getquote(apiUrl)` function to load a quote when the page is first loaded.
7. Create the `tweet()` function, which opens a new window with Twitter's pre-filled intent to tweet the current quote.
8. Format the tweet content using the quote and author and set the size of the tweet window.
*/
