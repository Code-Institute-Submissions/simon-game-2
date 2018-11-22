var canvas;
var width;
var height;
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
    masterVolume(0.2);
    /*CREATE CANVAS*/
}

function setup() {
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    height = 500;
    sketchCanvas = createCanvas(width, height);
    sketchCanvas.parent("game-screen");
    background(255, 255, 255, 100);
    /*CREATE SIMON NOTES*/
    note_green = new Note([0, 255, 0], sketchCanvas.width / 2, height / 2, PI, 1.5 * PI, greenNote);
    note_red = new Note([255, 0, 0], sketchCanvas.width / 2, height / 2, 1.5 * PI, 2 * PI, redNote);
    note_blue = new Note([0, 0, 255], sketchCanvas.width / 2, height / 2, 2 * PI, 2.5 * PI, blueNote);
    note_yellow = new Note([255, 255, 0], sketchCanvas.width / 2, height / 2, 2.5 * PI, 3 * PI, yellowNote);

    /*SHOW SIMON NOTES*/
    showNotes();
}

function draw() {
    innerCircle();
}

function mouseClicked() {
    if (playBMouseCheck() && can_start_new == true) {
        newGame();
    }

    checkIfNotesClicked();

    if (note_green.clicked()) {
        clicked_notes.push(1);
        countScore();
    }
    else if (note_red.clicked()) {
        clicked_notes.push(2);
        countScore();
    }
    else if (note_blue.clicked()) {
        clicked_notes.push(3);
        countScore();
    }
    else if (note_yellow.clicked()) {
        clicked_notes.push(4);
        countScore();
    }
}

function showNotes() {
    note_green.show();
    note_red.show();
    note_blue.show();
    note_yellow.show();
}

function checkIfNotesClicked() {
    note_green.clicked();
    note_red.clicked();
    note_blue.clicked();
    note_yellow.clicked();
}
