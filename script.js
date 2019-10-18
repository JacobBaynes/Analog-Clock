const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const PACIFIC = document.querySelector("#pacific");
const MOUNTAIN = document.querySelector("#mountain");
const CENTRAL = document.querySelector("#central");
const EASTERN = document.querySelector("#easter");
const MY = document.querySelector("#my");

var interval

let start = new Date();
setClock(start);

function setClock(date) {
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
    console.log(date);
    
    hrPosition = (hr*360/12)+(min*(360/60)/12);
    minPosition = (min*360/60)+(sec*(360/60)/60);
    secPosition = sec*360/60;
    
    console.log("hrPos: " + hrPosition + " minPos: " + minPosition + " secPos: " + secPosition)
    
    interval = setInterval(runTheClock, 1000);

    console.log(interval);
}

function runTheClock() {
    
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    
    // console.log("hrPos: " + hrPosition + " minPos: " + minPosition + " secPos: " + secPosition)
    
}


function myTime() {
    clearInterval(interval);
    interval = null;
    let date = new Date();
    setClock(date);
}

function pacificTime() {
    clearInterval(interval);
    interval = null;
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 8
    let pacTime = utc - (3600000 * offset);
    let newDate = new Date(pacTime);
    setClock(newDate);
}

function mountainTime() {
    clearInterval(interval);
    interval = null;
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 7
    let pacTime = utc - (3600000 * offset);
    let newDate = new Date(pacTime);
    setClock(newDate);
}

function centralTime() {
    clearInterval(interval);
    interval = null;
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 6
    let pacTime = utc - (3600000 * offset);
    let newDate = new Date(pacTime);
    setClock(newDate);
}

function easternTime() {
    clearInterval(interval);
    interval = null;
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 5
    let pacTime = utc - (3600000 * offset);
    let newDate = new Date(pacTime);
    setClock(newDate);
}


PACIFIC.addEventListener("click", pacificTime, false);
MOUNTAIN.addEventListener("click", mountainTime, false);
CENTRAL.addEventListener("click", centralTime, false);
EASTERN.addEventListener("click", easternTime, false);
MY.addEventListener("click", myTime, false);