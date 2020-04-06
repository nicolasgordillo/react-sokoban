import Player from './Player';

/* 0 represents an empty space, while 1 represents a wall */
class World {
    constructor (width, height, tilesize) {
        this.width = width;
        this.height = height;
        this.tilesize = tilesize;
        this.entities = [new Player(0, 0, tilesize)];

        this.worldmap = new Array(this.width);
        for (let x = 0; x < this.width; x++) {
            this.worldmap[x] = new Array(this.height);
        }

        this.createRandomMap();
        this.moveToSpace(this.player);
    }

    createRandomMap = () => {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.worldmap[x][y] = Math.round(Math.random());
            }
        }
    }

    draw (context) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                if (this.worldmap[x][y] === 1) {
                    this.drawWall(context, x, y);
                }
            }
        }

        this.entities.forEach(entity => {
            entity.draw(context);
        });
    }

    drawWall (context, x, y) {
        context.fillStyle = '#c4302b';
        context.fillRect(x * this.tilesize, y * this.tilesize, this.tilesize, this.tilesize);
    }

    get player() {
        return this.entities[0];
    }

    movePlayer(dx, dy) {
        let tempPlayer = this.player.copyPlayer();
        tempPlayer.move(dx, dy);
        if (this.isWall(tempPlayer.x, tempPlayer.y)) {
            console.log(`Wall encountered at ${tempPlayer.x}:${tempPlayer.y}`);
            return;
        }
        this.player.move(dx, dy);
    }

    moveToSpace (entity) {
        for (let x = entity.x; x < this.width; x++) {
            for (let y = entity.y; x < this.height; y++) {
                if (!this.isWall(x, y)) {
                    entity.x = x;
                    entity.y = y;
                    return;
                }
            }    
        }
    }

    isWall (x, y) {
        return this.worldmap[x] === undefined || this.worldmap[x][y] === undefined || this.worldmap[x][y] === 1;
    }
}

export default World;