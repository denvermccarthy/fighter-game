// import functions and grab DOM elements
// import {} from './utils.js';

import { renderGoblin } from './utils.js';

const hpEl = document.getElementById('user-hp');
const defeatEl = document.getElementById('defeat-count');
const form = document.getElementById('gob-form');
const gobArea = document.getElementById('gob-area');
const reset = document.getElementById('reset');
const userImg = document.getElementById('user-img');
// const display = document.getElementById('display-hit');

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

// function displayHit(string) {
//     display.innerHTML = '';
//     if (string === 'user') {
//         const h3 = document.createElement('h3');
//         h3.textContent = 'USER WAS HIT';
//         display.append(h3);
//     } else if (string === 'goblin') {
//         const h3 = document.createElement('h3');
//         h3.textContent = 'GOBLIN WAS HIT';
//         display.append(h3);
//     } else {
//         const h3 = document.createElement('h3');
//         h3.textContent = 'BOTH MISSED!';
//         display.append(h3); 
//     }
// }
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const goblin = {
        id: goblinId++,
        name: formData.get('gob-name'),
        hp: 3,
        img: './assets/icons8-goblin-64.png'
    };
    
    goblins.push(goblin);
    // console.log('gob', goblin, 'gobs', goblins);
    form.reset();
    displayGoblins();
  
});

function hitUser(g) {
    // console.log('user was hit');
    userHp--;
    if (g.hp === 0){
        userHp++;
    }
    hpEl.textContent = userHp;
    // alert('user was hit!');
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
   // alert(`${goblin.name} was hit!`);
    displayGoblins();
}

function playGame(goblin) {
    if (goblin.hp === 0) return;
    
    const goblinWasHit = Math.random() < .50;
    const userWasHit = Math.random() < .50;

    // if (goblinWasHit && userWasHit) displayHit('both');

    if (goblinWasHit) {
        hitGoblin(goblin);
        alert('goblin was hit!');
    } else {
        alert('user missed!');
    }

    if (userWasHit) {
        hitUser(goblin);
        alert('user was hit!');
    } else {
        alert(`${goblin.name} missed!`);
    }

    const win = goblins.every((goblin) => goblin.hp === 0);
    if (win) {
        //generateModal(true);
        alert('you win!');
        window.location.reload();
    }

    if (userHp === 0) {
        //lose generateModal(false);
        userImg.classList.add('rotate');
        alert('you lose!');
        window.location.reload();
    }

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