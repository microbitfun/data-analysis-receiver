radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.toggle(4, 0)
})
radio.setTransmitPower(7)
radio.setGroup(1)
basic.showString("R")
