var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {


  // Feel free to move things around!
  const two = 2
  return n + parseInt(two)
}

var funkyFunction = function() {
  var funk = "FUNKY!"
  return function innerFunction() {
    return funk
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
