radio.onReceivedString(function (receivedString) {
    if (receivedString == "avance") {
        RingbitCar.forward()
    } else if (receivedString == "recule") {
        RingbitCar.back()
    } else if (receivedString == "gauche") {
        RingbitCar.turnleft()
    } else if (receivedString == "droite") {
        RingbitCar.turnright()
    } else if (receivedString == "pelle") {
        pins.servoWritePin(AnalogPin.P0, 130)
        basic.pause(500)
        RingbitCar.running_distance(RingbitCar.Direction_run.backward, 3)
        pins.servoWritePin(AnalogPin.P0, 70)
        basic.pause(1000)
        RingbitCar.running_distance(RingbitCar.Direction_run.forward, 5)
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        RingbitCar.brake()
    }
})
basic.showIcon(IconNames.Happy)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
radio.setGroup(1)
