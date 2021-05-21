input.onButtonPressed(Button.A, function () {
    if ("Ballistic" == Modes[Mode]) {
        power += 1
        if (power > 3) {
            power = 0
        }
        basic.showString("P = " + convertToText(power))
    }
})
function doBall () {
    rocket = game.createSprite(0, 3)
    rocket.turn(Direction.Left, 45)
    for (let index = 0; index < power * 3; index++) {
        rocket.move(0.5)
        basic.pause(200)
    }
    basic.pause(500)
    rocket.delete()
}
input.onButtonPressed(Button.AB, function () {
    Mode += 1
    if (Mode > 3) {
        Mode = 0
    }
    basic.showString("" + (Modes[Mode]))
})
input.onButtonPressed(Button.B, function () {
    if ("Launch" == Modes[Mode]) {
        DoLaunch()
    }
    if ("Ballistic" == Modes[Mode]) {
        doBall()
    }
})
function DoLaunch () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.pause(600)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let rocket: game.LedSprite = null
let power = 0
let Modes: string[] = []
let Mode = 0
Mode = 0
Modes = ["Launch", "Design", "Test", "Ballistic"]
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # # # .
    . # # # .
    `)
basic.pause(600)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.pause(200)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
power = 0
