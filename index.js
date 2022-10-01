
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var fire;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var irradText;
var player_speed // Sets the player's speed between normal and boost

var max = 100
var min = 0

var game = new Phaser.Game(config);

function updateIrradiance() {

    fetch('irradiance.csv')
        .then(response => console.log(response));
}

function preload() {
//    this.load.image('sky', 'assets/sky.png');
    this.load.image('space', 'assets/space.png');
    this.load.image('sun', 'assets/sun.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('fire', 'assets/fire.png');
    this.load.spritesheet('Astronaut', 'assets/Astronaut.png', { frameWidth: 48, frameHeight: 48 });
}

function create() {
    //  A simple background for our game
    this.add.image(config.height/2, config.width/2, 'space');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 630, 'ground').setScale(2).refreshBody();


    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'Astronaut');
    player.setCollideWorldBounds(true);

    //_________________________________________________________________________________
    // EDITED BY EP. TO BE EITHER REENABLED OR DELETED.
    //player = this.physics.add.sprite(100, 450, 'dude');
    //player.setAllowGravity(false);
    //player.setGravity(0);
    //.setAllowGravity(false);

    //  Player physics properties. Give the little guy a slight bounce.
    //player.setBounce(0.2);

    //  Now let's create some ledges
    //platforms.create(600, 400, 'ground');
    //platforms.create(50, 250, 'ground');
    //platforms.create(750, 220, 'ground');
    // _________________________________________________________________________________

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: 'Astronaut'
    });

    // Possibly redundant
    this.anims.create({
        key: 'turn',
        frames: 'Astronaut'

    });

    this.anims.create({
        key: 'right',
        frames: 'Astronaut'
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 0,
        setXY:
        {
            x: Phaser.Math.RND.between(0, 800),
            y: 0
        },
    });

    // TODO: Megan delete
    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    // TODO: Christine to fix
    fire = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    scoreText.setStyle({ color: '#42f560' });

    irradText = this.add.text(16,32,'irradiance: 0',{ fontSize: '32px',fill: '#000'});
    irradText.setStyle({ color: '#42f560' });

    

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);

    // TODO: Christine to delete
    this.physics.add.collider(fire, platforms);

    
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.collider(player, fire, hitFire, null, this);

    //  A simple foreground for our game
    this.add.image(config.height/2+100, config.width/2-100, 'sun');

    
}


function update() {
    if (gameOver) {
        return;
    }

    if (cursors.left.isDown) {
        player.setVelocityX(-player_speed);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(player_speed);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }



    if (cursors.up.isDown) { // EP: Enables float
        player.setVelocityY(-player_speed);
    } else if (cursors.down.isDown) {
        player.setVelocityY(player_speed);
    } else {
        player.setVelocityY(-5) //EP: maintain current y

    }
    if (cursors.space.isDown) { //EP: Enables Booster
        player_speed = 800
    }
    else { player_speed = 200 }
}

function collectStar(player, star) {
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    var star = stars.create(Phaser.Math.RND.between(0, 800), 16, 'star');
    star.setCollideWorldBounds(true);
    star.allowGravity = true;

    //_________________________________________________________________________________
    //Commented out at the CA's request.
    //var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    //var fire = fire.create(x, 16, 'fire');
    //fire.setBounce(1);
    //fire.setCollideWorldBounds(true);
    //fire.setVelocity(Phaser.Math.Between(-200, 200), 20);
    //fire.allowGravity = false;
    //_________________________________________________________________________________
}

function hitFire(player, fire) {
    //this.physics.pause();

    player.setTint(ed8218);
    player.anims.play('turn');

    //gameOver = true;
    //TO DO: we want this to decrease pts
}