let ul = document.getElementById('list');
let list = [];
let addBtn = document.getElementById("add");


addBtn.addEventListener("click", function add() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = ``;
    if(input.length > 0) {
        list.push(input);
    }
    show();
})

// display tasks
function show() {
    ul.innerHTML = ``;
    for(let i=0; i<list.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${list[i]}<button onclick="remove(${i})" class='remove'>x</button>`;
        ul.appendChild(li);
    }
}

// remove tasks
function remove(i) {
    list.splice(i, 1);
    show();
}
