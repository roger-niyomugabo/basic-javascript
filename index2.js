// for loops
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
console.log('loop fineshed');


const names = ['shaw', 'luke', 'memo'];
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loop
let i = 0;
while (i < 5) {
    console.log('in loop:', i);
    i++;
}
console.log('end of while loop');


const names2 = ['lucas', 'Graham', 'netos'];
let j = 0;
while (j < names2.length) {
    console.log('in loop:', names2[j]);
    j++;
}

//do while loop
let k = 4;
do {
    console.log('value of k is:', k);
    k++;
} while (k < 6);

// if conditions
const ninjas = ['lucas', 'Graham', 'netos', 'kaka'];
if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

// const password = 'p@ss';
// if (password.length >= 12) {
//     console.log('the password is long enough');
// } else if (password.length >= 8) {
//     console.log('the password is not that long');
// } else {
//     console.log('the password is too small')
// }

// logical operators OR || and AND &&

const password = 'p@ssword12';
if (password.length >= 12 && password.includes('@')) {
    console.log('the password is too strong enough');
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('the password is strong enough');
} else {
    console.log('the password is strong')
}

//logical NOT (!)
let user = false;
if (!user) {
    console.log('the user must be logged in to continue');
    // console.log(!user);
}

// BREAK and CONTINUE

let scores = [50, 25, 0, 30, 100, 20, 10];
for (let x = 0; x < scores.length; x++) {

    if (scores[x] === 0) {
        continue;
    }
    console.log('your score is:', scores[x]);
    if (scores[x] === 100) {
        console.log('you reached the highest score,congz!!');
        break;
    }

}

//SWITCH statements [Switch uses strict comparison]

const grade = 'E';
switch (grade) {
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');
        break;
    case 'E':
        console.log('you got an E');
        break;
    case 'F':
        console.log('you got an F');
        break;
    default:
        console.log('that is not a valid grade');

}

//variable & block scope

let age = 30;
if (true) {
    let age = 40; //redefining a global variable
    let name = 'roger';
    name = 'kenny'; //overriding name 
    console.log('inside block:', age, name);
    if (true) {
        let age = 50;
        console.log('inside 2nd code block:', age, name);
    }
}
console.log('outside block:', age, name);

//function declaration
function greet() {
    console.log('have a good day');
}
greet();

//function expression
const speak = function() {
    console.log('have a nice day my friends!');
};

speak();

// arguments & parameters
const word = function(name = 'anna', time = 'night') {
    console.log(`good ${time} ${name}`);
};
word('roger', 'morning');
// word('roger');
// word();

//returning values
const calcArea = function(radius) {
    // let area = 3.14 * radius ** 2;
    return 3.14 * radius ** 2;
};
const area = calcArea(5); //for reusability
// console.log(calcArea(5));
console.log(area);

//reusing value of area to find volume
const calcVol = function(area) {
    return area ** 3;
};
const volume = calcVol(area);
console.log('the volume is', volume);

//arrow function
const calculateArea = (radius) => {
    return 3.14 * radius ** 2;
};
const areas = calculateArea(5);
console.log('the area in arrow function is:', areas);


//regular function to an //arrow function
const greetz = function() {
    return 'hello,world';
};
//arrow function
const greets = () => 'hello,world';
console.log(greets());

//regular function to an arrow function
// const bill = function(products, tax) {
//         let total = 0;
//         for (let i = 0; i < products.length; i++) {
//             total = total + (products[i] + products[i] * tax);
//         }
//         return total;
//     }
//arrow function
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
// const products = [10, 15, 30];
// const tax = 0.2;
// const sells = bill(products, tax);
// console.log(sells);
console.log(bill([10, 15, 30], 0.2));

//Methods and Functions
const Mnames = 'arnold';
const myName = () => 'hello';
let resultOne = myName();
console.log(resultOne);
//methods
let resultTwo = Mnames.toUpperCase();
console.log(resultTwo);

//callbacks & foreach

const myFunc = function(callbackFunc) {
    let value = 50;
    callbackFunc(value);
};
myFunc(value => {

    console.log(value);
});
//
let people = ['mario', 'chris', 'kante', 'kate', 'bora'];
people.forEach((person, index) => {
    console.log(index, person);
});

//better choice
const logPerson = function(person, index) {
    console.log(`${index} -hello ${person}`);
};
people.forEach(logPerson);

//get a reference to the '<ul>'
const ul = document.querySelector('.people');
const persons = ['mario', 'chris', 'kante', 'kate', 'bora'];
let html = ``;
persons.forEach(value => {
    html += `<li style="color: red"> ${value} </li>`;

});
console.log(html);
ul.innerHTML = html;

// callback function and forEach
let sun = ['son', 'dele', 'kane', 'dombele'];
sun.forEach((value, index) => {
    console.log(index, value);
});