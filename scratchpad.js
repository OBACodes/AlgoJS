dict = { a: undefined, b: 2 };

function createOrIncrement(dict) {
  let keys = ["a", "b", "c"];
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    dict[key] = (dict[key] || 0) + 1;
  }
  console.log(dict);
  return dict;
}

createOrIncrement(dict);
