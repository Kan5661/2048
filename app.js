// Grab elements and applying listeners
let boxes = document.querySelectorAll(".box")
let scoreText = document.getElementsByClassName('scoreBoard')
let clearBtn = document.getElementsByClassName('clear')
let winText = document.getElementsByClassName('winText')

addEventListener('keydown', onPress) //add event listener to the whole page
clearBtn[0].addEventListener('click', clearAnimation)

// Global variables
let RsortedBoxes, score = 0, highScore = 0, game = true
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

// Create a '2' block at a random empty square
function random2block() {
    let emptyBlocks = [], newBlockIndex
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundImage == '') {emptyBlocks.push(boxes[i])}
    }
    newBlockIndex = Math.floor(Math.random() * emptyBlocks.length)
    emptyBlocks[newBlockIndex].style.backgroundImage = assets[0]
}

// WASD keys event listener
function onPress(onPress) {
    if (onPress.key == 'w') {
        CombineUp(-1)
        checkWin()
    }
    if (onPress.key == 'a') {
        CombineLeft(-1)
        checkWin()
    }
    if (onPress.key == 's') {
        CombineDown(1)
        checkWin()
    }
    if (onPress.key == 'd') {
        CombineRight(1)
        checkWin()
    }
    applyGlow()
}

// Combine logic for down
function CombineDown(NB_incre) {
    let currentBlockIMG
    for (let i = 0; i < boxes.length; i++) {
        if (i % 4 < 3) {  
            if (boxes[i].style.backgroundImage != '') {
                currentBlockIMG = boxes[i].style.backgroundImage
                
                if (boxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    boxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    boxes[i].style.backgroundImage = ''
                    score += 2**(assets.indexOf(currentBlockIMG) + 2)
                    scoreText[0].innerHTML = `Score: ${score}  High Score: ${highScore}`
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

// Combine logic for up
function CombineUp(NB_incre) {
    let currentBlockIMG
    for (let i = 15; i > 0 ; i--) {
        if (i % 4 > 0) {  
            if (boxes[i].style.backgroundImage != '') {
                currentBlockIMG = boxes[i].style.backgroundImage
                
                if (boxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    boxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    boxes[i].style.backgroundImage = ''
                    score += 2**(assets.indexOf(currentBlockIMG) + 2)
                    scoreText[0].innerHTML = `Score: ${score}  High Score: ${highScore}`
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

// Combine logic for right
function CombineRight(NB_incre) {
    sortBoxes()
    let currentBlockIMG
    for (let i = 0; i < boxes.length; i++) {
        if (i != 3 && i != 7 && i != 11 && i != 15) {  
            if (RsortedBoxes[i].style.backgroundImage != '') {
                currentBlockIMG = RsortedBoxes[i].style.backgroundImage
                
                if (RsortedBoxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    RsortedBoxes[i].style.backgroundImage = ''
                    score += 2**(assets.indexOf(currentBlockIMG) + 2)
                    scoreText[0].innerHTML = `Score: ${score}  High Score: ${highScore}`
                    i++
                }
                    
                else if (RsortedBoxes[i + NB_incre].style.backgroundImage == '') {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG)]
                    RsortedBoxes[i].style.backgroundImage = ''
                }
                
            }
        }
    }
    reSortBoxes()
    random2block()
}

// Combine logic for left
function CombineLeft(NB_incre) {
    sortBoxes()
    let currentBlockIMG
    for (let i = 15; i > 0; i--) {
        if (i != 0 && i != 4 && i != 8 && i != 12) {  
            if (RsortedBoxes[i].style.backgroundImage != '') {
                currentBlockIMG = RsortedBoxes[i].style.backgroundImage
                
                if (RsortedBoxes[i + NB_incre].style.backgroundImage == currentBlockIMG) {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG) + 1]
                    RsortedBoxes[i].style.backgroundImage = ''
                    score += 2**(assets.indexOf(currentBlockIMG) + 2)
                    scoreText[0].innerHTML = `Score: ${score}  High Score: ${highScore}`
                    i--
                }
                    
                else if (RsortedBoxes[i + NB_incre].style.backgroundImage == '') {
                    RsortedBoxes[i + NB_incre].style.backgroundImage = assets[assets.indexOf(currentBlockIMG)]
                    RsortedBoxes[i].style.backgroundImage = ''
                }
                
            }
        }
    }
    reSortBoxes()
    random2block()
}

// Apply glow effect to blocks
function applyGlow() {
    for (let i = 0; i < 16; i++) {
        switch(boxes[i].style.backgroundImage) {
            case assets[0]: boxes[i].style.boxShadow = ""; break;
            case assets[1]: boxes[i].style.boxShadow = "0px 0px 5px 0.3px yellow"; break;
            case assets[2]: boxes[i].style.boxShadow = "0px 0px 5px 0.3px #FFB319"; break;
            case assets[3]: boxes[i].style.boxShadow = "0px 0px 5px 1px #E69900"; break;
            case assets[4]: boxes[i].style.boxShadow = "0px 0px 5px 1px orange"; break;
            case assets[5]: boxes[i].style.boxShadow = "0px 0px 6px 2px #FF4019"; break;
            case assets[6]: boxes[i].style.boxShadow = "0px 0px 7px 3px #FF4019"; break;
            case assets[7]: boxes[i].style.boxShadow = "0px 0px 10px 6px red"; break;
            case assets[8]: boxes[i].style.boxShadow = "0px 0px 10px 6px red"; break;
            case assets[9]: boxes[i].style.boxShadow = "0px 0px 10px 6px #E60026"; break;
            case assets[10]: boxes[i].style.boxShadow = "0px 0px 15px 10px #800015"; break;
            default: boxes[i].style.boxShadow = ""
        }
    }
}

function checkWin() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundImage == assets[10]) {
            winText[0].innerHTML = "YOU WON!"
        }
    }
}

function clearBoard() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundImage = ''
        winText[0].innerHTML = ''
        applyGlow()
    }
    highScore = score
    score = 0
    scoreText[0].innerHTML = `Score: ${score} High Score: ${highScore}`
    random2block()
}

// Functions to sort the boxes nodes list to make it where i can reuse the combine functions
function reSortBoxes() {
    boxes = [
            RsortedBoxes[0], RsortedBoxes[4], RsortedBoxes[8], RsortedBoxes[12], 
            RsortedBoxes[1], RsortedBoxes[5], RsortedBoxes[9], RsortedBoxes[13],
            RsortedBoxes[2], RsortedBoxes[6], RsortedBoxes[10], RsortedBoxes[14],
            RsortedBoxes[3], RsortedBoxes[7], RsortedBoxes[11], RsortedBoxes[15]
        ]
}
function sortBoxes() {
    RsortedBoxes = [
            boxes[0], boxes[4], boxes[8], boxes[12], 
            boxes[1], boxes[5], boxes[9], boxes[13],
            boxes[2], boxes[6], boxes[10], boxes[14],
            boxes[3], boxes[7], boxes[11], boxes[15]
        ]
}

// Animations

function clearAnimation(clearAnimation) {
    let opacity = 1, degree = 0, borderRad = 0, clear = true
    let animationTimer = setInterval(frame, 20)
    timer = Date.now()
    function drawBoxes() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.opacity = opacity
            boxes[i].style.transform = `rotate(${degree}deg)`
            boxes[i].style.borderRadius = `${borderRad}%`
        }
    }
    function frame() {
        if (Date.now() - timer > 4000) {
            clearInterval(animationTimer)
            opacity = 1
            degree = 0
            borderRad = 0
            drawBoxes()
        }
        else if(Date.now() - timer < 2000) {
            opacity -= 0.01
            degree += 3.5
            borderRad += 0.5
            drawBoxes()

        }
        else if(Date.now() - timer > 2000) {
            if (clear) {
                clearBoard()
                clear = false
            }
            opacity += 0.01
            degree -= 3.5
            borderRad -= 0.5
            drawBoxes()
        }
    }
    
}


// Calling the functions
addEventListener('keydown', onPress)
// initital block when game starts
random2block()

//// tests

// boxes[0].style.backgroundImage = assets[0]
// for (let i = 0; i < 11; i++) {
//     boxes[i+1].style.backgroundImage = assets[i]
// }
// applyGlow()

// boxes[1].style.backgroundImage = assets[9]
// boxes[0].style.backgroundImage = assets[9]
// applyGlow()

