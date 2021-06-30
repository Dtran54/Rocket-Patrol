let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// Rocket Patrol Mods, 6/30/2021, 12 hours in

// 60 points for changing the theme and aesthetic, 20 points for a new ship type with a smaller hitbox, more speed, and more points.