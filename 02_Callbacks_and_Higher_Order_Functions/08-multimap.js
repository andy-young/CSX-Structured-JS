
// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arrValues, arrCbacks) {
	const obj = arrValues.reduce(function(acc, curr) {
  		acc[curr] = [];
		return acc;
  }, {});

  // lines 8 through 10 are cleaner, IMHO..
	// for (key in obj) {
	// 	for (fxns of arrCbacks) {
	// 		obj[key].push(fxns(key));
	// }
	// // }
	for (let i = 0; i < arrValues.length; i++) {
		for (let k = 0; k < arguments[1].length; k++) {
      obj[arrValues[i]].push(arrCbacks[i](arrValues[k]));
    }
	}
	return obj;
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
var items = ['catfood', 'glue', 'beer'];
var functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }, 'Beer', 'beerbeer'] }