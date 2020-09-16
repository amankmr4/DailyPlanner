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

//lets create a fucntion to loop through all the text area and set them classes to check time and change background
$("textarea").each(function() {

    var textTime = parseInt($(this).attr("name"));

    if(textTime > currentTime){
        $(this).addClass("backgroundfuture");
    }

    if(textTime = currentTime){
        $(this).addClass("backgroundcurrent");
    }

    if(textTime = currentTime){
        $(this).addClass("backgroundpast");
    }
});

//we will create an event listner to all our buttons
$("button").on("click", function () {
//here we will local storage for all our input once the button has been pressed
localStorage.setItem("9AM", (am9txt.val()))
localStorage.setItem("10AM", (am10txt.val()))
localStorage.setItem("11AM", (am11txt.val()))
localStorage.setItem("12PM", (pm12txt.val()))
localStorage.setItem("1PM", (pm1txt.val()))
localStorage.setItem("2PM", (pm2txt.val()))
localStorage.setItem("3PM", (pm3txt.val()))
localStorage.setItem("4PM", (pm4txt.val()))
localStorage.setItem("5pm", (pm5txt.val()))

})

// lets append the input so it stays on after refreshed
$("#9amtext").append(localStorage.getItem("9AM"));
$("#9amtext").append(localStorage.getItem("10AM"));
$("#9amtext").append(localStorage.getItem("11AM"));
$("#9amtext").append(localStorage.getItem("12PM"));
$("#9amtext").append(localStorage.getItem("1PM"));
$("#9amtext").append(localStorage.getItem("2PM"));
$("#9amtext").append(localStorage.getItem("3PM"));
$("#9amtext").append(localStorage.getItem("4PM"));
$("#9amtext").append(localStorage.getItem("5PM"));