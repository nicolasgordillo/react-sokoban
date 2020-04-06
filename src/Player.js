class Player {
    constructor (x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    move (dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    draw (context) {
        context.fillStyle = '#000';
        context.textBaseline = 'hanging';
        context.font = '16px Helvetica';
        context.fillText('@', this.x * this.size, this.y * this.size);
    }
}

export default Player;