var canvas;
var width;
var sketchCanvas;

var note_green = new Note([0, 255, 0], 0, 0);
var note_red = new Note([255, 0, 0], 0, 0);
var note_blue = new Note([0, 0, 255], 0, 0);
var note_yellow = new Note([255, 255, 0], 0, 0);

function setup() {

}

function draw() {
    /*Canvas creating*/
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    sketchCanvas = createCanvas(width, 500);
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
}
