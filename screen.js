const screenCanvas = document.getElementById("screenCanvas");
const ctx = screenCanvas.getContext("2d");

function clearScreen() {
    ctx.beginPath();
    ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
}

function startScreen() {
    window.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            clearScreen();
            return startGame()
        }
    });
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gray";
    ctx.rect(100, 100, 100, 200);
    ctx.fill();
    ctx.stroke();

    //MAKE UPDATE AND RENDER LOOPS BEFORE GETTING TOO FAR.

    //ADD BUTTONS FOR THE START SCREEN THROUGH OTHER HTML ELEMENTS IN ABSOLUTE POSITIONS INSTEAD OF GETTING A MOUSE EVENT ON THE CANVAS.
    //THIS MAY ALSO LOWER CANVAS RENDER AND UPDATE LOADS.
}

function startGame() {

    class Player {

        constructor(x, y) {
            this.x = x;
            this.y = y;
            //this.width;
            //this.height;
            //this.accel;
            //this.speed;
        }

        //HAVE DIFFERENT OBJECT LISTS FOR EVERY DIRECTION AND IT'S CORRESPONDING SPRITES AND ANIMATIONS. (i.e => rightSprites{idle: rightIdle.webp, walking: rightwalking.webp, etc...}).
        //THIS WAY YOU CAN REFERENCE THE SAME ANIMATION NAME NO MATTER THE PLAYER'S ORIENTATION. (ex: idle, walking, firing, etc...).

        //CHECK SPACE SHOOTER FILES FOR MOVEMENT.

        //ALL HITBOXES SHOULD BE RECTS/SQUARES. HAVE DIFFERENT HITBOXES FOR DIFFERENT ACTIONS. (i.e => SMALL RECT AND PLAYER'S FEET FOR WALL COLLISION'S PERSPECTIVE, BUT TALLER RECT FOR HURTBOX).

        //TEST AND CREATE AND UPDATE AND RENDER LOOP BEFORE FINALISING EVERYTHING.
        
    }
    /*ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "gray";
    ctx.rect(300, 200, 400, 200);
    ctx.fill();
    ctx.stroke();*/
}

startScreen();

/*
ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.fillStyle = "gray";
ctx.rect(100, 100, 100, 200);
ctx.fill();
ctx.stroke();
*/