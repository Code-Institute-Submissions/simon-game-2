var canvas;
var width;
var sketchCanvas;

var note_green = new Note();
var note_red = new Note();
var note_blue = new Note();
var note_yellow = new Note();

function preload() {
    /*LOAD SOUNDS*/
    soundFormats('mp3');
    greenNote = loadSound('assets/sound/green.mp3');
    redNote = loadSound('assets/sound/red.mp3');
    blueNote = loadSound('assets/sound/blue.mp3');
    yellowNote = loadSound('assets/sound/yellow.mp3');
    masterVolume(0.3);
    /*CREATE CANVAS*/
}

function setup() {
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    sketchCanvas = createCanvas(width, 600);
    sketchCanvas.parent("game-screen");
    background(255, 255, 255, 100);
    /*CREATE SIMON NOTES*/
    note_green = new Note([0, 255, 0], sketchCanvas.width / 2, PI, 1.5 * PI, greenNote);
    note_red = new Note([255, 0, 0], sketchCanvas.width / 2, 1.5 * PI, 2 * PI, redNote);
    note_blue = new Note([0, 0, 255], sketchCanvas.width / 2, 2 * PI, 2.5 * PI, blueNote);
    note_yellow = new Note([255, 255, 0], sketchCanvas.width / 2, 2.5 * PI, 3 * PI, yellowNote);
    strokeWeight(10);

    /*SHOW SIMON NOTES*/
    note_green.show();
    note_red.show();
    note_blue.show();
    note_yellow.show();

    var waitTime = 1500;

    memoryArr();
    for (var i = 0; i < memory.length; i++) {
        switch (memory[i]) {
            case 1:
                setTimeout(function() {
                    note_green.play();
                    console.log("Green");
                }, waitTime * i);
                break;
            case 2:
                setTimeout(function() {
                    note_red.play();
                    console.log("Red");
                }, waitTime * i);
                break;
            case 3:
                setTimeout(function() {
                    note_blue.play();
                    console.log("Blue");
                }, waitTime * i);
                break;
            case 4:
                setTimeout(function() {
                    note_yellow.play();
                    console.log("Yellow");
                }, waitTime * i);
                break;
        }
    }
}

function draw() {
    innerCircle();
}

function mouseClicked() {
    note_green.clicked();
    note_red.clicked();
    note_blue.clicked();
    note_yellow.clicked();
}
