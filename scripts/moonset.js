const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    parent: "moonset-div",
    input: {
        gamepad: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        extend: {
            player: null,
            healthpoints: null,
            reticle: null,
            moveKeys: null,
            playerBullets: null,
            enemyBullets: null,
            time: 0,
        }
    }
};

const game = new Phaser.Game(config);



var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize: function Bullet(scene) {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'playerBullet');
        this.speed = 1;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.setSize(12, 12, true);
    },


    fire: function(shooter) {
        if (shooter == player) {
            this.setPosition(shooter.x + 50, shooter.y);
            this.angle = 90;
            this.xSpeed = this.speed;
        } else if (shooter == player2) {
            this.setPosition(shooter.x - 50, shooter.y);

            this.angle = -90;
            this.xSpeed = -this.speed;
        }
        this.born = 0;

    },

    // Updates the position of the bullet each cycle
    update: function(time, delta) {
        this.x += this.xSpeed * delta;
        this.born += delta;
        if (this.born > 1800) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

});

function preload() {
    this.load.image('player1', "/img/playerShip.png")
    this.load.image('player2', "/img/player2Ship.png")
    this.load.image('moon', "/img/moon.png")
    this.load.image('playerBullet', "/img/laserRed01.png")
    this.load.image('bg-img', "/img/6776.jpg")
};




function create() {
    this.add.image(400, 300, 'bg-img');
    // (for my future reference) Set world bounds
    // this.physics.world.setBounds(0, 0, 1600, 1200);

    // draw Players
    player = this.physics.add.sprite(50, 350, 'player1')
    player.setScale(.75);
    player.setCollideWorldBounds(true);
    player.angle = 90;
    player.health = 5;
    player.id = player

    player2 = this.physics.add.sprite(950, 350, 'player2')
    player2.setScale(.75);
    player2.setCollideWorldBounds(true);
    player2.angle = -90
    player2.health = 5;





    // BULLETS
    // Add 2 groups for Bullet objects
    playerBullets = this.physics.add.group({ classType: Bullet, runChildUpdate: true });

    // input events
    fire = this.input.keyboard.addKeys('SPACE');
    cursors = this.input.keyboard.createCursorKeys();
    cursorsK = this.input.keyboard.addKeys({
        up2: Phaser.Input.Keyboard.KeyCodes.W,
        down2: Phaser.Input.Keyboard.KeyCodes.S,
        left2: Phaser.Input.Keyboard.KeyCodes.A,
        right2: Phaser.Input.Keyboard.KeyCodes.D,
    });

    pad = Phaser.Input.Gamepad.Gamepad;
    pad = this.input.gamepad.getPad(0);

    // Player 1 Controls



    // !FIRE
    this.input.keyboard.on('keydown_SPACE', function(time, lastFired) {

        if (player.active === false)
            return;

        var bullet = playerBullets.get().setActive(true).setVisible(true);

        if (bullet) {
            this.physics.add.collider(player2, bullet, playerHitCallback);
            bullet.fire(player);
        }
    }, this);

    this.input.gamepad.on('down', function(pad, time, lastFired) {
        const L2Button = pad.buttons[6];
        if (L2Button.pressed) {
            if (player.active === false)
                return;

            var bullet = playerBullets.get().setActive(true).setVisible(true);

            if (bullet) {
                this.physics.add.collider(player2, bullet, playerHitCallback);
                bullet.fire(player);
            }
        }
    }, this);

    // Player 2 CONTROLS
    // !FIRE
    this.input.keyboard.on('keydown_SHIFT_L', function(time, lastFired) {

        if (player2.active === false)
            return;

        var bullet = playerBullets.get().setActive(true).setVisible(true);

        if (bullet) {
            this.physics.add.colxlider(player, bullet, playerHitCallback2);
            bullet.fire(player2);
        }
    }, this);

    this.input.gamepad.on('down', function(pad, time, lastFired) {
        const R2Button = pad.buttons[7];
        if (R2Button.pressed) {
            if (player2.active === false)
                return;

            var bullet = playerBullets.get().setActive(true).setVisible(true);

            if (bullet) {
                this.physics.add.collider(player, bullet, playerHitCallback2);
                bullet.fire(player2);
            }
        }
    }, this);

}

function playerHitCallback(playerHit, bulletHit) {
    // Reduce health of player
    if (bulletHit.active === true && playerHit.active === true) {
        playerHit.health = playerHit.health - 1;
        console.log("Player2 hp: ", playerHit.health);

        // Kill hp sprites and kill player if health <= 0
        if (playerHit.health <= 0) {
            playerHit.setActive(false).setVisible(false);
            setTimeout(alert("Player 1 Has Won!!"), 5000);
        }

        // Destroy bullet
        bulletHit.setActive(false).setVisible(false);
    }
}

function playerHitCallback2(playerHit, bulletHit) {
    // Reduce health of player
    if (bulletHit.active === true && playerHit.active === true) {
        playerHit.health = playerHit.health - 1;
        console.log("Player hp: ", playerHit.health);

        // Kill hp sprites and kill player if health <= 0
        if (playerHit.health <= 0) {
            playerHit.setActive(false).setVisible(false);
            setTimeout(alert("Player 2 Has Won!!"), 5000);
        }

        // Destroy bullet
        bulletHit.setActive(false).setVisible(false);
    }
}

// Ensures sprite speed doesnt exceed maxVelocity while update is called
function constrainVelocity(sprite, maxVelocity) {
    if (!sprite || !sprite.body)
        return;

    var angle, currVelocitySqr, vx, vy;
    vx = sprite.body.velocity.x;
    vy = sprite.body.velocity.y;
    currVelocitySqr = vx * vx + vy * vy;

    if (currVelocitySqr > maxVelocity * maxVelocity) {
        angle = Math.atan2(vy, vx);
        vx = Math.cos(angle) * maxVelocity;
        vy = Math.sin(angle) * maxVelocity;
        sprite.body.velocity.x = vx;
        sprite.body.velocity.y = vy;

    }
}

function update(time, delta) {
    constrainVelocity(player, 500);
    constrainVelocity(player2, 500);

    pad = Phaser.Input.Gamepad.Gamepad;
    pad = this.input.gamepad.getPad(0);
    const xAxis = pad ? pad.axes[0].getValue() : 0;
    const yAxis = pad ? pad.axes[1].getValue() : 0;


    const xAxis2 = pad ? pad.axes[2].getValue() : 0;
    const yAxis2 = pad ? pad.axes[3].getValue() : 0;
    // player 1 controls
    if (xAxis > 0.4 || cursors.right.isDown) {
        player.setVelocityX(360);
    } else if (xAxis < 0 || cursors.left.isDown) {
        player.setVelocityX(-360);
    } else {
        player.setVelocityX(0);
    }
    if (yAxis < 0 || cursors.up.isDown) {
        player.setVelocityY(-360);
    } else if (yAxis > 0.4 || cursors.down.isDown) {
        player.setVelocityY(360);
    } else {
        player.setVelocityY(0);
    }
    // player2 controls
    if (xAxis2 > 0.4 || cursorsK.left2.isDown) {
        player2.setVelocityX(360);
    } else if (xAxis2 < 0 || cursorsK.right2.isDown) {
        player2.setVelocityX(-360);
    } else {
        player2.setVelocityX(0);
    }
    if (yAxis2 < 0 || cursorsK.up2.isDown) {
        player2.setVelocityY(-360);
    } else if (yAxis2 > 0.4 || cursorsK.down2.isDown) {
        player2.setVelocityY(360);
    } else {
        player2.setVelocityY(0);
    }
};