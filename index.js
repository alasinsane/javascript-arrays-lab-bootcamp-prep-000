const app = "I don't do much."

function Arrays() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();  
  return kittens;
}