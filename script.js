/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// Write Code Here
console.log(my);
my.pop();
my.pop();
console.log(my);
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(-counter, counter)); // ["Elham", "Mazero"]

console.log(
  'Elham'.slice(0, -3).concat('Mazero'.reverse().slice(0, -3).reverse()),
); // "Elzero"

//console.log(); // "rO"
