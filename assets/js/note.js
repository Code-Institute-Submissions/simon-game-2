/*Create a "Note" class for drawing 4 of them*/
class Note {
    constructor(gotColor, x, y, angle1, angle2, sound) {
        this.noteColor = gotColor;
        this.temp_color = gotColor;
        this.x = x;
        this.y = y;
        this.diameter;
        this.ang1 = angle1;
        this.ang2 = angle2;
        this.edge1_x;
        this.edge1_y;
        this.edge2_x;
        this.edge2_y;
        this.noteSound = sound;
    }
    show() {
        /*The note's size changes width the window if resized*/
        if (width > height) {
            this.changeDiameter(400, 6);
        }
        else if (width < height && width > 0.7 * height) {
            this.changeDiameter(width * 0.8, 4);
        }
        else {
            this.changeDiameter(width * 0.7, 2);
        }

        fill(this.noteColor);
        arc(this.x, this.y, this.diameter, this.diameter, this.ang1, this.ang2, PIE);
    }
    clicked() {
        this.calcEdges();
        var sim_rad;

        /* Calculate the radius of the circle(note)*/
        if (width > height) {
            sim_rad = 250;
        }
        else {
            sim_rad = width * 0.45;
        }
        /* Calculate the distances between mouse, edges and center*/
        var center_mouse_dist = dist(this.x, this.y, mouseX, mouseY);
        var edge1_mouse_dist = dist(this.edge1_x, this.edge1_y, mouseX, mouseY);
        var center_edg1_dist = dist(this.x, this.y, this.edge1_x, this.edge1_y);

        var edge2_mouse_dist = dist(this.edge2_x, this.edge2_y, mouseX, mouseY);
        var center_edge2_dist = dist(this.x, this.y, this.edge2_x, this.edge2_y);
        /*Calculate the angle of mouse's position to note's edges*/
        var note_angle1 = (center_edg1_dist * center_edg1_dist + center_mouse_dist * center_mouse_dist - edge1_mouse_dist * edge1_mouse_dist) / (2 * center_edg1_dist * center_mouse_dist);
        var note_angle2 = (center_edge2_dist * center_edge2_dist + center_mouse_dist * center_mouse_dist - edge2_mouse_dist * edge2_mouse_dist) / (2 * center_edge2_dist * center_mouse_dist);

        var mouse_degree_1 = degrees(acos(note_angle1) + this.ang1);
        var mouse_degree_2 = degrees(acos(note_angle2) + this.ang1);

        /*Check if mouse is on note*/
        if (center_mouse_dist < this.diameter / 2 &&
            center_mouse_dist > sim_rad / 2 &&
            mouse_degree_1 > degrees(this.ang1) &&
            mouse_degree_1 < degrees(this.ang2) &&
            mouse_degree_2 > degrees(this.ang1) &&
            mouse_degree_2 < degrees(this.ang2) &&
            (note_playable)) {
            this.play();
            return true;
        }
    }
    play() {
        /*Change note's color, and play it's sound, then change color back*/
        var self = this;
        this.noteSound.play();
        this.noteColor = [0, 0, 0, 100];
        this.show();
        setTimeout(function() {
            self.colorBack();
        }, 750);

    }
    calcEdges() {
        /*Calculate the note's edges*/
        this.edge1_x = this.x + this.diameter / 2 * cos(this.ang1);
        this.edge1_y = this.y + this.diameter / 2 * sin(this.ang1);
        this.edge2_x = this.x + this.diameter / 2 * cos(this.ang2);
        this.edge2_y = this.y + this.diameter / 2 * sin(this.ang2);
    }
    colorBack() {
        /*Change the color back to their original color*/
        this.noteColor = this.temp_color;
        this.show();
    }
    changeDiameter(diameter, weight) {
        /*Change the diameter of the Note*/
        this.diameter = diameter;
        strokeWeight(weight);
    }
}
