class Note {
    constructor(color, x, y, angle1, angle2) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.r;
        this.ang1 = angle1;
        this.ang2 = angle2;
        this.glow_c = this.color;
    }
    show() {
        if (sketchCanvas.width > sketchCanvas.height) {
            this.r = 400;
        }
        else {
            this.r = sketchCanvas.width * 0.8;
        }
        fill(this.color);
        arc(this.x, this.y, this.r, this.r, this.ang1, this.ang2, PIE);
    }

    glow() {
        var d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.r) {
            if (this.glow_c == this.color) {
                this.color = [255, 255, 255];
            }
            else if (this.glow_c !== this.color) {
                this.color = this.glow_c;
            }
            fill(this.color);
            arc(this.x, this.y, this.r, this.r, this.ang1, this.ang2, PIE);
        }
    }
}
