var canvas;
var width;
var sketchCanvas;
var pi = 3.14;

var note_green = new Note([0, 255, 0], 0, 0, pi, 1.5*pi);
var note_red = new Note([255, 0, 0], 0, 0, 1.5 * pi, 2 * pi);
var note_blue = new Note([0, 0, 255], 0, 0, 2 * pi, 2.5 * pi);
var note_yellow = new Note([255, 255, 0], 0, 0, 2.5 * pi, pi);

function setup() {
    translate(width / 2, height / 2);
    /*Canvas creating*/
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    sketchCanvas = createCanvas(width, 600);
    sketchCanvas.parent("game-screen");
    background(255, 255, 255, 100);
    /*SIMON NOTES*/
    translate(width / 2, height / 2);
    strokeWeight(10);

    note_green.show();
    note_red.show();
    note_blue.show();
    note_yellow.show();

}

function draw() {
    translate(width / 2, height / 2);
    innerCircle();
    
}

function mouseClicked() {
    note_green.glow();
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
    fill(255, 255, 255);
    if (sketchCanvas.width > sketchCanvas.height) {
        textSize(40);
    }
    else {
        textSize(sketchCanvas.width * 0.08);
    }
    text('SIMON', 0, -30);
}
