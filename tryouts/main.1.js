/*

let knap = document.querySelector("#knap");

console.log(knap); 

knap.addEventListener("click", ()=>{
    alert("Du har klikket på knappen"); 
})

document.addEventListener("keyup", (e)=>{
    if(e.keyCode === 37){
        document.querySelector("body").style.backgroundColor = "green"; 
    }else if(e.keyCode === 38){
        document.querySelector("body").style.backgroundColor = "red"; 
    }else if(e.keyCode === 39){
        document.querySelector("body").style.backgroundColor = "blue"; 
    }else if(e.keyCode === 40){
        document.querySelector("body").style.backgroundColor = "yellow"; 
    }
})


for(let i = 0; i < 3; i++){
    console.log(" i er = " + i)
}

let arr = ["mor","morfar", 1999]; 

for(let i = 0; i < arr.length; i++){

    console.log("index er = " + arr[i])

}

for(let y = 0; y < 3; y++){

    console.log("y: "+y)
   
    for(let x = 0; x < 3; x++){
        console.log("x: " + x)
    }
    
}

// 2-dimentionelt array

let arr2 = 
[
    [2,4,5],
    [3,6,9],
    [4,8,12]
]


console.log(arr2[0][2])

for(let y = 0; y < arr2.length; y++){

    for(let x = 0; x< arr2[y].length; x++){

        console.log(" y er = "  +y + " og x er = " + arr2[y][x])
    }

}

*/

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
/*
console.log(ctx);

// første række

ctx.fillStyle = "red";
ctx.fillRect(0,0,50,50);

ctx.fillStyle = "blue";
ctx.fillRect(50,0,50,50);

ctx.fillStyle = "green";
ctx.fillRect(100,0,50,50);


// anden række

ctx.fillStyle = "yellow";
ctx.fillRect(0,50,50,50);

ctx.fillStyle = "pink";
ctx.fillRect(50,50,50,50);

ctx.fillStyle = "violet";
ctx.fillRect(100,50,50,50);

// tredje række

ctx.fillStyle = "black";
ctx.fillRect(0,100,50,50);

ctx.fillStyle = "red";
ctx.fillRect(50,100,50,50);

ctx.fillStyle = "green";
ctx.fillRect(100,100,50,50);
*/
let player = new Image();
player.src = 'tiles/player.png';

let greenTile = new Image();
greenTile.src = 'tiles/tile_green.png';

let roadVtile = new Image();
roadVtile.src = 'tiles/tile_roadv.png';

let roadHstop = new Image();
roadHstop.src = 'tiles/tile_roadstophl.png';

let roadSwingRight = new Image();
roadSwingRight.src = 'tiles/tile_cornerupleft.png';

//decorations
let tree1 = new Image();
tree1.src = 'tiles/tile_tree1.png';

let tree2 = new Image();
tree2.src = 'tiles/tile_tree2.png';



maze =

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

let tileSize = 60;

let playerPosition = {
    x: 9,
    y: 9
};



ctx.drawImage(player, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(greenTile, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadVtile, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadHstop, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(roadSwingRight, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(tree1, 9 * tileSize, 9 * tileSize, tileSize, tileSize);
ctx.drawImage(tree2, 9 * tileSize, 9 * tileSize, tileSize, tileSize);

let playerMiki = 2;
let greentile = 0;
let verticalRoad = 1;


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
            } else if (maze[y][x] === 3) {
                ctx.fillStyle = "blue";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === 4) {
                ctx.drawImage(roadHstop, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === 5) {
                ctx.drawImage(roadSwingRight, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === 6) {
                ctx.drawImage(tree1, x * tileSize, y * tileSize, tileSize, tileSize);
            } else if (maze[y][x] === 7) {
                ctx.drawImage(tree2, x * tileSize, y * tileSize, tileSize, tileSize);
            }

        }
    }

}

function walk() {

    let gameSound = new Audio('gamesounds/walk.mp3');
    gameSound.play();

}


window.addEventListener("keydown", (e) => {

    switch (e.keyCode) {

        case 37: // left

            if (maze[playerPosition.y][playerPosition.x - 1] === 1) {
                maze[playerPosition.y][playerPosition.x - 1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 1 //players nye position
                drawMaze();
                walk();
            }

            break;

        case 38: // up

            if (maze[playerPosition.y - 1][playerPosition.x] === 1) {
                maze[playerPosition.y - 1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 1 //players nye position
                drawMaze();
                walk();
            }
            break;
        case 39: // right

            if (maze[playerPosition.y][playerPosition.x + 1] === 1) {
                maze[playerPosition.y][playerPosition.x + 1] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 1 //players nye position
                drawMaze();
                walk();
            }
            break;
        case 40: // down

            if (maze[playerPosition.y + 1][playerPosition.x] === 1) {
                maze[playerPosition.y + 1][playerPosition.x] = 2 //players nye position
                maze[playerPosition.y][playerPosition.x] = 1 //players nye position
                drawMaze();
                walk();
            }
            break;

    }

    //left 37

    // up 38

    //right 39

    //down 40
})


window.addEventListener("load", drawMaze);