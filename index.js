// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(word) {
  const newArray = cats.push(word);
  return newArray;
}

function destructivelyPrependCat(word) {
  return cats.unshift(word);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(word) {
  const append = [...cats];
  append.push(word);
  return append;
}

function prependCat(name) {
  const prepend = [...cats];
  prepend.unshift(name);
  return prepend;
}

function removeLastCat() {
  const remove = [...cats];
  remove.pop();
  return remove;
}

function removeFirstCat() {
  const first = [...cats];
  first.shift();
  return first;
}
