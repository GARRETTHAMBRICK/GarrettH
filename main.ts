namespace SpriteKind {
    export const animation = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    linkattemptjump()
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (Samus) {
        samusShootRight()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animateLinkSword()
})
function createSamus () {
    Samus = sprites.create(assets.image`Samus`, SpriteKind.Player)
    controller.player2.moveSprite(Samus, 100, 0)
    Samus.setStayInScreen(true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Samus) {
        samusShootLeft()
    }
})
function samusShootRight () {
    samusFacingRight = true
    if (samusFacingRight && true) {
        samusGun = sprites.createProjectileFromSprite(assets.image`myImage`, Samus, 130, 0)
    }
}
function animateLinkSword () {
    LinkSwing.setKind(SpriteKind.animation)
    LinkSwing = sprites.create(assets.image`end of right sword swing`, SpriteKind.animation)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Link Arrow0`, Link, -130, 0)
})
sprites.onOverlap(SpriteKind.animation, SpriteKind.Player, function (sprite, otherSprite) {
	
})
function samusAttemptJump () {
    if (Samus.isHittingTile(CollisionDirection.Bottom)) {
        Samus.vy = -4 * pixlesToMeters
    } else if (canDubleJump) {
        dubleJumpSpeed = -3 * pixlesToMeters
        if (Samus.vy >= -40) {
            dubleJumpSpeed = -4.5 * pixlesToMeters
            Samus.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        Samus.vy = dubleJumpSpeed
        canDubleJump = false
    } else if (Samus.isHittingTile(CollisionDirection.Left)) {
        canDubleJump = true
    } else if (Samus.isHittingTile(CollisionDirection.Right)) {
        canDubleJump = true
    }
}
function linkShootArrowLeft () {
    linkFacingLeft = true
    if (linkFacingLeft && true) {
        projectile = sprites.createProjectileFromSprite(assets.image`Link Arrow0`, Link, -130, 0)
    }
}
function samusShootLeft () {
    samusFacingLeft = true
    if (samusFacingLeft && true) {
        samusGun = sprites.createProjectileFromSprite(assets.image`myImage0`, Samus, -130, 0)
    }
}
function createplayer () {
    Link.setStayInScreen(true)
    tiles.placeOnTile(Link, LinkStartLocation)
    LinkStartLocation = tiles.getTilesByType(assets.tile`Link Spawn`)[0]
    controller.moveSprite(Link, 100, 0)
    scene.cameraFollowSprite(Link)
}
function linkShootArrowRight () {
    linkFacingRight = true
    if (linkFacingRight && true) {
        projectile = sprites.createProjectileFromSprite(assets.image`Link Arrow`, Link, 130, 0)
    }
}
function linkattemptjump () {
    if (Link.isHittingTile(CollisionDirection.Bottom)) {
        Link.vy = -4 * pixlesToMeters
    } else if (canDubleJump) {
        dubleJumpSpeed = -3 * pixlesToMeters
        if (Link.vy >= -40) {
            dubleJumpSpeed = -4.5 * pixlesToMeters
            Link.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        Link.vy = dubleJumpSpeed
        canDubleJump = false
    } else if (Link.isHittingTile(CollisionDirection.Left)) {
        canDubleJump = true
    } else if (Link.isHittingTile(CollisionDirection.Right)) {
        canDubleJump = true
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    samusAttemptJump()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`Link Arrow`, Link, 130, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Link.isHittingTile(CollisionDirection.Bottom))) {
        Link.vy += 120
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    samusTurnLeft()
})
function createLinkSword () {
    LinkSword = sprites.create(assets.image`Link Sword`, SpriteKind.Enemy)
    LinkSword.follow(Link, 150)
}
function samusTurnLeft () {
    if (controller.left.isPressed()) {
        Samus = sprites.create(assets.image`Samus0`, SpriteKind.Player)
    }
}
let LinkSword: Sprite = null
let projectile2: Sprite = null
let linkFacingRight = false
let LinkStartLocation: tiles.Location = null
let samusFacingLeft = false
let linkFacingLeft = false
let dubleJumpSpeed = 0
let canDubleJump = false
let projectile: Sprite = null
let LinkSwing: Sprite = null
let samusGun: Sprite = null
let samusFacingRight = false
let Samus: Sprite = null
let pixlesToMeters = 0
let Link: Sprite = null
Link = sprites.create(assets.image`Link`, SpriteKind.Player)
createplayer()
createSamus()
scene.setBackgroundImage(assets.image`Kirby Map`)
tiles.setTilemap(tilemap`level1`)
pixlesToMeters = 30
let gravity = 7 * pixlesToMeters
Link.ay = gravity
Samus.ay = gravity
info.player2.setLife(3)
game.onUpdate(function () {
    if (Link.isHittingTile(CollisionDirection.Bottom)) {
        canDubleJump = true
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        samusFacingLeft = true
    } else if (Samus.vx > 0) {
        samusFacingRight = true
    }
})
forever(function () {
    if (null.overlapsWith(Samus)) {
        info.changeLifeBy(-2)
    } else if (projectile2.overlapsWith(Samus)) {
        info.changeLifeBy(-1)
    } else if (projectile.overlapsWith(Samus)) {
        info.changeLifeBy(-1)
    }
})
