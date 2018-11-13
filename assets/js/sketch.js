var canvas;
var width;
var sketchCanvas;
var pi = 3.14;

var note_green = new Note();
var note_red = new Note();
var note_blue = new Note();
var note_yellow = new Note();

function setup() {
    /*Canvas creating*/
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    sketchCanvas = createCanvas(width, 600);
    sketchCanvas.parent("game-screen");
    background(255, 255, 255, 100);
    /*SIMON NOTES*/
    note_green = new Note([0, 255, 0], sketchCanvas.width / 2, 300, PI, 1.5 * PI);
    note_red = new Note([255, 0, 0], sketchCanvas.width / 2, 300, 1.5 * PI, 2 * PI);
    note_blue = new Note([0, 0, 255], sketchCanvas.width / 2, 300, 2 * PI, 2.5 * PI);
    note_yellow = new Note([255, 255, 0], sketchCanvas.width / 2, 300, 2.5 * PI, PI);
    strokeWeight(10);

    note_green.show();
    note_red.show();
    note_blue.show();
    note_yellow.show();

}

function draw() {
    /*innerCircle();*/
}

function mouseClicked() {
    note_green.glow();
    note_red.glow();
    note_blue.glow();
    note_yellow.glow();
}

function innerCircle() {
    /*CENTER OF THE GAME*/
    textAlign(CENTER);
    fill(0, 0, 0);
    if (sketchCanvas.width > sketchCanvas.height) {
        ellipse(sketchCanvas.width / 2, 300, 250);
    }
    else {
        ellipse(sketchCanvas.width / 2, 300, sketchCanvas.width * 0.45);
    }
    /*The ,,SIMON" text*/
    fill(255, 255, 255);
    if (sketchCanvas.width > sketchCanvas.height) {
        textSize(40);
    }
    else {
        textSize(sketchCanvas.width * 0.08);
    }
    text('SIMON', width / 2, height / 2 - 30);
}
