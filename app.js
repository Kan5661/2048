// Grab elements and applying listeners
let boxes = document.querySelectorAll(".box")

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
        CombineLeft(-1)
    }
    if (onPress.key == 's' || onPress.key == 'ArrowDown') {
        CombineDown(1)
    }
    if (onPress.key == 'd' || onPress.key == 'ArrowRight') {
        CombineRight(1)
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

function CombineRight(NB_incre) {
    let RsortedBoxes = [boxes[0], boxes[4], boxes[8], boxes[12], 
                        boxes[1], boxes[5], boxes[9], boxes[13],
                        boxes[2], boxes[6], boxes[10], boxes[14],
                        boxes[3], boxes[7], boxes[11], boxes[15]
                    ]

    let currentBlockIMG
    for (let i = 0; i < boxes.length; i++) {
        if (i != 3 && i != 7 && i != 11 && i != 15) {  
            if (RsortedBoxes[i].style.backgroundImage != '') {
                currentBlockIMG = RsortedBoxes[i].style.backgroundImage
                
                if (RsortedBoxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    RsortedBoxes[i].style.backgroundImage = ''
                    i++
                }
                    
                else if (RsortedBoxes[i + NB_incre].style.backgroundImage == '') {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG)]
                    RsortedBoxes[i].style.backgroundImage = ''
                }
                
            }
        }
    }
    boxes = [RsortedBoxes[0], RsortedBoxes[4], RsortedBoxes[8], RsortedBoxes[12], 
             RsortedBoxes[1], RsortedBoxes[5], RsortedBoxes[9], RsortedBoxes[13],
             RsortedBoxes[2], RsortedBoxes[6], RsortedBoxes[10], RsortedBoxes[14],
             RsortedBoxes[3], RsortedBoxes[7], RsortedBoxes[11], RsortedBoxes[15]
            ]
    random2block()
}

function CombineLeft(NB_incre) {
    let RsortedBoxes = [boxes[0], boxes[4], boxes[8], boxes[12], 
                        boxes[1], boxes[5], boxes[9], boxes[13],
                        boxes[2], boxes[6], boxes[10], boxes[14],
                        boxes[3], boxes[7], boxes[11], boxes[15]
                    ]

    let currentBlockIMG
    for (let i = 15; i > 0; i--) {
        if (i != 0 && i != 4 && i != 8 && i != 12) {  
            if (RsortedBoxes[i].style.backgroundImage != '') {
                currentBlockIMG = RsortedBoxes[i].style.backgroundImage
                
                if (RsortedBoxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    RsortedBoxes[i].style.backgroundImage = ''
                    i--
                }
                    
                else if (RsortedBoxes[i + NB_incre].style.backgroundImage == '') {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG)]
                    RsortedBoxes[i].style.backgroundImage = ''
                }
                
            }
        }
    }
    boxes = [RsortedBoxes[0], RsortedBoxes[4], RsortedBoxes[8], RsortedBoxes[12], 
             RsortedBoxes[1], RsortedBoxes[5], RsortedBoxes[9], RsortedBoxes[13],
             RsortedBoxes[2], RsortedBoxes[6], RsortedBoxes[10], RsortedBoxes[14],
             RsortedBoxes[3], RsortedBoxes[7], RsortedBoxes[11], RsortedBoxes[15]
            ]
    random2block()
}

addEventListener('keydown', onPress)
random2block()
