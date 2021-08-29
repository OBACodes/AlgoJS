let test = "abbsa";

function firstNonRepeating(string) {
	arr = string.split("");
	arr;
	let map = new Map();
	arr.forEach((element) => {
		map.has(element)
			? map.set(element, map.get(element) + 1)
			: map.set(element, 1);
	});
	map;
	nonRepeatingKeys = [];
	map.forEach((val, key) => (val < 2 ? nonRepeatingKeys.push(key) : null));
	res = nonRepeatingKeys.length > 0 ? arr.indexOf(nonRepeatingKeys[0]) : -1;
	res;
	return res;
}

firstNonRepeating(test);
