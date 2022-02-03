// import functions and grab DOM elements
// import {} from './utils.js';

import { renderGoblin } from './utils.js';

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
function displayGoblins() {
    for (const goblin of goblins) {
        const gob = renderGoblin(goblin);
        gob.addEventListener('click', () => {
            console.log('clicked', goblin);
            // playGame();
        });
        gobArea.append(gob);
    }
}
displayGoblins();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const goblin = {
        id: goblinId++,
        name: formData.get('gob-name'),
        hp: Math.ceil(Math.random() * 4),
        img: undefined
    };
    
    goblins.push(goblin);
    // console.log('gob', goblin, 'gobs', goblins);
    form.reset();
    displayGoblins();
  
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
