
export function renderGoblin(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h4.textContent = goblin.name;
    img.src = goblin.img;
    p.textContent = `HP - ${goblin.hp}`;

    div.append(h4, img, p);

    return div;
}