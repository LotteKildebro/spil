let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let player = new Image();
player.src = 'tiles/player.png';

//Roads 

let roadVtile = new Image();
roadVtile.src = 'tiles/tile_roadv.png';

let roadHtile = new Image();
roadHtile.src = 'tiles/tile_roadh.png';

let roadSwingRightUp = new Image();
roadSwingRightUp.src = 'tiles/tile_cornerupleft.png';

let roadSwingLeftUp = new Image();
roadSwingLeftUp.src = 'tiles/tile_cornerupright.png';

let roadCornerDownRight = new Image();
roadCornerDownRight.src = 'tiles/tile_cornerdownright.png';

let roadCornerDownLeft = new Image();
roadCornerDownLeft.src = 'tiles/tile_cornerdownleft.png';

let roadCL = new Image();
roadCL.src = 'tiles/tile_cl.png';

let roadCR = new Image();
roadCR.src = 'tiles/tile_cr.png';


//decorations walls

let greenTile = new Image();
greenTile.src = 'tiles/tile_green.png';

let tree1 = new Image();
tree1.src = 'tiles/tile_tree1.png';

let tree2 = new Image();
tree2.src = 'tiles/tile_tree2.png';

let flowerR = new Image();
flowerR.src = 'tiles/tile_flower.png';

//collectables
let bananaImg = new Image();
bananaImg.src = 'tiles/banana.png';

//Next level

let lvl2 = new Image();
lvl2.src = 'tiles/lvl2.png';





let levels = [

    [
        [0, 6, 0, 0, 0, 11, 0, 0, 0, 6],
        [0, 5, 4, 4, 14, 4, 4, 4, 10, 0],
        [7, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 2, 0, 0, 5, 4, 4, 4, 13, 0],
        [0, 12, 4, 4, 8, 11, 0, 0, 12, 3],
        [0, 1, 0, 0, 0, 0, 6, 0, 1, 0],
        [6, 9, 4, 14, 4, 10, 0, 0, 1, 7],
        [0, 0, 0, 11, 0, 1, 0, 0, 1, 0],
        [0, 11, 0, 0, 0, 9, 14, 4, 8, 0],
        [0, 0, 6, 0, 0, 0, 7, 0, 0, 11]
    ],
    [
        [0, 6, 0, 0, 0, 0, 0, 0, 0, 6],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [7, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 2, 1, 1, 1, 0, 0, 0, 1, 3],
        [0, 1, 0, 0, 0, 0, 6, 0, 1, 0],
        [6, 1, 1, 1, 1, 1, 0, 0, 1, 7],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 6, 0, 0, 0, 7, 0, 0, 0]
    ]

]
let levelIndex = 0;
let maze = levels[levelIndex];

function nextLevel() {
    levelIndex++;
    maze = levels[levelIndex];
    drawMaze();
}

let tileSize = 60;

let playerPosition = {
    x: 9,
    y: 9
};

//Roads
let greentile = 0;
let verticalRoad = 1;
let playerMiki = 2;
let horisontalRoad = 4;
let swingRight = 5;
let roadCornerDownR = 8;
let roadCornerDownL = 9;
let swingLeft = 10;
let cr = 12;
let cl = 13;

//collect
let banana = 14;


//decorations
let treepalm = 6;
let treereg = 7;
let flower = 11;

//next level
let levl2 = 3;

let score = 0;


ctx.drawImage(player, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(greenTile, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadVtile, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadHtile, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadCornerDownRight, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadCornerDownLeft, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(tree1, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(tree2, 9 * tileSize, 9 * tileSize, tileSize, tileSize);



function drawMaze() {

    for (let y = 0; y < maze.length; y++) {

        for (let x = 0; x < maze[y].length; x++) {

            if (maze[y][x] === greentile) {
                ctx.drawImage(greenTile, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === verticalRoad) {
                ctx.drawImage(roadVtile, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === playerMiki) {
                playerPosition.x = x;
                playerPosition.y = y;
                ctx.drawImage(player, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === horisontalRoad) {
                ctx.drawImage(roadHtile, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === swingRight) {
                ctx.drawImage(roadSwingRightUp, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === swingLeft) {
                ctx.drawImage(roadSwingLeftUp, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === roadCornerDownR) {
                ctx.drawImage(roadCornerDownRight, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === roadCornerDownL) {
                ctx.drawImage(roadCornerDownLeft, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === cr) {
                ctx.drawImage(roadCR, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === cl) {
                ctx.drawImage(roadCL, x * tileSize, y * tileSize, tileSize, tileSize);
            }

            //Decorations
            else if (maze[y][x] === treepalm) {
                ctx.drawImage(tree1, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === treereg) {
                ctx.drawImage(tree2, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === flower) {
                ctx.drawImage(flowerR, x * tileSize, y * tileSize, tileSize, tileSize);
            }

            //collect
            else if (maze[y][x] === banana) {
                ctx.drawImage(bananaImg, x * tileSize, y * tileSize, tileSize, tileSize);
            }

            //levels
            else if (maze[y][x] === levl2) {
                ctx.drawImage(lvl2, x * tileSize, y * tileSize, tileSize, tileSize);
            }

        }
    }

}
//audio
function walk() {

    let gameSound = new Audio('gamesounds/walk.mp3');
    gameSound.play();

}

//Walkable tiles
function isWalkable(targetTile) {
    if (targetTile === greentile || targetTile === verticalRoad || targetTile === horisontalRoad ||
        targetTile === roadCornerDownR || targetTile === roadCornerDownL || targetTile === swingLeft ||
        targetTile === swingRight ||
        targetTile === cr || targetTile === cl || targetTile === banana
    ) {
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


/*
let greentile = 0;
let verticalRoad = 1;
let playerMiki = 2;
let horisontalRoad = 4;
let swingRight = 5;
let roadCornerDownR = 8;
let roadCornerDownL = 9;
let swingLeft = 10;
let cr = 12;
let cl = 13;

//collect
let banana = 14;*/

window.addEventListener('keydown', (e) => {
    let targetTile;
    switch (e.keyCode) {
        case 37: //left
            targetTile = maze[playerPosition.y][playerPosition.x - 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x - 1] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = targetTile;
                drawMaze();
                // walk();
                if (targetTile === banana) {
                    score++;
                }
                if (targetTile === levl2) {
                    nextLevel();
                } else {
                    isStuck();
                }
            }
            break;
        case 39: //Right
            targetTile = maze[playerPosition.y][playerPosition.x + 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x + 1] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = horisontalRoad;
                drawMaze();

                // walk();
                if (targetTile === banana) {
                    score++;
                }
                if (targetTile === levl2) {
                    nextLevel();
                } else {
                    isStuck();
                }

            }
            break;
        case 38: //Up
            targetTile = maze[playerPosition.y - 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y - 1][playerPosition.x] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = targetTile;
                drawMaze();
                // walk();
                if (targetTile === banana) {
                    score++;
                }
                if (targetTile === levl2) {
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