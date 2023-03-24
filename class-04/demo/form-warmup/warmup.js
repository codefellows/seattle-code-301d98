console.log('linked!');



// event handler


function handleFormSubmitted(event) {
  event.preventDefault();
  console.log('submitted');
}

document.getElementById('myForm').addEventListener('submit', event => {
  event.preventDefault();
  console.log('submitted');
});

const nameEl = document.getElementById('name');
const nameHeaderEl = document.getElementById('nameHeader');
nameEl.addEventListener('input', event => {
  nameHeaderEl.innerText = `Welcome, ${event.target.value}!`;
});






















// const form = document.getElementById('myForm');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('submitted');
// });

// const nameEl = document.getElementById('name');
// const nameHeader = document.getElementById('nameHeader');
// nameEl.addEventListener('input', e => {
//   nameHeader.innerHTML = `Welcome, ${e.target.value}!`;
// });
