let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
*/


/*alert('hello!');
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable = 'Bob';
myVariable;*/
/*
Everything in between is a comment.
*/
/*let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}*/
/*let myVariable = document.querySelector('h1');
alert('hello!');*/
/*let myVariable = document.querySelector('h1');
alert('hello!');*/
/*
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
/*function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }*/
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }