function add() {
    const div = document.createElement('div');
    div.innerHTML = document.getElementById('input-element').value;
    document.getElementById("second").appendChild(div);
}

function deletee() {
    const list = document.getElementById("second");
    list.removeChild(list.firstElementChild);
}