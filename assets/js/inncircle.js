var note_playable = false;
var game_over = false;
var memory = [];
var memory_notes = [];
var clicked_notes = [];
var score = 0;
var waitTime = 1500;
var shift_play_x;
var shift_play_y;
var play_d;
var dist_mp;

/*SIMON text and Play Button*/
function innerCircle() {
    textAlign(CENTER);

    fill(24, 24, 24);
    if (sketchCanvas.width > sketchCanvas.height) {
        ellipse(sketchCanvas.width / 2, 300, 250);
        textSize(40);
        play_d = 65;
        shift_play_x = 60;
        shift_play_y = 30;
    }
    else if (sketchCanvas.width < sketchCanvas.height && sketchCanvas.width > 0.7 * sketchCanvas.height) {
        ellipse(sketchCanvas.width / 2, 300, sketchCanvas.width * 0.45);
        textSize(sketchCanvas.width * 0.08);
        play_d = sketchCanvas.width * 0.13;
        shift_play_x = 45;
        shift_play_y = 30;
    }
    else if (sketchCanvas.width < 0.7 * sketchCanvas.height) {
        ellipse(sketchCanvas.width / 2, 300, sketchCanvas.width * 0.45);
        textSize(sketchCanvas.width * 0.07);
        play_d = sketchCanvas.width * 0.12;
        shift_play_x = 26;
        shift_play_y = 21;
    }
    fill(255, 255, 255);
    text('SIMON', width / 2, height / 2 - 35);
    playBMouseCheck();
    ellipse(sketchCanvas.width / 2 + shift_play_x, height / 2 + shift_play_y, play_d);
    fill(10, 10, 10);
    rectMode(CENTER);
    rect(sketchCanvas.width / 2 - shift_play_x, height / 2 + shift_play_y, play_d, play_d);
    fill(150, 0, 0);
    text(score, sketchCanvas.width / 2 - shift_play_x, height / 2 + 1.3 * shift_play_y);
    if (game_over) {
        fill(0, 0, 0);
        rect(sketchCanvas.width / 2, height / 2, 4 * play_d, 4 * play_d);
        fill(255, 255, 255);
        text('Game Over!', width / 2, height / 2);
    }
}

function memoryArr() {
    memory.push(floor(random(1, 5)));
    for (var i = 0; i < memory.length; i++) {
        switch (memory[i]) {
            case 1:
                setTimeout(function() {
                    note_green.play();
                    memory_notes.push(1);
                }, waitTime * i);
                break;
            case 2:
                setTimeout(function() {
                    note_red.play();
                    memory_notes.push(2);
                }, waitTime * i);
                break;
            case 3:
                setTimeout(function() {
                    note_blue.play();
                    memory_notes.push(3);
                }, waitTime * i);
                break;
            case 4:
                setTimeout(function() {
                    note_yellow.play();
                    memory_notes.push(4);
                }, waitTime * i);
                break;
        }
    }
    setTimeout(function() {
        note_playable = true;
    }, waitTime * memory.length);
}


function newGame() {
    clearArrays();
    memoryArr();
}

function clearArrays() {
    score = 0;
    memory.length = 0;
    clicked_notes.length = 0;
    memory_notes.length = 0;
    note_playable = false;
}

function gameOver() {
    clearArrays();
    console.log("Game Over!");
    game_over = true;
    setTimeout(function() {
        game_over = false;
        note_green.show();
        note_red.show();
        note_blue.show();
        note_yellow.show();
    }, 2500);
}

function countScore() {
    if (equalArrays(memory_notes, clicked_notes)) {
        if (memory_notes.length == clicked_notes.length) {
            score++;
            setTimeout(function() {
                memoryArr();
            }, 1500);
        }
    }
    else {
        gameOver();
    }
    return score;
}

function equalArrays(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] !== arr1[i])
            return false;
    }
    return true;
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
