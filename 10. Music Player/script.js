// Get the DOM elements for progress bar, audio element, and control icon (play/pause)
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// When the song's metadata is loaded (including duration), set the progress bar max value to the song's duration
song.onloadedmetadata = function () {
    progress.max = song.duration;         // Set the max value of the progress bar to the song's total duration
    progress.value = song.currentTime;    // Set the current value of the progress bar to the song's current time
};

// Function to toggle between play and pause when the control icon is clicked
function playPause() {
    // If the control icon indicates "pause" (song is playing)
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();                     // Pause the song
        ctrlIcon.classList.remove("fa-pause");  // Change the icon to "play"
        ctrlIcon.classList.add("fa-play");
    }
    // If the control icon indicates "play" (song is paused)
    else {
        song.play();                      // Play the song
        ctrlIcon.classList.add("fa-pause");     // Change the icon to "pause"
        ctrlIcon.classList.remove("fa-play");
    }
}

// Continuously update the progress bar as the song plays
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;    // Update the progress bar value as the song progresses
    }, 500);  // Update every 500 milliseconds
}

// Event listener for progress bar change (user clicks or drags the progress bar)
progress.onchange = function() {
    song.play();                             // Resume playing the song if paused
    song.currentTime = progress.value;       // Set the song's current time to the value of the progress bar
    ctrlIcon.classList.add("fa-pause");      // Update the control icon to show "pause"
    ctrlIcon.classList.remove("fa-play");
}

/*
Steps:
1. Get references to the `progress` bar, the `song` (audio element), and the `ctrlIcon` (play/pause button).
2. When the song metadata (duration) is loaded:
   - Set the `progress` bar max value to the total duration of the song.
   - Set the progress bar value to the current song time.
3. Create a function `playPause` to toggle between playing and pausing the song.
   - If the song is playing, pause it and change the icon to "play".
   - If the song is paused, play it and change the icon to "pause".
4. Use `setInterval` to continuously update the progress bar as the song is playing.
   - This updates the progress bar value every 500 milliseconds based on the song's current time.
5. Add an event listener for the progress bar (`onchange` event):
   - When the user interacts with the progress bar, the song jumps to the clicked or dragged position.
   - Update the song's current time and resume playing from the new position.
   - Change the control icon to "pause" to reflect that the song is playing.
*/
