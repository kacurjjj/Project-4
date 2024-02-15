const currentDate = new Date ('2024-03-14T08:00:00');
console.log(currentDate);
//test currentDate in browser to verify it works

const targetDate= new Date ('2025-06-20T12:00:00');
console.log(targetDate);

const difference = targetDate - currentDate;
console.log(difference);
//Difference performs subtractions with target date and current date 

//Update function for the countdown 
function updateCountdown() {
    const currentTime= new Date ();
    const difference = targetDate - currentTime;

    //mathfloor = used to round down to the nearest whole number
    // each unit is calculated by dividing the difference by the # in miliseconds
    // broken down to Days > Hours > Minutes > Seconds
    //1000ms/s - 60s/min - 60min/h - 24h/day
    const days = Math.floor(difference / (1000*60*60*24));
    const hours = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((difference % (1000*60)) /1000);


    //IT IS CASE SENSITIVE = DAYS STUFF NEED TO BE LOWERCASE
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

//setInterval = function that executes a code, it updates every one second (1000ms)
const interval = setInterval(updateCountdown, 1000);


// clearInterval(interval) stops the countdown when it reaches your target date 
if (difference <0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "Event Started";
}
