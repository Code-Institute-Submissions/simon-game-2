var note_playable = false;
var game_over = false;
var can_start_new = true;
var memory = [];
var memory_notes = [];
var clicked_notes = [];
var score = 0;
var waitTime = 1500;
var shift_play_x;
var shift_play_y;
var innd;
var play_d;
var dist_mp;

/*Create and draw the "innerCircle"
   Inner Circle, Simon text, new game button,
   rectangle for score showing and "Game Over" rectangle*/
function innerCircle() {
    textAlign(CENTER);
    /*Inner circle changes if window is resized*/
    if (width > height) {
        innd = 250;
        textSize(40);
        play_d = 65;
        shift_play_x = 60;
        shift_play_y = 30;
        strokeWeight(6);
    }
    else if (width < height && width > 0.7 * height) {
        innd = width * 0.45;
        textSize(width * 0.08);
        play_d = width * 0.13;
        shift_play_x = 45;
        shift_play_y = 30;
        strokeWeight(4);
    }
    else if (width < 0.7 * height) {
        innd = width * 0.45;
        textSize(width * 0.07);
        play_d = width * 0.12;
        shift_play_x = 26;
        shift_play_y = 21;
        strokeWeight(2);
    }
    //Inner circle
    fill(24, 24, 24);
    ellipse(center.x, center.y, innd);
    //"SIMON" text
    fill(255, 255, 255);
    text('SIMON', center.x, center.y - 35);
    //"New Game" button
    playBMouseCheck();
    ellipse(center.x + shift_play_x, center.y + shift_play_y, play_d);
    //Rectangle for score showing 
    fill(10, 10, 10);
    rectMode(CENTER);
    rect(center.x - shift_play_x, center.y + shift_play_y, play_d, play_d);
    //"Score" text
    fill(150, 0, 0);
    text(score, center.x - shift_play_x, center.y + 1.3 * shift_play_y);
    //"Game Over" rectangle
    if (game_over) {
        fill(0, 0, 0);
        rect(center.x, center.y, 4 * play_d, 4 * play_d);
        fill(255, 255, 255);
        text('Game Over!', center.x, center.y);
    }
}

function memoryArr() {
    if (game_over) {
        return;
    }
    /*Create new "note" in the memory*/
    memory.push(floor(random(1, 5)));
    /*Check all the created "note" in the memory and play them*/
    for (var i = 0; i < memory.length; i++) {
        can_start_new = false;
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
    /*After memory played, you can click on note again, and you can start a new game*/
    setTimeout(function() {
        note_playable = true;
        can_start_new = true;
    }, waitTime * memory.length);
}

/*Start a new game*/
function newGame() {
    clearThem();
    memoryArr();
}
/*"Game Over" function*/
function gameOver() {
    clearThem();
    game_over = true;
    setTimeout(function() {
        game_over = false;
        showNotes();
    }, 2500);
}
/*Clear every variables before start a new game or game over*/
function clearThem() {
    score = 0;
    memory.length = 0;
    clicked_notes.length = 0;
    memory_notes.length = 0;
    note_playable = false;
    can_start_new = true;
}
/*If the memory and clicked_notes arrays are the same,
add 1 to score and add a new note for memory array
If they are not, then call gameOver() function*/
function countScore() {
    if (equalArrays(memory_notes, clicked_notes)) {
        if (memory_notes.length == clicked_notes.length) {
            note_playable = false;
            can_start_new = false;
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
/*Check if the 2 array are the same*/
function equalArrays(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] !== arr1[i])
            return false;
    }
    return true;
}
/*Check if the mouse on the "New Game" button.
Change the color of it and give back "true" or "false"*/
function playBMouseCheck() {
    dist_mp = dist(mouseX, mouseY, center.x + shift_play_x, center.y + shift_play_y);
    if (dist_mp < play_d / 2 && can_start_new == true) {
        fill(0, 255, 0, 100);
        return true;
    }
    else {
        fill(0, 255, 0);
        return false;
    }
}
