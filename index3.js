//object literals
let user = {
    name: 'Roger',
    age: 30,
    email: 'crystal@net.co.uk',
    location: 'Kigali',
    // blogs: ['why mac and cheese rules', '10 things to do with marmite'],
    blogs: [
        { title: 'why mac and cheese rules', likes: 40 },
        { title: '10 things to do with marmite', likes: 60 }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logblogs: function(blog) {
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};
console.log(user);
console.log(user.name);
user.age = 40;
console.log(user.age);
console.log(user['email']);

console.log(typeof user);

user.logblogs();

user.login();
user.logout();
user.logblogs();

//object literals
//array of objects
// const Blog = [{ title: 'why mac and cheese rules', likes: 40 },
//     { title: '10 things to do with marmite', likes: 60 }
// ];
// console.log(Blog);


//Math object
console.log(Math);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//callback function
const people = [{ name: 'roger', age: 25, sex: 'male', email: 'roger@gmail.com' },
    { name: 'emery', age: 19, sex: 'female', email: 'aline3@gmail.com' },
    { name: 'lauda', age: 30, sex: 'male', email: 'lauda23@uk.ac.com' },
    { name: 'philos', age: 41, sex: 'male', email: 'plos1w@ur.ac.rw' }
];
// const myname = function(value) {
//     console.log(value);
// };
// myname();
people.forEach(function(value) {
    console.log(value.name, value.age, value.sex, value.email);
});

//another callback function way
const myfunc = function(val) {
    console.log(`name:${val.name},age:${val.age},sex:${val.sex},email:${val.email}`);
};
people.forEach(myfunc);

//primitive values
//const numberOne = 50;
const numberOne = 100;
console.log(numberOne);
//reference values (object literals)
const userOne = { name: 'roger', age: 30 };
console.log(userOne.name);
const userTwo = userOne;
console.log(userTwo);

//primitive and reference values
//1.primitive values
const scoreOne = 50;
const scoreTwo = scoreOne;
console.log(`scoreOne:${scoreOne}, scoreTwo:${scoreTwo}`);
const scoreOne1 = 100;
console.log(`scoreOne:${scoreOne1}, scoreTwo:${scoreTwo}`);

//2.refernce values
const userone = { name: 'rally', age: 40 };
const usertwo = userone;
console.log(userone, usertwo);
userone.name = 'vega';
console.log(userone, usertwo);


//Exercises on callback function
const people = [{ name: 'roger', age: 25, sex: 'male', email: 'roger@gmail.com' },
    { name: 'emery', age: 19, sex: 'female', email: 'aline3@gmail.com' },
    { name: 'lauda', age: 30, sex: 'male', email: 'lauda23@uk.ac.com' },
    { name: 'philos', age: 41, sex: 'male', email: 'plos1w@ur.ac.rw' }
];

const roar = value => {
    console.log(`name:${value.name},age:${value.age},sex:${value.sex},email:${value.email}`);
    //console.log(value);
};
people.forEach(roar);