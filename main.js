let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
/*setInterval(mainLoop, 1000 / 60);*/

/*-----------IMAGE TILES------------*/

//Characters
let player = new Image();
player.src = 'img/player22.png';

let enemy = new Image();
enemy.src = 'tiles/enemy22.png';

let enemyZ = new Image();
enemyZ.src = 'tiles/enemy22.png';

let monkeyking = new Image();
monkeyking.src = 'tiles/monkey.png';

//Roads 

let roadimg = new Image();
roadimg.src = 'tiles/road.png';


//decorations walls

let greenTile = new Image();
greenTile.src = 'tiles/tile_green.png';

let tree1 = new Image();
tree1.src = 'tiles/tile_tree1.png';

let tree2 = new Image();
tree2.src = 'tiles/tile_tree2.png';

let flowerR = new Image();
flowerR.src = 'tiles/tile_flower.png';

let thinkImg = new Image();
thinkImg.src = 'tiles/think.png';


//collectables
let bananaImg = new Image();
bananaImg.src = 'tiles/banana1.png';

//Next level

let lvl2 = new Image();
lvl2.src = 'tiles/lvl2.png';


/*-----------MAP------------*/
/*y=20 , x=12*/
let levels = [
    [
        //1
        [0, 6, 0, 0, 0, 11, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 11, 0, 0, 0],
        [0, 1, 12, 1, 14, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 12, 1, 6],
        [7, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 2, 0, 11, 0, 14, 1, 12, 1, 0, 12, 0, 11, 0, 1, 1, 1, 0, 14, 0],
        [11, 1, 1, 12, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 3],
        [0, 1, 0, 0, 0, 1, 6, 0, 1, 1, 1, 11, 0, 1, 1, 0, 12, 0, 12, 0],
        [6, 1, 1, 1, 1, 12, 1, 1, 1, 7, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 12, 14, 1, 0, 12, 0, 12, 0, 1, 12, 1, 6],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 12, 0, 1, 0, 14, 1, 1, 0, 1, 0],
        [11, 1, 6, 1, 0, 0, 7, 1, 0, 11, 1, 1, 1, 0, 7, 0, 1, 0, 1, 11],
        [0, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 6, 0, 0, 6, 0, 0, 0, 11, 0, 0, 7, 0, 0, 11, 0, 6, 0, 0],
    ],
    [
        [0, 6, 0, 0, 0, 11, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 7, 0, 11],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 12, 1, 1, 6],
        [7, 1, 0, 1, 0, 0, 12, 0, 12, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 2, 0, 1, 0, 14, 1, 1, 1, 0, 12, 0, 0, 0, 1, 1, 1, 0, 14, 13],
        [0, 1, 1, 12, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 15],
        [0, 1, 0, 0, 0, 1, 6, 0, 0, 0, 1, 0, 0, 1, 14, 0, 12, 0, 1, 0],
        [6, 1, 0, 1, 1, 12, 1, 1, 1, 0, 1, 0, 11, 0, 1, 0, 1, 0, 1, 6],
        [0, 1, 1, 1, 0, 1, 0, 0, 12, 14, 1, 1, 1, 0, 12, 0, 1, 12, 1, 0],
        [0, 12, 0, 1, 1, 1, 1, 1, 1, 0, 12, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 6, 1, 0, 0, 7, 1, 0, 11, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 12, 1, 14, 1, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 6, 0, 0, 0, 11, 0, 0, 0, 0, 7, 0, 0, 0, 0, 11, 0, 0, 6],
    ]

]

/*-----------ENEMY MOVE------------*/
//Enemy move

/*
let enemyXpos = 0;
let enemyYpos = 300;
let enemyXspeed = 1;
let enemyYspeed = 1;
let enemyXstop = 0;
let enemyYstop = 0;
let enemySize = 60;
let height = 100;
let width = 600;

function mainLoop() {
    let zombie = ctx.drawImage(enemy, enemyXpos, enemyYpos, enemySize, enemySize);
    enemyMove();
}

function enemyMove() {
    enemyYpos += enemyYspeed;
    if (enemyYpos > height && enemyXpos < height) {
        enemyYpos = 200;
        enemyXpos = 480;
    } else if (enemyYpos > height && enemyYspeed === 1) {
        enemyYspeed = enemyXstop;
        enemyXspeed = enemyYstop;
    }

};
*/

/*-----------COUNTDOWN---------*/
let seconds = 60;
document.querySelector('#time-showing').innerText = seconds;
let time;

//Starter timeren
time = setInterval(function () {
    seconds -= 1;
    document.querySelector('#time-showing').innerText = seconds;

    //Time up
    if (seconds == 0) {
        document.querySelector("#timetext").style.display = 'none';

        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
            "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';

        document.getElementById("gameover").style.backgroundColor = 'black';

        document.getElementById("gameover").style.border = '3px solid green';
    };

}, 1000);

/*-----------LEVELS------------*/
// Next level
let levelIndex = 0;
let maze = levels[levelIndex];

function nextLevel() {
    levelIndex++;
    maze = levels[levelIndex];
    drawMaze();
}


/*-----------TILES------------*/
let tileSize = 50;

let playerPosition = {
    x: 9,
    y: 9
};

//Roads
let road = 1;

//collect
let banana = 14;

let playerMiki = 2;
let enemyZombie = 12;

//decorations
let greentile = 0;
let treepalm = 6;
let treereg = 7;
let flower = 11;
let think = 13;

//monkey
let monkey = 15;

//next level
let levl2 = 3;

/*-----------SCORE AND LIFE------------*/
let score = 0;
document.getElementById("boxscore").innerHTML = "Bananas: " + score;
let life = 3;
document.getElementById("demo").innerHTML = "Life: " + life;

