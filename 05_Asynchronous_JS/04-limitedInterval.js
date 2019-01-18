// Write a function called limitedInterval that accepts as arguments in this order -

// callback function
// wait time in milliseconds
// limit time in milliseconds.
// limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.

function limitedInterval(callback, wait, limit) {
  var timerID = setInterval(() => callback(), wait);
  setTimeout(() => clearInterval(timerID), limit);
}

limitedInterval(() => console.log("repeating"), 100, 550); // should log 'repeating' once per 100
