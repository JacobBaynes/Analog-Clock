const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

const PACIFIC = document.querySelector("#pacific");
// const MOUNTAIN = document.querySelector("#mountain");
// const CENTRAL = document.querySelector("#central");
// const EASTERN = document.querySelector("#easter");
const MY = document.querySelector("#my");

var date = new Date();
console.log(date);
setClock(date);
function setClock(date) {
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    function runTheClock() {

        hrPosition = hrPosition+(3/360);
        minPosition = minPosition+(6/60);
        secPosition = secPosition+6;
        
        HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    }

    var interval = setInterval(runTheClock, 1000);
}

function myTime() {
    let date = new Date();
    setClock(date);
}

function pacificTime() {

    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let offset = 8
    let pacTime = utc - (3600000 * offset);
    let newDate = new Date(pacTime);
    console.log(newDate);

    setClock(newDate);

    // let hr = date.getHours();
    // let min = date.getMinutes();
    // let sec = date.getSeconds();

    // let hrPos = (hr*360/12)+(min*(360/60)/12);
    // let minPos = (min*360/60)+(sec*(360/60)/60);
    // let secPos = sec*360/60;

    // var interval = setInterval(runTheClock, 1000);
}

// function mountainTime() {
//     let localTime = date.getTime();
//     let localOffset = date.getTimezoneOffset() * 60000;

//     let utc = localTime + localOffset;
//     let offset = 8
//     let pacTime = utc - (3600000 * offset);
//     let newDate = new Date(pacTime);
//     console.log(newDate);
// }

// function centralTime() {
//     let localTime = date.getTime();
//     let localOffset = date.getTimezoneOffset() * 60000;

//     let utc = localTime + localOffset;
//     let offset = 8
//     let pacTime = utc - (3600000 * offset);
//     let newDate = new Date(pacTime);
//     console.log(newDate);
// }

// function easternTime() {
//     let localTime = date.getTime();
//     let localOffset = date.getTimezoneOffset() * 60000;

//     let utc = localTime + localOffset;
//     let offset = 8
//     let pacTime = utc - (3600000 * offset);
//     let newDate = new Date(pacTime);
//     console.log(newDate);
// }


PACIFIC.addEventListener("click", pacificTime, false);
MY.addEventListener("click", myTime, false);