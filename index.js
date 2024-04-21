
// Problem Statement
// Your task is to create a timer application with the following features:

// Display:

// The timer should be displayed in minutes and seconds (MM:SS format).
// Initial value: 00:00.

// Buttons:

// Start: Begins the timer.
// Stop: Pauses the timer.
// Reset: Resets the timer to 00:00.
let start = document.getElementById("start");
let stopbt = document.getElementById("stop");
let reset = document.getElementById("reset");

let content = document.getElementById("content");

// Functionality:
let id;
// The timer should increment every second when the Start button is clicked.
// start.addEventListener('click', ()=> {
//     console.log('clicked');
//     id = setInterval(()=> {
//         let str = content.innerText;
//         let min = parseInt(str.substring(0, 2));
//         let sec = parseInt(str.substring(3,5));

//         sec += 1;
//         if(sec >= 60) {
//             min+=1;
//             sec = sec%60;
//             min = min>9? `${min}`: `0${min}`;
//             sec = sec>9? `${sec}`: `0${sec}`;
//         } else {
//             min = min>9? `${min}`: `0${min}`;
//             sec = sec>9? `${sec}`: `0${sec}`;
//         }

//         content.innerText = `${min} : ${sec}`;
//     }, 1000);
// });


start.addEventListener('click', () => {
    console.log('clicked');
    id = setInterval(() => {
        let str = content.innerText;
        let [min, sec] = str.split(':').map(Number); // Splitting and converting to numbers

        sec += 1;
        if (sec >= 60) {
            min += 1;
            sec = 0; // Reset seconds to 0 when it reaches 60
        }

        // Formatting minutes and seconds
        const formattedMin = min.toString().padStart(2, '0');
        const formattedSec = sec.toString().padStart(2, '0');

        content.innerText = `${formattedMin} : ${formattedSec}`;
    }, 1000);
});










// Clicking the Stop button should pause the timer.
stopbt.addEventListener('click', ()=> {
    console.log('stop clicked');
    clearInterval(id);
});







// Clicking the Reset button should set the timer back to 00:00.
reset.addEventListener('click', ()=> {
    console.log('reset clicked');
    clearInterval(id);
    content.innerText = `00 : 00`
});






// The timer should not reset when stopped; it should resume from where it left off when started again.

// Submission Guidelines
// Submit the solution with a deployed link (e.g., Netlify) to the timer application. Ensure that the application works as described in the problem statement. Focus on functionality; styling can be improved later.

