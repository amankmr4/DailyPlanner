// we selected the p element to hold todays text
var todaysText = document.querySelector("#welcomeDate");
//we are creating a variable that will hold our current dates and time
var todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// here we are chaning its text content
todaysText.textContent = todaysDate;