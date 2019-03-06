// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver (name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver (name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver (name) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver (name) {
  drivers.shift();
}

function appendDriver (name) {
   return [...drivers, "Broom"];
}

function prependDriver (name) {
   return [name, ...drivers];
}

function removeLastDriver (name) {
   pop(drivers)
   return [ ...drivers, name];
}

function removeFirstDriver (name) {
  shift(drivers)
  return [name, ...drivers];
}
