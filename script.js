const ol = document.querySelector('#myList');

function randomColor() {
    return "#" + Math.round((1 << 24) * Math.random()).toString(16).padStart(6, "0");
}

function onClick(event){
    const clicked = event.target;
    console.log(clicked);
    // alert(clicked.textContent);
    clicked.style.color = randomColor();
}

ol.addEventListener('click', onClick);  