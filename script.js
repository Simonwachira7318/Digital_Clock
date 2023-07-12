// // <!-- JAVASCRIPT code  -->

// const clock = document.getElementById("clock");
// const dateElement = clock.querySelector(".date");
// const timeElement = clock.querySelector(".time");
// const textElement = clock.querySelector(".text");

// function padStart(value, length) {
//     return String(value).padStart(length, '0');
// }

// function updateClock() {
//     const now = new Date();

//     const year = now.getFullYear();
//     const month = padStart(now.getMonth() + 1, 2);
//     const date = padStart(now.getDate(), 2);
//     const day = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

//     const hours = padStart(now.getHours(), 2);
//     const minutes = padStart(now.getMinutes(), 2);
//     const seconds = padStart(now.getSeconds(), 2);

//     dateElement.textContent = `${year}-${month}-${date} ${day}`;
//     timeElement.textContent = `${hours}:${minutes}:${seconds}`;
// }

// updateClock();
// setInterval(updateClock, 1000);
