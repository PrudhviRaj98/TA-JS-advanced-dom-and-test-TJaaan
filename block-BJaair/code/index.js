let form = document.querySelector('form');
let ul = document.querySelector('ul');
let cards = JSON.parse(localStorage.getItem('cards') || []);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    cards.push({ title, category });
    localStorage.setItem('cards',
        JSON.stringify(cards))
    createUI(cards, ul)
})


function handleEdit(event, info) {
    let ele = event.target;
    let input = document.createElement('input');
    input.value = info
    let parent = event.target.parentElement()
    parent.replaceChild(input, ele);
}

function createUI(data, root) {
    root.innerHtml = "";
    let fragment = new DocumentFragment();
    data.forEach((cardinfo) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = cardinfo.category;
        p.addEventListener('click', (event) => {
            handleEdit(event, cardinfo.category)
        });
        let h2 = document.createElement('h2');
        h2.innerText = cardinfo.title;
        li.append(p, h2);
        fragment.appendChild(li)
    });
    root.append(fragment);
}
createUI(cards, ul)