var canvas;
var width;
var height;
var sketchCanvas;
var center;

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
}

function setup() {
    /*CREATE CANVAS*/
    canvas = document.getElementById('game-screen');
    width = canvas.offsetWidth;
    height = 450;
    sketchCanvas = createCanvas(width, height);
    sketchCanvas.parent("game-screen");
    center = createVector(width / 2, height / 2);
    background(255, 255, 255, 100);
    /*CREATE SIMON NOTES*/
    note_green = new Note([0, 255, 0], center.x, center.y, PI, 1.5 * PI, greenNote);
    note_red = new Note([255, 0, 0], center.x, center.y, 1.5 * PI, 2 * PI, redNote);
    note_blue = new Note([0, 0, 255], center.x, center.y, 2 * PI, 2.5 * PI, blueNote);
    note_yellow = new Note([255, 255, 0], center.x, center.y, 2.5 * PI, 3 * PI, yellowNote);

    /*SHOW SIMON NOTES*/
    showNotes();
}

function draw() {
    /*Draw Inner circle*/
    innerCircle();
}

function mouseClicked() {
    /*Check if mouse on "new game" button and if we can start a new game*/
    if (playBMouseCheck() && can_start_new == true) {
        newGame();
    }
    /*If note is clicked push it to "clicked_notes" array,
    and check if it is the same as in the "memory_notes" array,
    and count the score*/
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
    /*Show all of the notes*/
    note_green.show();
    note_red.show();
    note_blue.show();
    note_yellow.show();
}

function checkIfNotesClicked() {
    /*Check if any of the notes has been clicked*/
    note_green.clicked();
    note_red.clicked();
    note_blue.clicked();
    note_yellow.clicked();
}
