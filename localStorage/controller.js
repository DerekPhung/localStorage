// const colorsArray = ["blue", "green", "white"];
// localStorage.setItem('colors', JSON.stringify(colorsArray));

// const numbersArray = [1, 2, 3];
// localStorage.setItem('numbers', JSON.stringify(numbersArray));

const colorsData = JSON.parse(localStorage.getItem('colors'));
console.log(colorsData);

const numbersData = JSON.parse(localStorage.getItem('numbers'));
console.log(numbersData);

localStorage.clear();

document.getElementById("bigBox").innerHTML += `
    <div class="container">
        <div class="to-do-app">
            <h2>To-do App</h2>
            <br>
            <label for="item">Item</label>
            <br>
            <input type="text" id="item">
            <br>
            <br>
            <button onclick="add()">Add</button>
            <button onclick="del()">Delete</button>
        </div>
        <ul></ul>
    </div>
`;

const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(liMaker);
function liMaker(text){
    const li = document.createElement('li')
    li.textContent = text;
    ul.appendChild(li);
}

function add(){
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = '';
}

function del(){
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
}


