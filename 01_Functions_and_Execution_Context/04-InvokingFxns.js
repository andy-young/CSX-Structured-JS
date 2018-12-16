// Examine the code given to you. Try to make the calls variable equal to
// 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = "";

function jerry(str) {
  str += "Jerry";
  return george(str);
 }

 function george(str) {
   str += "Kramer";
   return kramer(str);
 }

 function elaine(str) {
   str += "Elaine";
   return str;
 }

 function kramer(str) {
   str += "George";
   return elaine(str);
 }

 // should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);

console.log(calls);