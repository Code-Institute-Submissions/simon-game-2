var memory = [];
var notesInM = 5;
var shift_play_x;
var shift_play_y;
var play_d;
var dist_mp;

function memoryArr() {
    for (var i = 0; i < notesInM; i++) {
        memory[i] = floor(random(1, 5));
    }
}
/*SIMON text and Play Button*/
function innerCircle() {
    textAlign(CENTER);

    fill(0, 0, 0);
    if (sketchCanvas.width > sketchCanvas.height) {
        ellipse(sketchCanvas.width / 2, 300, 250);
        textSize(40);
        play_d = 65;
        shift_play_x = 60;
        shift_play_y = 30;
    }
    else {
        ellipse(sketchCanvas.width / 2, 300, sketchCanvas.width * 0.45);
        textSize(sketchCanvas.width * 0.08);
        play_d = sketchCanvas.width * 0.13;
        shift_play_x = 25;
        shift_play_y = 20;
    }
    fill(255, 255, 255);
    text('SIMON', width / 2, height / 2 - 30);
    playBMouseCheck();
    ellipse(sketchCanvas.width / 2 + shift_play_x, height / 2 + shift_play_y, play_d);
}

function playBMouseCheck() {
    dist_mp = dist(mouseX, mouseY, sketchCanvas.width / 2 + shift_play_x, height / 2 + shift_play_y);
    if (dist_mp < play_d / 2) {
        fill(0, 255, 0, 100);
        return true;
    }
    else {
        fill(0, 255, 0);
        return false;
    }
}
