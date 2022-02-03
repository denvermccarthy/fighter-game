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
        id: 0,
        name: 'bart',
        hp: 2,
        img: './assets/icons8-goblin-64.png'
    }, {
        id: 1,
        name: 'jerry',
        hp: 1,
        img: './assets/icons8-goblin-64.png'
    }
];
let goblinId = 2;
// set event listeners
function displayGoblins() {
    gobArea.innerHTML = '';
    for (const goblin of goblins) {
        const gob = renderGoblin(goblin);
        gob.addEventListener('click', () => {
            // console.log('clicked', goblin);
            playGame(goblin);
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
        img: './assets/icons8-goblin-64.png'
    };
    
    goblins.push(goblin);
    // console.log('gob', goblin, 'gobs', goblins);
    form.reset();
    displayGoblins();
  
});

function hitUser(g) {
    console.log('user was hit');
    userHp--;
    if (g.hp === 0){
        userHp++;
    }
    hpEl.textContent = userHp;
}

function hitGoblin(goblin) {
//  console.log('goblin was hit')
    goblin.hp--;
    
    if (goblin.hp === 0) {
        defeatCount++;
        defeatEl.textContent = defeatCount; 
        goblin.img = './assets/dead.png';
    } else if (goblin.hp < 0) {
        goblin.hp = 0;
    } 
    displayGoblins();
}

function playGame(goblin) {
    

    Math.random() < .75 ? hitGoblin(goblin) : console.log('user miss');

    Math.random() < .50 ? hitUser(goblin) : console.log('goblin miss');

    // if (goblin.hp === 0) {
    //     goblin.img = './assets/dead.png';
    //     console.log('dead', goblin);
    //     displayGoblins();
    // } else if (goblin.hp < 0) {
    //     // set to zero, find a way to keep at zero
    //     goblin.hp = 0;
    //     displayGoblins();
    // } 

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  // goblin.hp.every(equalsZero) ? console.log('win') : console.log('loss');

   // const isDead = goblins.forEach((goblin) => {
    //     if (goblin.hp < 0) {

    // });

    // if (isDead) {
    //     // remove all goblins 
    // }
reset.addEventListener('click', () => {
    window.location.reload();
});  