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