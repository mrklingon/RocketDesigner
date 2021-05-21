input.onButtonPressed(Button.A, function () {
    if ("B" == Modes[Mode]) {
        power += 1
        if (power > 3) {
            power = 0
        }
        basic.showString(convertToText(power))
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
    if ("L" == Modes[Mode]) {
        DoLaunch()
    }
    if ("B" == Modes[Mode]) {
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
Modes = ["L", "D", "T", "B"]
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
