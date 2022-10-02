/** @type Phaser.Types.Core.GameConfig */
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

// Initial tick in a tock function
const time1 = new Date();
// Integer from 1-8 representing minimum (1) and maximum (8) solar irradiance
let globalindex = 0;
// Actual value in mW/m^2
let globalirrad = 0;

//Actual magnetic field strength in Gauss 
let globalMFS = 320911309.2;
// integer from 1-100 representing minimum (1) and maximum (100) mag field strength
let globalmagindex = 1;


var player;
var trash;
var boosters;
var fire;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var solarFlare = false;
var scoreText;
var irradText;
var scoreJump = 10;

//EP's library
var hpText; //HP 
var player_speed; // Sets the player's speed between normal and boost 
var hp = 100;//starts at 100 and decreases 10 when too close to the sun
var danger_zone; // zone where it's too close to the sun
var normal_zone; // zone that isn't too close to the sun
var safe_zone; // zone that can survive fire
var hp_timer = 0;
var warningText;
var gameOverText;
var solarFlareText;
const solarFlareSpeed=50; //how quickly we iterate through the magnetic field data set. 
                        //for faster "waves", increase from 20 to 100 or higher.


var game = new Phaser.Game(config);

/** @this Phaser.Scene */
function preload() {
    // LOADS ALL IMAGES FOR GAME
    //    this.load.image('sky', 'assets/sky.png');
    this.load.image('space', 'assets/space.png');
    this.load.image('sun', 'assets/sun.png');
    this.load.image('sun0', 'assets/sun0.png');
    this.load.image('sun1', 'assets/sun1.png');
    this.load.image('sun2', 'assets/sun2.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('trash', 'assets/space_trash.png');
    this.load.image('booster', 'assets/heart.png');
    this.load.image('fire', 'assets/fire2.png');
    this.load.spritesheet('Astronaut', 'assets/Astronaut.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('astroLeft', 'assets/astronaut_to_left.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('astroRight', 'assets/astronaut_to_right.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('astroUp', 'assets/astronaut_to_up.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('astroDown', 'assets/astronaut_to_down.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('safe_zone','assets/safe_zone.png', { frameWidth: 200, frameHeight: 150});
 
    // EVERYTHING ELSE IN preload() FROM HERE IS PROGRESS BAR STUFF
    // TODO: decide if we want to keep it
    //   Couldn't restructure the project and have it still work with the irradiance 
    //   files, so this is just a sneaky joke at this point...
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var progressWidth = this.cameras.main.width;
    var progressHeight = this.cameras.main.height;
    var loadingText = this.make.text({
        x: progressWidth / 2,
        y: progressHeight / 2 - 50,
        text: 'The sun is warming up...',
        style: {
            font: '20px monospace',
            fill: '#ffffff'
        }
    });

    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
        x: progressWidth / 2,
        y: progressHeight / 2 - 5 - 9,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });

    this.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('complete', function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
    });
}

/** @this Phaser.Scene */
function create() {

    // CREATE DANGER AND NORMAL ZONES
    // do not omove from top of this function
    danger_zone = this.physics.add.sprite(0, 0, 'danger_zone');
    danger_zone.body.setSize(1000, 250, false); //1600,400
    normal_zone = this.physics.add.sprite(0, 250, 'normal_zone');
    normal_zone.body.setSize(1000, 700, false);

    // GENERAL GAME CREATE
    //  A simple background for our game 
    this.add.image(config.height / 2 + 100, config.width / 2 - 100, 'space');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 630, "ground").setScale(2).refreshBody();

    //Sun Animation attempt
    this.anims.create({
        key: 'sunny',
        frames: [
            { key: 'sun0' },
            { key: 'sun1' },
            { key: 'sun2' },
        ],
        frameRate: 30,
        repeat: Infinity
    });

    //  A simple foreground for our game
    // @ts-ignore
    //this.add.image(config.height / 2 + 100, config.width / 2 - 100, "sunny");
    this.add.sprite(config.height / 2 + 100, config.width / 2 - 100, 'sun0').play('sunny');


    //PLAYER CREATE
    // The player and its settings
    player = this.physics.add.sprite(100, 450, "Astronaut");
    player.setCollideWorldBounds(true);
    player.setSize(30, 30);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({ key: 'left', frames: 'astroLeft' });
    this.anims.create({ key: 'right', frames: 'astroRight' });
    this.anims.create({ key: 'up', frames: 'astroUp' });
    this.anims.create({ key: 'down', frames: 'astroDown' });
    // Possibly redundant
    this.anims.create({ key: 'turn', frames: 'Astronaut' });

    //  Collide the player with the platforms
    this.physics.add.collider(player, platforms);



    //  INPUT EVENTS
    cursors = this.input.keyboard.createCursorKeys();

    //  CREATE TRASH
    trash = this.physics.add.group({
        key: "trash",
        repeat: 0,
        setXY: {
            x: Phaser.Math.RND.between(0, 800),
            y: 0,
        },
    });

    //  CREATE BOOSTER
    boosters = this.physics.add.group({
        key: "booster",
        repeat: 0,
        setXY: {
            x: Phaser.Math.RND.between(0, 800),
            y: Phaser.Math.RND.between(100, 200),
        },
    });

    // CREATE safe_zone
    safe_zone = this.physics.add.group()

    // CREATE FIRE
    fire = this.physics.add.group();
    setTimeout(makeFires, 2000);

    //  CREATE SCREEN TEXT
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    scoreText.setStyle({ color: '#42f560' });

    irradText = this.add.text(16, 32, 'irradiance (mW/m^2): ' + globalirrad, { fontSize: '32px' });
    irradText.setStyle({ color: '#42f560' });

    magfieldText = this.add.text(16, 48, 'Mag Field Strength (Gauss): ' + globalMFS, { fontSize: '32px' });
    magfieldText.setStyle({ color: '#42f560' });

    warningText = this.add.text(0, 180, 'WARNING TOO CLOSE TO THE SUN | WARNING TOO CLOSE TO THE SUN | WARNING TOO CLOSE TO THE SUN', { fontSize: '40px', fill: '#000' });
    warningText.setStyle({ color: '#42f560' });
    warningText.setVisible(false);

    hpText = this.add.text(16, 64, 'hp: ', { fontSize: '32px', fill: '#000' });
    hpText.setStyle({ color: '#42f560' });

    solarFlareText = this.add.text(0, 160, 'WARNING SOLAR FLARE, GET TO SHELTER | WARNING SOLAR FLARE, GET TO SHELTER | WARNING SOLAR FLARE, GET TO SHELTER', { fontSize: '40px', fill: '#000' });
    solarFlareText.setStyle({ color: '#42f560' });
    solarFlareText.setVisible(false);

    gameOverText = this.add.text(5, config.height / 2, 'Game Over', { fontSize: '20px', fill: '#FFF' });
    gameOverText.visible = false;


    // ADD DANGER AND SAFE ZONES
    // do not move from here in function
    this.physics.add.overlap(player, danger_zone, in_danger_zone, null, this); //add to see if i can make hp decrease when player touches it
    this.physics.add.overlap(player, normal_zone, in_normal_zone, null, this);

    // SOLAR FLARE THINGS
    console.log(globalmagindex)
    if (globalmagindex > 10) {
        solarFlare = true;
        solarFlareText.setVisible(true);
        setInterval(makeWallOfFires, 1000);
        this.physics.add.overlap(safe_zone, fire, destroyFire, undefined, this);
        make_safe_zone();
    } else {
        solarFlare = false;
        solarFlareText.setVisible(false);
        destroy_safe_zone();
    }


    //  CHECK COLLISIONS AND OVERLAPS
    // do not move from higer in function

    this.physics.add.overlap(player, trash, collectTrash, undefined, this);
    this.physics.add.overlap(player, boosters, collectBooster, undefined, this);
    this.physics.add.collider(player, fire, hitFire, undefined, this);
    this.physics.add.collider(platforms, trash, resetTrash, undefined, this);
    this.physics.add.collider(platforms, boosters, resetBooster, undefined, this);
    this.physics.add.overlap(platforms, fire, destroyFire, undefined, this);

}

