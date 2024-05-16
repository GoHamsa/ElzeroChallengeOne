/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer']; // length = 6

// Write Code Here

// 1) ["Osama", "Elham", "Mazero", "Ahmed"];

console.log('my original', my);
my.pop();
my.pop();
console.log('my short bc pop-ped', my); // length = 4
console.log('### Task 1) ', my.reverse());

// 2) ["Elham", "Mazero"]

console.log('### Task 2) ', my.slice(-counter, counter));

// 3) "Elzero"

console.log(
  '### Task 3) ',
  'Elham'.slice(zero, -counter).concat('Mazero'.slice(my.indexOf('Mazero'))),
);

// 4) "rO"

console.log(
  '### Task 4) ',
  'Mazero'.charAt(my.length).concat('Mazero'.charAt(5).toUpperCase()),
);