/*-----------DRAWING MAZE------------*/
function drawMaze() {

    for (let y = 0; y < maze.length; y++) {

        for (let x = 0; x < maze[y].length; x++) {

            if (maze[y][x] === greentile) {
                ctx.drawImage(greenTile, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === playerMiki) {
                playerPosition.x = x;
                playerPosition.y = y;
                ctx.drawImage(player, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === road) {
                ctx.drawImage(roadimg, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === enemyZombie) {
                ctx.drawImage(enemyZ, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === monkey) {
                ctx.drawImage(monkeyking, x * tileSize, y * tileSize, tileSize, tileSize);
            }

            //Decorations
            else if (maze[y][x] === treepalm) {
                ctx.drawImage(tree1, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === treereg) {
                ctx.drawImage(tree2, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === flower) {
                ctx.drawImage(flowerR, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === think) {
                ctx.drawImage(thinkImg, x * tileSize, y * tileSize, tileSize, tileSize);
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


//audio walk
function walk() {

    let gameSound = new Audio('gamesounds/walk.mp3');
    gameSound.play();

}
//audio collect
function collect() {

    let gameSound = new Audio('gamesounds/collect.mp3');
    gameSound.play();

}
//audio level up
function levelUp() {

    let gameSound = new Audio('gamesounds/levelup.mp3');
    gameSound.play();

}
//zombie attack
function attack() {

    let gameSound = new Audio('gamesounds/attack.mp3');
    gameSound.play();

}


/*-----------WALKABLE TILES------------*/
//Walkable tiles function
function isWalkable(targetTile) {
    if (targetTile === road || targetTile === banana || targetTile === levl2 || targetTile === enemyZombie || targetTile === monkey) {
        return true;
    } else {
        return false;
    }
}


/*------------CONTROLS--------------- */
window.addEventListener('keydown', (e) => {

    let targetTile;
    switch (e.keyCode) {
        case 37: //left
            targetTile = maze[playerPosition.y][playerPosition.x - 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x - 1] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                walk();
                if (targetTile === banana) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Bananas: " + score;
                } else if (targetTile === enemyZombie) {
                    life--;
                    attack();
                    document.getElementById("demo").innerHTML = "Life: " + life;
                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                    }
                } else if (targetTile === monkey && score >= 10) {
                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("winbox").innerHTML = "You won! Your score is " + score;
                } else if (targetTile === monkey && score < 10) {
                    document.querySelector("#timetext").style.display = 'none';

                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                        "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();
                }
            }
            break;
        case 39: //Right
            targetTile = maze[playerPosition.y][playerPosition.x + 1];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x + 1] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();

                walk();
                if (targetTile === banana) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Bananas: " + score;

                } else if (targetTile === enemyZombie) {
                    life--;
                    attack();
                    document.getElementById("demo").innerHTML = "Life: " + life;

                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                    }
                } else if (targetTile === monkey && score >= 10) {

                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "YOU WON" + '</br>' +
                        "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';

                } else if (targetTile === monkey && score < 10) {

                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                        "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();
                }

            }
            break;
        case 38: //Up
            targetTile = maze[playerPosition.y - 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y - 1][playerPosition.x] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                walk();
                if (targetTile === banana) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Bananas: " + score;;

                } else if (targetTile === enemyZombie) {
                    life--;
                    document.getElementById("demo").innerHTML = "Life: " + life;
                    attack();
                    if (life < 1) {
                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                    }
                } else if (targetTile === monkey && score >= 10) {
                    document.querySelector("#timetext").style.display = 'none';

                    document.getElementById("winbox").innerHTML = "You won! Your score is " + score;

                } else if (targetTile === monkey && score < 10) {

                    document.querySelector("#timetext").style.display = 'none';
                    document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                        "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                    document.getElementById("gameover").style.backgroundColor = 'black';
                    document.getElementById("gameover").style.border = '3px solid green';
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();
                }
            }
            break;
        case 40: //down
            targetTile = maze[playerPosition.y + 1][playerPosition.x];
            if (isWalkable(targetTile)) {
                maze[playerPosition.y + 1][playerPosition.x] = playerMiki; //players nye position
                maze[playerPosition.y][playerPosition.x] = road;
                drawMaze();
                walk();
                if (targetTile === banana) {
                    score++;
                    collect();
                    document.getElementById("boxscore").innerHTML = "Bananas: " + score;;
                } else if (targetTile === enemyZombie) {
                    life--;
                    document.getElementById("demo").innerHTML = "Life: " + life;
                    attack();
                    if (life < 1) {

                        document.querySelector("#timetext").style.display = 'none';
                        document.getElementById("gameover").innerHTML = '</br>' + '</br>' + "GAME OVER" + '</br>' +
                            "Bananas score: " + score + '</br>' + '<button id="try">Try again</button><br>';
                        document.getElementById("gameover").style.backgroundColor = 'black';
                        document.getElementById("gameover").style.border = '3px solid green';

                        /* document.getElementById("try").onclick = function () {
                             tryAgain()
                         };

                         function tryAgain() {
                             document.getElementById("try").window.location.href = "index.html";
                         }*/


                    }
                } else if (targetTile === monkey && score >= 10) {
                    document.getElementById("winbox").innerHTML = "You won! Your score is " + score;
                } else if (targetTile === monkey && score < 10) {
                    document.getElementById("gameover").innerHTML = "You lost! Your scored " + score;
                } else if (targetTile === levl2) {
                    levelUp();
                    nextLevel();

                }
            }
            break;


    }
    console.log('life' + life)
    console.log(score);
})


window.addEventListener("load", drawMaze);