
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
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

var game = new Phaser.Game(config);

function updateIrradiance(){
    
    fetch('irradiance.csv')
    .then(response => console.log(response));
}

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('space', 'assets/space.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('fire', 'assets/fire.png');
    this.load.spritesheet('Astronaut', 'assets/Astronaut.png', { frameWidth: 48, frameHeight: 48 });
}

function create ()
{
    //  A simple background for our game
    this.add.image(400, 300, 'space');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // The player and its settings


    player = this.physics.add.sprite(100, 450, 'Astronaut');


//_________________________________________________________________________________
    // EDITED BY EP. TO BE EITHER REENABLED OR DELETED.
    //player = this.physics.add.sprite(100, 450, 'dude');
    //player.setAllowGravity(false);
    //player.setGravity(0);
    //.setAllowGravity(false);

    //  Player physics properties. Give the little guy a slight bounce.
    //player.setBounce(0.2);
    //player.setCollideWorldBounds(true);

// _________________________________________________________________________________

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Astronaut'),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'Astronaut'} ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('Astronaut'),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    fire = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(fire, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, fire, hitFire, null, this);
}


function update ()
{
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown) // EP: when keyboard up is pressed, move up
    {
        player.setVelocityY(-160);
    }
    if (cursors.down.isDown) // EP: hen keyboard down is pressed, move up
    {
        player.setVelocityY(160);
    }
    if (cursors.space.isDown) // EP: hen keyboard down is pressed, move up
    {
        player.setVelocityY(-160);
    }
}

function collectStar (player, star)
{
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var fire = fire.create(x, 16, 'fire');
        fire.setBounce(1);
        fire.setCollideWorldBounds(true);
        fire.setVelocity(Phaser.Math.Between(-200, 200), 20);
        fire.allowGravity = false;

    }
}

function hitFire (player, fire)
{
    //this.physics.pause();

    player.setTint(ed8218);

    player.anims.play('turn');

    //gameOver = true;
    //TO DO: we want this to decrease pts
}
