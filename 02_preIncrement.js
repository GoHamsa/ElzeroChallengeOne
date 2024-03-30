let a = 10;
let b = '20';
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/* line 1
before log: 11 + 20 + 80 - 11 = 100 (11 aber nur, weil es bereits am Anf d Zeile pre-incremented wurde!)
after  log:
a= 12
b= 21
c= 81
*/
console.log(++a + -b + +c++ - -a++ + +a);

/* line 2
before log: 13 - 21 + 81 + 13 + 14 = 60 + 40 = 100
a= 14
b= 21
c= 82
*/

/*console.log(++a);
console.log(+b++);
console.log(+c++);
console.log(a++);
//console.log(++a + +b++ + +c++ - +a++);
console.log('break');*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
81 + 21 + (13 * 21) - (22 * 13) + 12 - 1
102 + 273 - 286 + 11 = 113
113 - 13 = 100
b= 22
*/

/*
[++a] pre-increment = 11

[+] addition

[+b] type-coercion = 20
[b++] post-increment = 20

[+] addition

[+c] type-coercion = 80
[c++] post-increment = 80

[-] subtraction

[+a] type-coercion = 10
[a++] post-increment = 11

result = 11+20+80-11 = 100

*/

/* line 2

[++a] pre-increment = 11

[+] addition

[-b] type-coercion = -20

[+] addition

[+c] type-coercion = 80

[c++] post-increment = 80

[-] subtraction

[-a] type-coercion = -10

[a++] post-increment = +10

[+] addition

[+a] type-coercion = 10

result = 11 -20 + 80 + 10 + 10 = 91

*/

/* line 3
[--c] pre-decrement = 79
[+] addition
[+b] type coercion = 20
[+] addition
[--a] pre-decrement = 9
[*] multiplication
[+b] 20
[b++] post-increment = 21
[-] subtraction
[+b] type coercion = 20
[*] multiplication
[a] 10
[+] addition
[--a] pre-decrement = 9
[-] subtraction
[+true] type coercion 1

result = 79+20 + 9*21 - 20*10 + 9+1
      = 99 + 189 - 200 + 10
      = 298 - 200
      = 98
 */

let d = '-100';
let e = '20';
let f = 30;
let g = true;

console.log(-d * +e); // 2000
// console.log( +f++ f*= ); // 173
/*
100 * 2 = 200 - 30 = 70 + 1 * 3

*/
console.log(++g * -(--d) - --f);
