// we selected the p element to hold todays text
var todaysText = ("#welcomeDate");
var am9txt = $("#9amtext");
var am10txt = $("#10amtext");
var am11txt = $("#11amtext");
var pm12txt = $("#12pmtext");
var pm1txt = $("#1pmbox");
var pm2txt = $("#2pmbox");
var pm3txt = $("#3pmbox");
var pm4txt = $("#4pmbox");
var pm5txt = $("#5pmtext");

//we are creating a variable that will hold our current dates and time
var todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

//// here we are chaning its text content
$(todaysText).text(todaysDate);

//we will here create a variable to hold out current time
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime);