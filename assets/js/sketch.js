var canvas;
var width;
var sketchCanvas;

var note_green = new Note([0, 255, 0], 0, 0);
var note_red = new Note([255, 0, 0], 0, 0);
var note_blue = new Note([0, 0, 255], 0, 0);
var note_yellow = new Note([255, 255, 0], 0, 0);

function setup() {
    /*Canvas creating*/
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    sketchCanvas = createCanvas(width, 600);
    sketchCanvas.parent("game-screen");
    background(255, 255, 255, 100);
    /*SIMON NOTES*/
    translate(width / 2, height / 2);
    rotate(PI);
    strokeWeight(10);

    note_green.show();
    note_red.show();
    note_blue.show();
    note_yellow.show();
    innerCircle();
}

function draw() {
    

}

function innerCircle() {
    /*CENTER OF THE GAME*/
    textAlign(CENTER);
    fill(0, 0, 0);
    if (sketchCanvas.width > sketchCanvas.height) {
        ellipse(0, 0, 250);
    }
    else {
        ellipse(0, 0, sketchCanvas.width * 0.45);
    }
    /*The ,,SIMON" text*/
    rotate(PI);
    fill(255, 255, 255);
    if (sketchCanvas.width > sketchCanvas.height) {
        textSize(40);
    }
    else {
        textSize(sketchCanvas.width * 0.08);
    }
    text('SIMON', 0, -30);
}
