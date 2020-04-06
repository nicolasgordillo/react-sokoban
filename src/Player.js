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
        context.font = `${this.size}px Helvetica`;
        context.fillText('@', this.x * this.size, this.y * this.size);
    }

    copyPlayer () {
        let newPlayer = new Player();
        Object.assign(newPlayer, this);

        return newPlayer;
    }
}

export default Player;