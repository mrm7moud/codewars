/*
Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

Accepted: 01:00 - 1:00

Not accepted:

24:00

You should check for correct length and no spaces.
*/

// My solution

function validateTime(time) {
  res =  /^([0-9]|[0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(time);
  return res;
}

// Best-rated solution

const validateTime = time => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(time)