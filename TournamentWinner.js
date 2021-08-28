// matches = [
//   ["a", "b"], // a:0 b:3 c:0
//   ["b", "a"], // a:0 b:6 c:0
//   ["b", "c"], // a:0 b:6 c:3
//   ["c", "b"], // a:0 b:6 c:6
//   ["c", "a"], // a:0 b:6 c:9
//   ["a", "c"], // a:0 b:6 c:12
// ];

// results = [1, 0, 1, 0, 0, 1];

matches = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
];

results = [0, 1, 1];

function findWinner(matches, results) {
  sortedWinner = {};
  let zippedArrayFunc = (matches, results) =>
    matches.map((a, i) => [a, results[i]]);

  zippedArray = zippedArrayFunc(matches, results);

  for (let index = 0; index < zippedArray.length; index++) {
    const element = zippedArray[index];
    if (element[1] == 0) {
      // home wins
      sortedWinner[element[0][1]] = (sortedWinner[element[0][1]] || 0) + 3; // dict[key] = (dict[key] || 0) + 1;
    } else {
      sortedWinner[element[0][0]] = (sortedWinner[element[0][0]] || 0) + 3; // dict[key] = (dict[key] || 0) + 1;
    }
  }

  winner = Object.keys(sortedWinner).reduce((a, b) =>
    sortedWinner[a] > sortedWinner[b] ? a : b
  );
  return winner;
}

findWinner(matches, results);
