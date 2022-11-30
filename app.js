// Grab elements and applying listeners
let boxes = document.querySelectorAll(".box")

addEventListener('keydown', onPress)

// Global variables
let BlocksOnBoard = []
const assets = {
    1: 'url("./assets/2.png")',
    2: 'url("./assets/4.png")',
    3: 'url("./assets/8.png")',
    4: 'url("./assets/16.png")',
    5: 'url("./assets/32.png")',
    6: 'url("./assets/64.png")',
    7: 'url("./assets/128.png")',
}

//// GAME LOGIC

// Create a 2 block at a random empty square
function random2block() {
    let emptyBlocks = [], newBlockIndex
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundImage == '') {emptyBlocks.push(boxes[i])}
    }
    newBlockIndex = Math.floor(Math.random() * emptyBlocks.length)
    emptyBlocks[newBlockIndex].style.backgroundImage = assets['1']
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
                
                if (boxes[i + 1].style.backgroundImage == currentBlockIMG) {
                    boxes[i + 1].style.backgroundImage = assets[String(Number('1') + 1)]
                    boxes[i].style.backgroundImage = ''
                    break
                }
                    
                else if (boxes[i + 1].style.backgroundImage == '') {
                    boxes[i + 1].style.backgroundImage = assets['1']
                    boxes[i].style.backgroundImage = ''
                }
                else if (boxes[i + 1].style.backgroundImage != currentBlockIMG) {
                    
                }
                
            }
        }
    }
    random2block()
}

random2block()
random2block()

