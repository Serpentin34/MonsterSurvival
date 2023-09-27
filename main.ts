scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (personnage.isHittingTile(CollisionDirection.Bottom)) {
        nombre_de_saut = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (nombre_de_saut < nombre_de_saut_maximum) {
        personnage.vy = -105
        nombre_de_saut += 1
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (nombre_de_saut < nombre_de_saut_maximum) {
        personnage.vy = -105
        nombre_de_saut += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (projrctile_limite > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 9 . . . 
            . . . . . . . . . . . . 9 e . . 
            . . . . d d d d d d d 9 e 9 . . 
            . . . d d d d d d d d d e 9 e e 
            . . . . d d d d d d d 9 e 9 . . 
            . . . . . . . . . . . . 9 e . . 
            . . . . . . . . . . . . 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, personnage, -50, 0)
        projrctile_limite += -1
    }
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(ennemi1)
})
let projectile: Sprite = null
let nombre_de_saut_maximum = 0
let nombre_de_saut = 0
let projrctile_limite = 0
let personnage: Sprite = null
let ennemi1: Sprite = null
ennemi1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e 5 . . . . . . . . . . 
    . . e 5 5 5 5 5 . . . . . . . . 
    . . . 5 5 2 5 2 . . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . . 5 9 9 9 5 5 . . . . . . 
    . . . . . 5 5 5 9 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 5 5 5 5 5 5 5 5 . 
    . . . . . . d d 5 5 5 5 5 5 5 . 
    . . . . . . d . . . . 5 d d 5 e 
    . . . . . . d . . . . . . d e e 
    . . . . . . d 1 1 . . . . d 1 1 
    . . . . . 1 1 1 1 . . . 1 1 1 1 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
personnage = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f 7 f 4 4 f 7 f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 1 f 2 2 2 2 2 2 f 1 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . d d d d d d . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(personnage, 100, 0)
scene.cameraFollowSprite(personnage)
tiles.setCurrentTilemap(tilemap`niveau1`)
tiles.placeOnRandomTile(personnage, sprites.builtin.oceanDepths8)
tiles.placeOnRandomTile(ennemi1, sprites.builtin.oceanDepths9)
projrctile_limite = 1
personnage.ay = 300
nombre_de_saut = 0
nombre_de_saut_maximum = 1
