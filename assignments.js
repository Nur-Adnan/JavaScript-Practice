//1. create a counter in javascript (count downs 30 to 0)
let count = 30;

const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Countdown finished!");
  }
}, 1000);

//2. Calculate the time it takes between a setTimeout call and the inner function actually running

function measureTime() {
  // Date.now() to get the current time (in milliseconds)
  const start = Date.now();
  setTimeout(() => {
    const end = Date.now();
    const duration = end - start;
    console.log(`Time taken: ${duration}ms`);
  }, 1000);
}

//3. Create a terminal clock (HH:MM:SS)
function dateMethods() {
  let currentDate = new Date();
  if (currentDate.getHours() >= 12) {
    console.log(
      currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds() +
        " PM"
    );
  } else {
    console.log(
      currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds() +
        " AM"
    );
  }
}

setInterval(dateMethods, 1000);
