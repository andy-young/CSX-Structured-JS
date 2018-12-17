// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

function goodKeys(obj, cb) {
  const ObjEntries = Object.entries(obj);
  let result = [];
  const temp = ObjEntries.filter(el => {
	  if (cb(el[1])) {
  		return result.push(el.shift());
    }
  });
  return result;
}

var sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']