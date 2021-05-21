input.onButtonPressed(Button.AB, function () {
    Mode += 1
    if (Mode > 2) {
        Mode = 0
    }
    basic.showString("" + (Modes[Mode]))
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
let Modes: string[] = []
let Mode = 0
Mode = 0
Modes = ["Launch", "Design", "Test"]
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
basic.forever(function () {
	
})
