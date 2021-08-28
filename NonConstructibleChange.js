let coins = [5, 7, 1, 1, 2, 3, 22];

function nonConstructableChange(coins) {
	let candidate = 1;
	coins.sort((a, b) => a - b);
	for (i = 0; i < coins.length; i++) {
		if (candidate < coins[i]) {
			return candidate;
		}
		candidate += coins[i];
	}
	return candidate;
}

console.log(nonConstructableChange(coins));