/** @this Phaser.Scene */
function update() {
    // IF GAME OVER DON'T UPDATE
    if (gameOver) {
        return;
        // OTHERWISE
    } else {

        // GET IRRADIANCE & MAG FIELD LEVEL
        let time2 = new Date();
        let timeindex = Math.round((time2.getTime() - time1.getTime()) / 1000);
        // @ts-ignore
        let package = irradiance(timeindex);
        globalindex = package.globalindex;
        globalirrad = package.irradlevel;
        irradText.setText('irradiance (mW/m^2): ' + globalirrad);
        if (globalindex > 6) { irradText.setStyle({ color: '#f54242' }); }
        
        let package2 = magneticfs(timeindex,solarFlareSpeed);
        globalmagindex = package2.globalmagindex;
        globalMFS = package2.globalMFS;
        magfieldText.setText('magnetic field strength (Gauss): '+globalMFS);
        if (globalmagindex > 100) { magfieldText.setStyle({ color: '#f54242' }); }



        // CHECK CURSORS AND UPDATE ACCORDINGLY
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
            player.anims.play('up', true);
        } else if (cursors.down.isDown) {
            player.setVelocityY(player_speed);
            player.anims.play('down', true);
        } else {
            player.setVelocityY(-5); //EP: maintain current y

        }
        if (cursors.space.isDown) { //EP: Enables Booster
            player_speed = 800;
        }
        else { player_speed = 200; }
    }

    // DANGER AND SAFE ZONE THINGS
    danger_zone.setVelocityY(-5); //EP: keeps the zone afloat
    normal_zone.setVelocityY(-5); //EP: keeps the zone afloat
    safe_zone.setVelocityY(-5); //EP: keeps the zone afloat
    if (hp <= -0.0001) { //EP: end game if hp = 0
        game_over(this);
    }


}

