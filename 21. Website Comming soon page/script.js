//when the countdown will stop
var countDownDate = new Date("Nov 11, 2024 00:00:00").getTime();

var x = setInterval(function () {
  //store current date and time
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // we have to calculate distance in terms of days, hours , minutes and
  // Calculate the number of days by dividing the total distance (in milliseconds)
  // by the number of milliseconds in a day (1000 ms * 60 seconds * 60 minutes * 24 hours),
  // and round it down to get a whole number of days.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Calculate the number of hours remaining after extracting the days.
  // First, use the modulus operator to get the remaining time after removing full days.
  // Then, divide by the number of milliseconds in an hour and round it down.
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Calculate the number of minutes remaining after extracting hours.
  // Again, use the modulus operator to remove full hours and divide by milliseconds in a minute.
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Calculate the number of seconds remaining after extracting minutes.
  // Use modulus to remove full minutes, then divide by 1000 to convert milliseconds to seconds.
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  //if times up 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
