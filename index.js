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
for (let i = 0; i < 100; i++){
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
