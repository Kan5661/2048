let boxes = document.querySelectorAll(".box")

document.addEventListener('keydown', onPress)

function random2block() {
    let emptyBlocks = [], newBlockIndex
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundImage == '') {emptyBlocks.push(boxes[i])}
    }
    newBlockIndex = Math.floor(Math.random() * emptyBlocks.length)
    emptyBlocks[newBlockIndex].style.backgroundImage = "url('./assets/2.png')"
}

function onPress(onPress) {
    if (onPress.key == 'w' || onPress.key == 'ArrowUp') {
        console.log("up")
    }
    if (onPress.key == 'a' || onPress.key == 'ArrowLeft') {
        console.log('left')
    }
    if (onPress.key == 's' || onPress.key == 'ArrowDown') {
        console.log("down")
    }
    if (onPress.key == 'd' || onPress.key == 'ArrowRight') {
        console.log("right")
    }
}
random2block()
random2block()

