// Grab all elements on page
const startBtn = document.getElementById('start')
const score = document.getElementById('score')
const grid = document.querySelector('.grid')

// Determine snakes direction
let direction = 1
const width = 10

// array to hold grid divs
let squares = []

// make our snake
let currentSnake = [2, 1, 0]

// Function to populate html with grid
const createGrid = () =>{
// create 100 of these elements with a for loop
for (let i = 0; i < width*width; i++){
// create element
const square = document.createElement('div')
// add styling
square.classList.add('square')
// put element on grid
grid.appendChild(square)
// push to squares array
squares.push(square)
}
}
// Call function
createGrid()

// Parsing currentSnake into the squares array to add styling class
currentSnake.forEach(index => squares[index].classList.add('snake'))


// Get the snake looking like its moving
const move = () =>{
    // check if a wall has been hit
    if(
        (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || // if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake') //if we've hit the snake body
    )
    return clearInterval(timerId)



    // remove last element from snake array using pop() method and store it in a variable
    const tail = currentSnake.pop()
    // remove styling from last element
    squares[tail].classList.remove('snake')
    // add square in direction we're heading using unshift() method
    currentSnake.unshift(currentSnake[0] + direction)
    // add styling so we can see it
    squares[currentSnake[0]].classList.add('snake')
}
// call move function
move()

// Using setInterval to loop a function on specified time
const timerId = setInterval(move, 1000)


// generate apples
const generateApples = () => {
    do{
        Math.floor(Math.random() * width*width) - 1
    }while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex.classList.add('apple')]
}


// keycodes need to refactor to e.key
function control(e) {
    if (e.keyCode === 39 || e.keycode === 68) {
        // console.log('right pressed')
        direction = 1
    } else if (e.keyCode === 38 || e.keycode === 87) {
        // console.log('up pressed')
        direction = - width
    } else if (e.keyCode === 37 || e.keyCode === 65) {
        // console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40 || e.keycode === 83) {
        // console.log('down pressed')
        direction = width
    }
}
// add functionality to key press
document.addEventListener('keyup', control) 

