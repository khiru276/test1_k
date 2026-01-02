// Practice JavaScript String Methods

let a = "Hello World";
console.log(a);

console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.indexOf('World'));
console.log(a.slice(0, 5));
console.log(a.slice(0, 8));
console.log(a.substring(0, 8));
console.log(a.replace('World', 'JavaScript')); 
// to reassign a  
// a = a.replace('World', 'JavaScript'); 
console.log(Array(3).fill(a).join(' - '));
console.log((a + ' ').repeat(3));
console.log(a.split('').reverse().join('_'));
console.log(a.split('').join('-')); 
console.log(a); 

// Practice JavaScript Number Methods

let b = 123.456789;
console.log(b);
console.log(b.toFixed(2));
console.log(b.toPrecision(4));
console.log(Number(b));
console.log(parseInt(b));
console.log(parseFloat(b));
console.log(Math.round(b));
console.log(Math.floor(b));
console.log(Math.ceil(b));
console.log(b.toString());
console.log(b.valueOf());


// Practice JavaScript Array Methods

let c = [1, 2, 3, 4, 5];
console.log(c);
console.log(c.length);
console.log(c.push(6)); // push only adds new last element
console.log(c);
console.log(c.pop()); // pop only removes the last element
console.log(c); 
console.log(c.shift()); // shift only removes the first element
console.log(c);
console.log(c.unshift(12)); // unshift only adds new first element or can say replace first element 
console.log(c); 
console.log(c.splice(2, 0, 8));
console.log(c); 

// Practice JavaScript Object Methods

let d = { name: "Khiru", age: 25 };
console.log(d);
console.log(Object.keys(d)); // keys = name, age
console.log(Object.values(d)); // values = Khiru, 25
console.log(Object.entries(d)); // entries = [ [ 'name', 'Khiru' ], [ 'age', 25 ] ]
console.log(d.hasOwnProperty('name')); // true
console.log(d.hasOwnProperty('gender')); // false