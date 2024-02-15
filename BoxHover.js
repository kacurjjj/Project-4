// Fejlfinding (Debugging)
console.log('Debugging example: This message will be logged to the console.');

// Operatorer
let boxSize = 100;

function toggleBoxSize() {
    boxSize += 10;
    const box = document.getElementById('box');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
}

// Arrays
const colors = ['red', 'green', 'blue'];

function changeBoxColor() {
    const box = document.getElementById('box');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

// Kontrolstruktur (Loops)
function moveBoxWithLoop() {
    const box = document.getElementById('box');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            box.style.left = (i * 50) + 'px';
        }, i * 1000);
    }
}

// Objekter
const person = {
    name: 'John',
    age: 25,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

// Scope (inklusive LET)
function demonstrateScope() {
    let localVar = 'I am a local variable';
    console.log(localVar);

    if (true) {
        let blockVar = 'I am a block-scoped variable';
        console.log(blockVar);
    }

    // console.log(blockVar); // This will result in an error since blockVar is not accessible here
}

// Funktioner og Event Listener
let isBoxClicked = false;

function toggleBoxPosition() {
    const box = document.getElementById('box');
    const newPosition = isBoxClicked ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(1.5)';
    box.style.transform = newPosition;
    isBoxClicked = !isBoxClicked;
}

document.getElementById('box').addEventListener('click', toggleBoxPosition);
