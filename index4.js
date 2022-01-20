const para = document.querySelector('p');
console.log(para);

const paragra = document.querySelector('div p.error');
console.log(paragra);

const param = document.querySelector('div.error');
console.log(param);

//forEach() is only used on NodeList
const paras = document.querySelectorAll('p');
console.log(paras);
// const paras = document.querySelectorAll('p');
// console.log(paras[1]);

paras.forEach(function(value) {
    console.log(value);
});

const errors = document.querySelectorAll('.error');
console.log(errors);

//get an element by ID
const title = document.getElementById('page-title');
console.log(title);

//get elements by their class name [forEach() can not be used on HTMLcollection]
const errors1 = document.getElementsByClassName('error');
console.log(errors1);

//get elements by their tag name
const paras1 = document.getElementsByTagName('p');
console.log(paras1);
console.log(paras[1]);

//modifying the text 
const para1 = document.querySelector('p');
para1.innerText = 'ninjas are awesome!';

// const paras2 = document.querySelectorAll('p');
// paras2.forEach(function(value) {
//     console.log(value.innerText);
//     // value.innerText += 'roger';
// });

const paras3 = document.querySelector('.content');

console.log(paras3.innerHTML);
paras3.innerHTML = '<h2>new content</h2>';
//paras3.innerHTML += '<h2>new content</h2>';


const people = ['mario', 'chris', 'kante', 'kate', 'bora'];

people.forEach(function(value) {
    console.log(`<li>${value}</li>`);
    // HTML += `<li>${value}</li>`;
    // console.log(HTML);
    paras3.innerHTML += `<li>${value}</li>`;
});


//getting an attribute and setting an attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.youtube.com');
console.log(link.getAttribute('href'));
link.innerText = 'watch full video on youtube';

const mssg = document.querySelector('p.errors');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('id', 'fail');
console.log(mssg.getAttribute('id'));
mssg.setAttribute('style', 'color:green;') //using setAttribute when changing the style, overrides the current style.

const titles = document.querySelector('h1');
console.log(titles.style);
console.log(titles.style.color);
titles.style.margin = '50px';
titles.style.color = 'crimson';
titles.style.fontSize = '50px';
titles.style.backgroundColor = 'gray';
//deleting a style
titles.style.margin = '';

// adding and removing a class attribute
const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.add('success');
content.classList.remove('success');

//Exercise about adding classes
//[(textContent property)== displays the content evenif it is hidden]
const contents = document.querySelectorAll('p');
contents.forEach(function(value) {
    //console.log(value.textContent);
    if (value.textContent.includes('error')) {
        value.classList.add('error');
    } else if (value.textContent.includes('success')) {
        value.classList.add('success');
    }
});
//toggle method kinda add a class to the existing class
//and also removes it when toggle is used once again
const tires = document.querySelector('.title');
tires.classList.toggle('test');
tires.classList.toggle('test');