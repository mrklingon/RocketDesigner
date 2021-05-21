input.onButtonPressed(Button.A, function () {
    if ("B" == Modes[Mode]) {
        power += 1
        if (power > 3) {
            power = 0
        }
        basic.showString(convertToText(power))
    }
    if ("D" == Modes[Mode]) {
        Dmode += 1
        if (Dmode > 1) {
            Dmode = 0
        }
        basic.showString("" + (Dmodes[Dmode]))
    }
    if ("T" == Modes[Mode]) {
        basic.showString("FPS")
        basic.showString("" + (doVel()))
    }
})
function doVel () {
    return Time * ((Force / Mass - 1) * 32.2)
}
function doBall () {
    Stp = 0.5
    rocket = game.createSprite(0, 3)
    rocket.turn(Direction.Left, 37)
    for (let index = 0; index < power * 3; index++) {
        rocket.turn(Direction.Right, 15)
        rocket.move(Stp)
        Stp += 0.05
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
    if ("D" == Modes[Mode]) {
        if ("F" == Dmodes[Dmode]) {
            Force += 1
            if (Force > 9) {
                Force = 2
            }
            basic.showString("" + (Force))
        }
        if ("T" == Dmodes[Dmode]) {
            Time += 1
            if (Time > 9) {
                Time = 2
            }
            basic.showString("" + (Time))
        }
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
let Stp = 0
let power = 0
let Mass = 0
let Time = 0
let Force = 0
let Dmodes: string[] = []
let Modes: string[] = []
let Mode = 0
let Dmode = 0
Dmode = 0
Mode = 0
Modes = ["L", "D", "T", "B"]
Dmodes = ["F", "T"]
Force = 2
Time = 2
Mass = 1
power = 0
DoLaunch()
