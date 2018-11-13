class Note {
    constructor(color, x, y, angle1, angle2) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.d;
        this.ang1 = angle1;
        this.ang2 = angle2;
        this.glow_c = this.color;
        this.xp1;
        this.yp1;
        this.xp2;
        this.yp2;
    }
    show() {
        if (sketchCanvas.width > sketchCanvas.height) {
            this.d = 400;
        }
        else {
            this.d = sketchCanvas.width * 0.8;
        }
        fill(this.color);
        arc(this.x, this.y, this.d, this.d, this.ang1, this.ang2, PIE);
    }

    glow() {
        this.calcEdges();
        var d_tm = dist(this.x, this.y, mouseX, mouseY);
        var d_am1 = dist(this.xp1, this.yp1, mouseX, mouseY);
        var d_am2 = dist(this.xp2, this.yp2, mouseX, mouseY);

        if (d_tm < this.d / 2 && d_am1 < this.d / 2 && d_am2 < this.d /2) {
            if (this.glow_c == this.color) {
                this.color = [255, 255, 255];
            }
            else if (this.glow_c !== this.color) {
                this.color = this.glow_c;
            }
            fill(this.color);
            arc(this.x, this.y, this.d, this.d, this.ang1, this.ang2, PIE);
        }
    }
    calcEdges() {
        this.xp1 = this.x + this.d / 2 * cos(this.ang1);
        this.yp1 = this.y + this.d / 2 * sin(this.ang1);
        this.xp2 = this.x + this.d / 2 * cos(this.ang2);
        this.yp2 = this.y + this.d / 2 * sin(this.ang2);
    }
}
