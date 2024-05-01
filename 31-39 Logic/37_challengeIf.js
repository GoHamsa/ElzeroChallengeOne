// If challenge

let a = 10;

/* if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log('10 to 40');
} else if (a > 40) {
  console.log('> 40');
} else {
  console.log('unknown');
} */

a < 10
  ? console.log(10)
  : a >= 10 && a < 40
  ? console.log('10 to 40')
  : a > 40
  ? console.log('> 40')
  : console.log('unknown');

// Write with Ternary if syntax

let st = 'Elzero Web School';

if ((st.length * 2).toString() === '34') {
  console.log('34 Good');
}

// W position may change

if (st.indexOf('w')) {
  console.log(st.indexOf);
  console.log("'w' Good");
}

// !== 'string'

if (st !== 'string') {
  console.log("!== 'string' = Good");
}

// === "number"
if (typeof st.length === 'number') {
  console.log('=== "number" = Good');
}

// === "ElzeroElzero"

if (st.substr(0, 6).repeat(2) === 'ElzeroElzero') {
  console.log('=== "ElzeroElzero"');
}
