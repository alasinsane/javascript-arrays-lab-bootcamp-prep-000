const app = "I don't do much."

function Arrays() {
  var kittens = ["Milo", "Otis", "Garfield"];

  return function destructivelyAppendKitten(name) {
  kittens.appendKitten(name);
  return kittens;
  }
}
