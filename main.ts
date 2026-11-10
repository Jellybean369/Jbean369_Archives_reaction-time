input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(50, 200))
    if (False_Start) {
        Start = input.runningTime()
        Running = true
        led.stopAnimation()
    }
    basic.clearScreen()
    led.plot(randint(0, 4), randint(0, 4))
})
input.onButtonPressed(Button.A, function () {
    if (Running) {
        Running = false
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showNumber(End - Start)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    End = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (Running) {
        Running = false
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showNumber(End - Start)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    End = input.runningTime()
})
let Start = 0
let End = 0
let Running = false
let False_Start = false
False_Start = false
Running = false
End = 0
Start = 0
basic.showString("GND + Pin 0 to start")
