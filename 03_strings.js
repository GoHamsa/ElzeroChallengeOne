let a = 'Elzero Web School';
let nom = 'unary plus converts it to a number, then post-incremented ';
let string = 'Hamsa';

console.log(
  a.substr(0, 1).toLowerCase() +
    a.slice(1, -1).toUpperCase() +
    a.substr(-1).toLocaleLowerCase(),
);
console.log(a.substr(0, 6) + ' ' + a.substr(11, 6));
console.log(a.slice(2, 3).toUpperCase() + a.slice(3, 6));
console.log(a.slice(-4, -3).toUpperCase().repeat(8));

console.log(string.startsWith('h'));
console.log(string.substring(-3));
console.log(string.substring(string.length - 3));
console.log(string.split());
console.log(string.split(''));
console.log(string.slice(1, -1));
console.log(string.slice(-1));
console.log(string.slice(string.length - 1));
console.log(string.slice(string.length - 3, string.length - 1));

console.log(nom.indexOf('a'));
console.log(nom.lastIndexOf('a'));

console.log(nom);
console.log(nom.toLocaleUpperCase());
console.log(nom.toUpperCase());
console.log(nom.toLocaleLowerCase(2));
console.log(nom.trim());
console.log(nom.trim().charAt(1).toUpperCase());
