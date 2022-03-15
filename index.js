// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}
function destructivelyRemoveFirstCat() {
  return cats.shift();
}

const cat = [...cats];

function appendCat(name) {
  cat.push(name);
  return cat;
}

function prependCat(name) {
  cat.unshift(name);
  cat.splice(cat.length - 1);
  return cat;
}

function removeLastCat() {
  //   cat.splice(-1, 1);
  //   cat.splice(0, 1);
  return cat.slice(1, -1);

  console.log(cat);
}
function removeFirstCat() {
  //cat.shift();
  return cat.slice(2, 4);
}

// function prependCat(cat) {
//   return cat.unshift("Broom");
// }
