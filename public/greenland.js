var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update});

function preload(){
  game.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
  game.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
  game.load.spritesheet('player', 'assets/sprites/spaceman.png', 16, 16);
}

var map, layer, cursors, player;

function create(){
  map = game.add.tilemap('map, 16, 16');
  map.addTilesetImage('tiles');
  layer = map.createLayer(0);
 }

 function update(){

 }
