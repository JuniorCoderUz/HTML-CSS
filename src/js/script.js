'use strict';
const test = document.querySelector('h1'),
  joke = document.querySelector('a');


joke.addEventListener('click', e => {
  e.preventDefault();
  console.log("hello");
  joke.textContent = "Go to fuck🤬";

});

// function darkNetJoke(e) {
//   e.preventDefault();
//   e.textContent = "Go to Fuck haha";
// }