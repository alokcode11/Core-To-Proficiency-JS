// Get the display element where the time will be shown
const displayTime = document.getElementById("displayTime");

// Initialize time variables for seconds, minutes, and hours
let [seconds, minutes, hours] = [0, 0, 0];

// Declare a variable to hold the timer interval
let timer = null;

// Function to increment time and update the display
function stopwatch() {
    // Increment seconds every time the function is called
    seconds++;

    // Check if seconds reach 60, reset seconds to 0 and increment minutes
    if(seconds == 60) {
        seconds = 0; // Reset seconds
        minutes++;    // Increment minutes

        // If minutes reach 60, reset minutes to 0 and increment hours
        if(minutes == 60) {
            minutes = 0; // Reset minutes
            hours++;     // Increment hours
        }
    }

    // Format the time with leading zeros if necessary (e.g., "01:09:05")
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Update the displayed time in the HTML element
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

// Function to start the stopwatch
function watchStart() {
    // If the timer is already running, clear it to avoid multiple intervals
    if(timer !== null) {
        clearInterval(timer);
    }

    // Set the interval to call the stopwatch function every second (1000 ms)
    timer = setInterval(stopwatch, 1000);
}

// Function to stop the stopwatch
function watchStop() {
    // Clear the interval to stop the time progression
    clearInterval(timer);
}

// Function to reset the stopwatch
function watchReset() {
    // Stop the timer
    clearInterval(timer);

    // Reset time variables to 0
    [seconds, minutes, hours] = [0, 0, 0];

    // Update the display to show "00:00:00"
    displayTime.innerHTML = "00:00:00";
}

/*
Steps for stopwatch functionality:

1. **Display element retrieval**: The `displayTime` variable is linked to the HTML element where the time will be shown. This is done via `document.getElementById`.

2. **Time variable initialization**: The `seconds`, `minutes`, and `hours` are initialized as part of an array and start at 0.

3. **Timer declaration**: A variable `timer` is set to `null` initially. This will later store the ID returned by `setInterval` so the timer can be controlled (started/stopped).

4. **Stopwatch function**:
   - **Increment seconds**: The `seconds` variable is incremented by 1 every time `stopwatch` is called.
   - **Roll over to minutes**: If `seconds` reaches 60, it resets to 0 and increments `minutes` by 1.
   - **Roll over to hours**: If `minutes` reaches 60, it resets to 0 and increments `hours` by 1.
   - **Formatting time**: Hours, minutes, and seconds are formatted as two digits by prepending a "0" if they are less than 10.
   - **Update display**: The formatted time is displayed in the `displayTime` HTML element.

5. **Start the stopwatch** (`watchStart` function):
   - If the timer is already running (i.e., `timer !== null`), the current timer is cleared to avoid multiple instances of `setInterval`.
   - A new interval is started using `setInterval`, calling `stopwatch` every 1000 milliseconds (1 second).

6. **Stop the stopwatch** (`watchStop` function):
   - The `clearInterval` method is called with the `timer` variable to stop the stopwatch.

7. **Reset the stopwatch** (`watchReset` function):
   - First, `clearInterval` is used to stop the timer if it's running.
   - Then, the time variables (`seconds`, `minutes`, `hours`) are reset to 0.
   - Finally, the display is updated to show `00:00:00`.
*/
