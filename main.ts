input.onButtonPressed(Button.AB, function () {
    DoLaunch()
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
