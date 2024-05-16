// 63 - CHALLENGE Random Arguments Function
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => UserName
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
  let userName = '';
  let age = 0;
  let availbility = 0;
  typeof a === 'string'
    ? (userName = a)
    : typeof a === 'number'
    ? (age = a)
    : (availbility = a);
  typeof b === 'string'
    ? (userName = b)
    : typeof b === 'number'
    ? (age = b)
    : (availbility = b);
  typeof c === 'string'
    ? (userName = c)
    : typeof c === 'number'
    ? (age = c)
    : (availbility = c);
  if (availbility === true) {
    availbility = 'Available';
  } else {
    availbility = 'Not Available';
  }
  document.write(
    `Hello ${userName}, Your Age Is ${age}, You Are ${availbility} For Hire<br>`,
  );
}

showDetails('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
