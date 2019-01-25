function arrayBuilder(obj) {
	return Object.keys(obj).reduce((result, str) => {
		for (let i = 0; i < obj[str]; i++) {
	    	result = result.concat(str); 
		}
		return result;
	}, []);
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []
