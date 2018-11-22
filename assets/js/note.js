class Note {
    constructor(gotColor, x, y, angle1, angle2, sound) {
        this.noteColor = gotColor;
        this.temp_color = gotColor;
        this.x = x;
        this.y = y;
        this.d;
        this.ang1 = angle1;
        this.ang2 = angle2;
        this.xp1;
        this.yp1;
        this.xp2;
        this.yp2;
        this.NoteSound = sound;
        this.played = false;
    }
    show() {
        /*The note's size changes width the window if resized*/
        if (sketchCanvas.width > sketchCanvas.height) {
            this.d = 400;
            strokeWeight(8);
        }
        else {
            this.d = sketchCanvas.width * 0.8;
            strokeWeight(4);
        }
        
        fill(this.noteColor);
        arc(this.x, this.y, this.d, this.d, this.ang1, this.ang2, PIE);
    }
    clicked() {
        this.calcEdges();
        var sim_rad;

        /* Calculate the radius of the circle(note)*/
        if (sketchCanvas.width > sketchCanvas.height) {
            sim_rad = 250;
        }
        else {
            sim_rad = sketchCanvas.width * 0.45;
        }
        /* Calculate the distances of mouse, edges, center*/
        var d_tm = dist(this.x, this.y, mouseX, mouseY);
        var b1 = dist(this.xp1, this.yp1, mouseX, mouseY);
        var c1 = dist(this.x, this.y, this.xp1, this.yp1);

        var b2 = dist(this.xp2, this.yp2, mouseX, mouseY);
        var c2 = dist(this.x, this.y, this.xp2, this.yp2);
        /*Calculate the angle of mouse's position to note's edges*/
        var my_angle1 = (c1 * c1 + d_tm * d_tm - b1 * b1) / (2 * c1 * d_tm);
        var my_angle2 = (c2 * c2 + d_tm * d_tm - b2 * b2) / (2 * c2 * d_tm);

        var mouse_d1 = degrees(acos(my_angle1) + this.ang1);
        var mouse_d2 = degrees(acos(my_angle2) + this.ang1);

        /*Check if mouse is on note*/
        if (d_tm < this.d / 2 &&
            d_tm > sim_rad / 2 &&
            mouse_d1 > degrees(this.ang1) &&
            mouse_d1 < degrees(this.ang2) &&
            mouse_d2 > degrees(this.ang1) &&
            mouse_d2 < degrees(this.ang2) &&
            (note_playable)) {
            this.play();
            return true;
        }
    }
    play() {
        var self = this;
        this.played = true;
        this.NoteSound.play();
        this.noteColor = [0, 0, 0, 100];
        this.show();
        setTimeout(function() {
            self.colorBack();
        }, 750);

    }
    calcEdges() {
        /*Calculate the note's edges*/
        this.xp1 = this.x + this.d / 2 * cos(this.ang1);
        this.yp1 = this.y + this.d / 2 * sin(this.ang1);
        this.xp2 = this.x + this.d / 2 * cos(this.ang2);
        this.yp2 = this.y + this.d / 2 * sin(this.ang2);
    }
    colorBack() {
        /*Change the color back to their original color*/
        this.noteColor = this.temp_color;
        this.show();
    }
}
