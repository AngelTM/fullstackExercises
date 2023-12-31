class World {
    constructor(width, height, tileSize) {
      this.width = width;
      this.height = height;
      this.tileSize = tileSize;
  
      this.worldmap = new Array(this.width);
      for (let x = 0; x < this.width; x++) {
        this.worldmap[x] = new Array(this.height);
      }
      this.createCellularMap();
    }
    createCellularMap() {
        const map = new Map.Cellular(this.width, this.height, { connected: true });
        map.randomize(0.5);
        const userCallback = (x, y, value) => {
          if (x === 0 || y === 0 || x === this.width  -1 || y === this.height -1) {
            this.worldmap[x][y] = 1;
            return;
          }
          this.worldmap[x][y] = value === 0 ? 1 : 0;
        };
        map.create(userCallback);
        map.connect(userCallback, 1);
      }

    draw(context){
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                 if(this.worldmap[x][y] === 1) this.drawWall(context,x,y);
            }
        }
    }

    drawWall(context,x,y){
        context.fillStyle = '#000';
        context.fillRect(
            x*this.tileSize,
            y*this.tileSize,
            this.tileSize,
            this.tileSize
        )
    }
}
export default World;