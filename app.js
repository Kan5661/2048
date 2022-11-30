// Grab elements and applying listeners
let boxes = document.querySelectorAll(".box")

addEventListener('keydown', onPress)

// Global variables
let BlocksOnBoard = []
const assets = [
        'url("./assets/2.png")',
        'url("./assets/4.png")',
        'url("./assets/8.png")',
        'url("./assets/16.png")',
        'url("./assets/32.png")',
        'url("./assets/64.png")',
        'url("./assets/128.png")',
        'url("./assets/256.png")',
        'url("./assets/512.png")',
        'url("./assets/1024.png")',
        'url("./assets/2048.png")',
    ]

//// GAME LOGIC

// Create a 2 block at a random empty square
function random2block() {
    let emptyBlocks = [], newBlockIndex
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundImage == '') {emptyBlocks.push(boxes[i])}
    }
    newBlockIndex = Math.floor(Math.random() * emptyBlocks.length)
    emptyBlocks[newBlockIndex].style.backgroundImage = assets[0]
}

// WASD + Arrow keys
function onPress(onPress) {
    if (onPress.key == 'w' || onPress.key == 'ArrowUp') {
        CombineUp(-1)
    }
    if (onPress.key == 'a' || onPress.key == 'ArrowLeft') {
        console.log('left')
    }
    if (onPress.key == 's' || onPress.key == 'ArrowDown') {
        CombineDown(1)
    }
    if (onPress.key == 'd' || onPress.key == 'ArrowRight') {
        console.log("right")
    }
}

function CombineDown(NB_incre) {
    let currentBlockIMG
    for (let i = 0; i < boxes.length; i++) {
        if (i % 4 < 3) {  
            if (boxes[i].style.backgroundImage != '') {
                currentBlockIMG = boxes[i].style.backgroundImage
                
                if (boxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    boxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    boxes[i].style.backgroundImage = ''
                    i++
                }
                    
                else if (boxes[i + NB_incre].style.backgroundImage == '') {
                    boxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG)]
                    boxes[i].style.backgroundImage = ''
                }
                
            }
        }
    }
    random2block()
}

function CombineUp(NB_incre) {
    let currentBlockIMG
    for (let i = 15; i > 0 ; i--) {
        if (i % 4 > 0) {  
            if (boxes[i].style.backgroundImage != '') {
                currentBlockIMG = boxes[i].style.backgroundImage
                
                if (boxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    boxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    boxes[i].style.backgroundImage = ''
                    i--
                }
                    
                else if (boxes[i + NB_incre].style.backgroundImage == '') {
                    boxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG)]
                    boxes[i].style.backgroundImage = ''
                }
                
            }
        }
    }
    random2block()
}

random2block()