// safe_zone functions
/**
 * @this Phaser.Scene
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} player
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} safe_zone
 * @type ArcadePhysicsCallback
 */
function make_safe_zone(){
    if (gameOver == false) {
        safe_zone.create(Phaser.Math.RND.between(100, 600),Phaser.Math.RND.between(400, 600),'safe_zone');
    }
}

function destroy_safe_zone() {
    safe_zone.clear(true,true);
}

// TRASH FUNCTIONS
/**
 * @this Phaser.Scene
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} player
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} trashPiece
 * @type ArcadePhysicsCallback
 */
function collectTrash(player, trashPiece) { 
    //destroy_safe_zone(); // !!! for debugging. Delete for final product.
    trashPiece.disableBody(true, true);

    //  Add and update the score
    score += scoreJump;
    scoreText.setText('score: ' + score);

    var newTrash = trash.create(Phaser.Math.RND.between(0, 800), 16, 'trash');
    // trashPiece.setCollideWorldBounds(true);
    newTrash.allowGravity = true;
}

/**
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} platforms
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} trash
 * @this Phaser.Scene
 * @type ArcadePhysicsCallback
 */
function resetTrash(platforms, trash) {
    trash.setPosition(Phaser.Math.RND.between(0, 800), 0);
}

// FIRE FUNCTIONS
function makeFires() {
    if (gameOver == false) {
        console.log(globalindex);
        for (var i = 0; i < globalindex; i++) {
            console.log(globalindex);
            var x = Phaser.Math.RND.between(0, 800);
            fire.create(x, 0, 'fire');
        }
        setTimeout(makeFires, 2000);
    }
    else { player_speed = 200; }
}

function makeWallOfFires() {
    var x = 0;
    for (var i = 1; i < 29; i++) {
        fire.create(x, 0, 'fire');
        x = x + 30;
    }
}

/**
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} player
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} fire
 * @this Phaser.Scene
 * @type ArcadePhysicsCallback
 */
function hitFire(player, fire) {
    display_hp(hp);

    if(!(this.physics.overlap(safe_zone,player))){
        hp=0;
        game_over(this);
        this.physics.pause();
        player.setTint(0xeb6c0c);
        player.anims.play('turn');
        gameOverText.visible = true;
        game_over(this)
    }

}

function destroyFire(player, fire) {
    fire.setActive(false).setVisible(false);
    fire.destroy();
}
 
// DANGER AND SAFE ZONE FUNCTIONS
function display_hp(hp) {
    hpText.setText('hp: ' + Math.floor(hp));
}

function in_normal_zone(player) {
    scoreJump = 10;
    warningText.setVisible(false);
    display_hp(hp);
}

// Adjusts's the player's HP if too close to the sun
function in_danger_zone(player) {
    scoreJump = 30;

    if (hp_timer % 30 == 0) { //1
        warningText.setVisible(!warningText.visible);
    }

    if (hp_timer == 60) { //1
        hp -= 10; //2
        hp_timer = 0;
    }
    hp_timer += 1;
    display_hp(hp); //3
    //1 once every 1 second
    //2 chance the hp by -1
    //3 display the updated hp
}


// BOOSTER FUNCTIONS
function collectBooster(player, booster) {
    booster.disableBody(true, true);
    //make_safe_zone(); // !!! for debugging. Delete for final product.
    //  Add and update the score
    if (hp < 100) {
        hp += 10;
    }

    hpText.setText('hp: ' + hp);

    var newBooster = boosters.create(Phaser.Math.RND.between(0, 800), Phaser.Math.RND.between(100, 200), 'booster');
    // booster.setCollideWorldBounds(true);
    newBooster.allowGravity = true;
}

function resetBooster(platforms, booster) {
    booster.setPosition(Phaser.Math.RND.between(0, 800), Phaser.Math.RND.between(100, 200));
}

// OTHER GAME FUNCTIONS
function game_over(game) {
    game.physics.pause();
    player.setTint(0xeb6c0c);
    player.anims.play('turn');

    displayGameOver();

    gameOver = true;

}

function displayGameOver() {
    if (hp <= 0) {
        gameOverText.setText("Game Over: The sun defeated you! \n score: " + score + "\n hp: " + hp);
    }
    else if (score > 500) {
        gameOverText.setText("Game Over: You've cleaned up SO MUCH space trash! \n score: " + score + "\n hp: " + hp);
    } else if (score > 250) {
        gameOverText.setText("Game Over: You've cleaned up a lot of space trash! \n score: " + score + "\n hp: " + hp);
    } else if (score > 0) {
        gameOverText.setText("Game Over: You've cleaned up some space trash! \n score: " + score + "\n hp: " + hp);
    }
    gameOverText.visible = true;
}