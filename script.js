// 78 - Higher Order Functions - Challenge
//..
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';

let solution = '?????';

console.log(
  (solution = myString
    .split('')
    .filter(function (clear) {
      return clear !== ',' && isNaN(parseInt(clear));
    })
    .map(function (space) {
      return space === '_' ? ' ' : space;
    })
    .reduce(function (acc, current) {
      return acc === current ? acc : current;
    })
    .join('')),
); // Elzero Web School

// if acc & current = capital > take only acc
