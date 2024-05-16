/*
56_Loop - Challenge
Loop Challenge
*/

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
  'Anwar',
];

document.write(`<h1>We Have ${myAdmins.length} Admins</h1>`);
for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === 'Stop') break;
  document.write(`<div>The Admin For Team ${[i + 1]} Is ${myAdmins[i]}</div>`);
  document.write(`<h2>Team Members:</h2>`);
  let k = 0;
  for (j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p>- ${k + 1} ${myEmployees[j]}</p>`);
      k++;
    }
  }
}
