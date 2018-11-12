class Note {
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.r;
    }
    show() {
        if (sketchCanvas.width > sketchCanvas.height) {
            this.r = 400;
        }
        else {
            this.r = sketchCanvas.width * 0.8;
        }
        fill(this.color);
        arc(this.x, this.y, this.r, this.r, 0, HALF_PI, PIE);
        rotate(PI / 2);
    }
}
