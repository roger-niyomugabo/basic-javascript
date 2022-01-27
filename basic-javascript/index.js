//alert('welcome to our page!');
console.log('hello world');

// can't be a reserved keyword
// should be meaningful
// can't start with a number
// can't contain a space or hyphen
// they are case-sensitive

let firstname = 'Roger',
    lastname = 'Niyomugabo',
    email = 'rogerniyomugabo3@gmail.com';
console.log(firstname);
console.log(lastname);
// string concatenation
let fullName = firstname + ' ' + lastname;
console.log(fullName);

//getting characters
console.log(fullName[2]);
//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);
let index = email.indexOf('@');
console.log(index);

//methods can return booleans
//let email='rogerniyomugabo3@gmail.com';
let result7 = email.includes('@');
console.log(result7);
let names = ['mario', 'luigi', 'todd'];
let result8 = names.includes('rene');
console.log(result8);

//comparison operators
//loose comparison (different types can still be equal)
let age1 = 56;
console.log(age1 == 56);
console.log(age1 == 34);
console.log(age1 != 56);
console.log(age1 == '56');

// strict comparison (different types cannot be equal)
console.log(age1 === 56);
console.log(age1 === '56');
console.log(age1 !== 56);
console.log(age1 !== '56');

//loose comparison (different types can stillbe equal)
let name = 'werner';
console.log(name == 'werner'); //abstract equality
console.log(name > 'mulleron');
console.log(name > 'Werner');
console.log(name > 'Zayn');

//type conversion (to String, Number)
let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score);
let scores = 100;
scores = String(score);
console.log(typeof scores);

// let score2 = 'hello';
let score2 = Number('hello');
console.log(score2);

// converting to boolean
let score3 = Boolean(100);
console.log(score3, typeof score3); //nubers(positive,negative) are truthy values
let score4 = Boolean(0);
console.log(score4, typeof score4); //zero is only a falsy value

// let score5 = Boolean('0'); // any string with size is truthy
// console.log(score5, typeof score5);
let score5 = Boolean(''); // any string with size zero is falsy 
console.log(score5, typeof score5);


const interestRate = 0.3;
console.log(interestRate);
let age = 30; //umber literal
let isApproved = true; //boolean literal
let firstname2 = undefined; // one of primitive value types
let selectedColor = null;


let person = { //person object
    firstname3: 'roger',
    lastname: 'niyomugabo',
    age: 30
}; //object literal
console.log(person);

//changing the value of firstname using dot notation
person.firstname3 = 'ronaldo';
console.log(person.firstname3);
// accessing a value using dot notation
console.log(person.age);

// using bracket notation
let selection = 'name';
person['selection'] = 'mary';
console.log(person.selection);

//ARRAYS is an object in javascript
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; //expanding an array
selectedColors[3] = 4;
console.log(selectedColors[0]); //accessing the first element of an array
console.log(selectedColors.length); // giving the array size(length) or string length

let ages = [20, 25, 30, 35];
ages[2] = 60;
console.log(ages[2]);

//array methods
let ninjas = ['aubin', 'aurore', 'honore', 'olga'];
let result2 = ninjas.join(',');
console.log(result2);
let result3 = ninjas.indexOf('honore');
console.log(result3);
let result4 = ninjas.concat(['alain', 'allon']);
console.log(result4);
let result5 = ninjas.push('ben', 'bennon', 'henry');
console.log(ninjas);
let result6 = ninjas.pop();
console.log(result6);


//Functions

//a performing function
function greet(name, age) {
    console.log('hello ' + name + ' ' + age);
}
greet('roger', 30); // function call

// a calculating function
function square(number) {
    return number * number;
}
console.log(square(2));

//more string methods
let emails = 'rogerniyomugabo3@ur.ac.rw';
let results = emails.lastIndexOf('o');
console.log(results);
let results2 = emails.slice(4, 10);
console.log(results2);
let results3 = emails.substr(4, 10);
console.log(results3);
let results4 = emails.replace('g', 'a');
console.log(results4);
let results5 = emails.replace('g', 'a');
console.log(results5);
//NaN not a number
console.log(5 * 'hello');

//template strings
const title = 'Best reads of 2021';
const author = 'Mario';
const likes = 30;
//concatenation way
let results6 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(results6);
//template string way
let results7 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(results7);
//creating html tamplates
let html = `
<h2>This blog called ${title}</h2>
<p>by ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);