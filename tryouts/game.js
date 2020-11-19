let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let nebula = new Image();
nebula.src = 'images/Road.png';
let asteroid = new Image();
asteroid.src = 'images/wall.png';
let avatar = new Image();
avatar.src = 'images/Avatar.png';
let gem = new Image();
gem.src = 'images/Gem.png';
let portal = new Image();
portal.src = 'images/Portal.png';
let levels = [
    [
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 3],
        [1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
        [0, 0, 1, 1, 5, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 1, 1, 1, 1]
    ],
    [
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [3, 1, 1, 1, 1, 0, 0, 1, 0, 1],
        [0, 0, 1, 1, 5, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 1, 1, 1, 1, 1]
    ]
]
let levelIndex = 0;
let maze = levels[levelIndex];

function nextLevel() {
    levelIndex++;
    maze = levels[levelIndex];
    drawMaze();
}
let tiles = 50;
let playerPosition = {
    x: 0,
    y: 0
};
let player = 2;
let road = 0;
let wall = 1;
let goal = 3;
let bvoid = 4;
let gems = 5;
let score = 0;

function drawMaze() {
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === road) {
                // ctx.fillStyle = 'green';
                ctx.drawImage(nebula, x * tiles, y * tiles, tiles, tiles);
            } else if (maze[y][x] === wall) {
                // ctx.fillStyle = 'yellow';
                ctx.drawImage(asteroid, x * tiles, y * tiles, tiles, tiles);
            } else if (maze[y][x] === player) {
                playerPosition.x = x;
                playerPosition.y = y;
                // ctx.fillStyle = 'red';
                ctx.drawImage(avatar, x * tiles, y * tiles, tiles, tiles);
            } else if (maze[y][x] === goal) {
                // ctx.fillStyle = 'blue';
                ctx.drawImage(portal, x * tiles, y * tiles, tiles, tiles);
            } else if (maze[y][x] === bvoid) {
                ctx.fillStyle = 'black';
                ctx.fillRect(x * tiles, y * tiles, tiles, tiles);
            } else if (maze[y][x] === gems) {
                // ctx.fillStyle = 'purple';
                ctx.drawImage(gem, x * tiles, y * tiles, tiles, tiles);
            }
        }
    }
}
// function walk(){
//     let gameSound = new Audio('walk.mp3');
//     gameSound.play();
// }
//checks if tile is walkable
function isWalkable(targetTile) {
    if (targetTile === road || targetTile === gems || targetTile === goal) {
        return true;
    } else {
        return false;
    }
}
// checks if player is stuck
function isStuck() {
    let walkableSides = 4;
    let targetY = playerPosition.y;
    let targetX = playerPosition.x - 1;
    if (targetX < 0 || targetX > 9) {
        walkableSides--;
    } else if (!isWalkable(maze[targetY][targetX])) {
        walkableSides--;
    }
    targetY = playerPosition.y;
    targetX = playerPosition.x + 1;
    if (targetX < 0 || targetX > 9) {
        walkableSides--;
    } else if (!isWalkable(maze[targetY][targetX])) {
        walkableSides--;
    }
    targetY = playerPosition.y - 1;
    targetX = playerPosition.x;
    if (targetY < 0 || targetY > 9) {
        walkableSides--;
    } else if (!isWalkable(maze[targetY][targetX])) {
        walkableSides--;
    }
    targetY = playerPosition.y + 1;
    targetX = playerPosition.x;
    if (targetY < 0 || targetY > 9) {
        walkableSides--;
    } else if (!isWalkable(maze[targetY][targetX])) {
        walkableSides--;
    }
    if (walkableSides === 0) {
        console.log('isStuck');
        return true;
    } else {
        return false;
    }
}
//assigns movement, changes tiles, collects gems, next level
window.addEventListener('keydown', (e) => {
    let targetTile;
    switch (e.keyCode) {
        case 37: //left
            targetTile = maze[playerPosition.y][playerPosition.x - 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x - 1] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                // walk();
                if (targetTile === gems) {
                    score++;
                }
                if (targetTile === goal) {
                    nextLevel();
                } else {
                    isStuck();
                }
            }
            break;
        case 39: //Right
            targetTile = maze[playerPosition.y][playerPosition.x + 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x + 1] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                // walk();
                if (targetTile === gems) {
                    score++;
                }
                if (targetTile === goal) {
                    nextLevel();
                } else {
                    isStuck();
                }
            }
            break;
        case 38: //Up
            targetTile = maze[playerPosition.y - 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y - 1][playerPosition.x] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                // walk();
                if (targetTile === gems) {
                    score++;
                }
                if (targetTile === goal) {
                    nextLevel();
                } else {
                    isStuck();
                }
            }
            break;
        case 40: //down
            targetTile = maze[playerPosition.y + 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y + 1][playerPosition.x] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                // walk();
                if (targetTile === gems) {
                    score++;
                }
                if (targetTile === goal) {
                    nextLevel();
                } else {
                    isStuck();
                }
            }
            break;
    }
    console.log(score);
})
window.addEventListener("load", drawMaze);