// Select the date input element and set its max value to today's date
let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0]; // Ensures that users cannot select a future date.

// Select the element where the result will be displayed
let result = document.getElementById("result");

// Function to calculate the age based on the selected birth date
function CalculateAge() {
  // Check if the user has selected a date, if not, display an error message
  if (!userInput.value) {
    result.innerHTML = "Please select a valid date.";
    return;
  }

  // Get the selected birth date and extract the day, month, and year
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();        // Day of birth
  let m1 = birthDate.getMonth() + 1;   // Month of birth (0-indexed, so add 1)
  let y1 = birthDate.getFullYear();    // Year of birth

  // Get today's date and extract the current day, month, and year
  let today = new Date();

  let d2 = today.getDate();        // Current day
  let m2 = today.getMonth() + 1;   // Current month (0-indexed, so add 1)
  let y2 = today.getFullYear();    // Current year

  let d3, m3, y3;  // Variables to store the calculated age in years, months, and days

  // Calculate the difference in years
  y3 = y2 - y1;

  // Calculate the difference in months, adjusting if needed
  if (m2 >= m1) {
    m3 = m2 - m1;  // No need to borrow from the previous year
  } else {
    y3--;  // Borrow one year
    m3 = 12 + m2 - m1;  // Adjust the month difference
  }

  // Calculate the difference in days, adjusting if needed
  if (d2 >= d1) {
    d3 = d2 - d1;  // No need to borrow from the previous month
  } else {
    m3--;  // Borrow one month
    d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;  // Adjust the day difference by borrowing from the previous month
    if (m3 < 0) {  // If months become negative, adjust by borrowing one year
      m3 = 11;
      y3--;
    }
  }

  // Display the calculated age in years, months, and days
  result.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

// Helper function to get the number of days in a specific month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate(); // Returns the number of days in the given month
}

/*
Steps to understand the code:
1. Select the input date element and limit the user from selecting a future date.
2. Select the element where the result (calculated age) will be displayed.
3. In the CalculateAge function:
   - First, check if a valid date is selected. If not, prompt the user to select one.
   - If valid, retrieve the birth date values (day, month, year) and today's date values.
4. Calculate the difference between the current date and the birth date:
   - Calculate years by subtracting birth year from the current year.
   - Calculate months, handling the case where the birth month is greater than the current month by borrowing from the year.
   - Calculate days, handling the case where the birth day is greater than the current day by borrowing from the month.
5. Display the calculated age in the form of years, months, and days.
6. A helper function getDaysInMonth is used to determine the number of days in a specific month, which is necessary for correct day calculations when borrowing from the previous month.
*/
