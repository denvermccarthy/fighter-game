// import functions and grab DOM elements
const hpEl = document.getElementById('user-hp');
const defeatEl = document.getElementById('defeat-count');
const form = document.getElementById('gob-form');
const gobArea = document.getElementById('gob-area');
const reset = document.getElementById('reset');

// console.log('hp', hpEl, 'defeat', defeatEl, 'form', form, 'gobarea', gobArea, 'button', reset);

// let state
let defeatCount = 0;
let userHp = 10;
let goblins = [
    {
        id: 1,
        name: 'bart',
        hp: 1,
        img: undefined
    }, {
        id: 2,
        name: 'jerry',
        hp: 1,
        img: undefined
    }
];
let goblinId = 3;
// set event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const goblin = {
        id: goblinId++,
        name: formData.get('gob-name'),
        hp: Math.ceil(Math.random() * 4),
        img: undefined
    };

    console.log(goblin);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
