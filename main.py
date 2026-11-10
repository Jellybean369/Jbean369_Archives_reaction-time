def on_pin_pressed_p0():
    basic.show_number(0)
    basic.show_number(0)
    basic.show_number(0)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

False_Start = False
Running = False
End = 0
Start = 0