class Movement extends Phaser.Scene {
    constructor() {
        super('movementScene')
    }

    init() {
        this.PLAYER_VELOCITY = 5
    }

    preload() {
        this.load.spritesheet('character', './assets/spritesheets/Character_002.png',{
            frameWidth: 48
        } )
    }

    create() {
        this.cameras.main.setBackgroundColor(0xDDDDDD)

        this.player = this.add.sprite(width/2, height/2, 'character', 1).setScale(2)
        console.log('now in movement scene 👍')

        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        let playerVector = new Phaser
        // let(cursors.left.isDown){
        //     playerVector
        // }
        // handle L/R
        if(cursors.left.isDown){
            this.player.x -= this.PLAYER_VELOCITY
        }else if(cursors.right.isDown){
            this.player.x += this.PLAYER_VELOCITY
        }

        // handle U/D
        if(cursors.up.isDown){
            this.player.y -= this.PLAYER_VELOCITY
        }else if(cursors.down.isDown){
            this.player.y += this.PLAYER_VELOCITY
        }

        playerVector.normalize()

        this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y)

        // this.player.x += playerVector.x * this.PLAYER_VELOCITY
        // this.player.y += playerVector.y * this.PLAYER_VELOCITY


    }
}