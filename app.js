// Grab elements and applying listeners
let boxes = document.querySelectorAll(".box")

addEventListener('keydown', onPress)

// Global variables
let BlocksOnBoard = []
const assets = {
    block2: 'url("./assets/2.png")',
    block4: 'url("./assets/4.png")',
    block8: 'url("./assets/8.png")',
    block16: 'url("./assets/16.png")',
    block32: 'url("./assets/32.png")',
    block64: 'url("./assets/64.png")',
    block128: 'url("./assets/128.png")',
}

//// GAME LOGIC

// Create a 2 block at a random empty square
function random2block() {
    let emptyBlocks = [], newBlockIndex
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundImage == '') {emptyBlocks.push(boxes[i])}
    }
    newBlockIndex = Math.floor(Math.random() * emptyBlocks.length)
    emptyBlocks[newBlockIndex].style.backgroundImage = assets.block2
}

// WASD + Arrow keys
function onPress(onPress) {
    if (onPress.key == 'w' || onPress.key == 'ArrowUp') {
        console.log("up")
    }
    if (onPress.key == 'a' || onPress.key == 'ArrowLeft') {
        console.log('left')
    }
    if (onPress.key == 's' || onPress.key == 'ArrowDown') {
        Combine(1, 1)
    }
    if (onPress.key == 'd' || onPress.key == 'ArrowRight') {
        console.log("right")
    }
}

function Combine(nextBlock, NB_incre) {
    let currentBlockIMG, nextBlockIMG
    for (let i = 0; i < boxes.length; i++) {
        if ((i % 4 < 3)) {  
            if (boxes[i].style.backgroundImage != '') {
                currentBlockIMG = boxes[i].style.backgroundImage
                boxes[i].style.backgroundImage = ''
                
                if (boxes[i + 1].style.backgroundImage == currentBlockIMG) {
                    boxes[i + 1].style.backgroundImage = assets.block4
                }
                    
                else {
                    boxes[i + 1].style.backgroundImage = assets.block2
                }
                
            }
        }
    }
    random2block()
}

random2block()
random2block()

