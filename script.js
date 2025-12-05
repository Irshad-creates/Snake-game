let board = document.querySelector(".board");
const blockHeight = 80;
const blockWidth = 80;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);
let intervalId = null
let direction = "right";
let food = {X : Math.floor(Math.random)*rows, y : Math.E.floor(Math.random)*cols}

const blocks = [];

let snake = [
  { x: 1, y: 4 },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  snake.forEach((segment) => {
    let head  = null

    if(direction === 'left'){
        head = {x : snake[0].x, y : snake[0].y - 1}
    }else if (direction === 'right'){
        head = {x : snake[0].x, y : snake[0].y + 1}
    }else if ( direction === 'up'){
        head = {x : snake[0].x - 1, y : snake[0].y}
    }else if ( direction === 'down'){
        head = {x : snake[0].x + 1, y : snake[0].y}
    }

    if(head.x < 0 || head.x > rows || head.y < 0 || head.y >cols){
      alert('GAME OVER')
      clearInterval(intervalId)
    }

    if(food.x == food, food.y ==)

    snake.forEach(segment =>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })
    snake.unshift(head)
    snake.pop()

    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

intervalId=  setInterval(() => {

    // let head  = null

    // if(direction === 'left'){
    //     head = {x : snake[0].x, y : snake[0].y - 1}
    // }else if (direction === 'right'){
    //     head = {x : snake[0].x, y : snake[0].y + 1}
    // }else if ( direction === 'up'){
    //     head = {x : snake[0].x - 1, y : snake[0].y}
    // }else if ( direction === 'down'){
    //     head = {x : snake[0].x + 1, y : snake[0].y}
    // }

    // if(head.x < 0 || head.x > rows || head.y < 0 || head.y >cols){
    //   alert('GAME OVER')
    //   clearInterval(intervalId)
    // }

    // snake.forEach(segment =>{
    //     blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    // })
    // snake.unshift(head)
    // snake.pop()

    render()
}, 300);

addEventListener("keydown", function (event) {
  if ((event.key === "ArrowUp" || event.key === "w") && direction !== "down") {
    direction = "up";
  } else if (
    (event.key === "ArrowDown" || event.key === "s") &&
    direction !== "up"
  ) {
    direction = "down";
  } else if (
    (event.key === "ArrowRight" || event.key === "d") &&
    direction !== "left"
  ) {
    direction = "right";
  } else if (
    (event.key === "ArrowLeft" || event.key === "a") &&
    direction !== "right"
  ) {
    direction = "left";
  }
});
