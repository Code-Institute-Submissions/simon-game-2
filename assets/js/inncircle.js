var memory = [];
var notesInM = 5;

function memoryArr() {
    for (var i = 0; i < notesInM; i++) {
        memory[i] = floor(random(1, 5));
    }
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
