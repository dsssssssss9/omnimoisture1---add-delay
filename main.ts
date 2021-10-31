radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        for (let index = 0; index < 4; index++) {
            microIoT.microIoT_setIndexColor(0, 0x00ff00)
            basic.pause(100)
            microIoT.microIoT_setIndexColor(1, 0x00ff00)
            basic.pause(100)
            microIoT.microIoT_setIndexColor(2, 0x00ff00)
            basic.pause(100)
            microIoT.microIoT_setIndexColor(1, 0xff0000)
            basic.pause(100)
        }
        microIoT.microIoT_setIndexColor(microIoT.microIoT_ledRange(0, 3), 0x000000)
        basic.pause(200)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 10)
        basic.pause(200)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        basic.pause(200)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 10)
        basic.pause(200)
    } else if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 2) {
    	
    } else if (receivedNumber == 3) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Dist = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    microIoT.microIoT_http_TK_GET(
    "IZJPM4VAQH2BZSB3",
    "",
    convertToText(Dist),
    "",
    "",
    "",
    "",
    "",
    5000
    )
    if (Dist <= 5) {
        microIoT.microIoT_MotorRun(microIoT.aMotors.M1, microIoT.Dir.CW, 0)
        microIoT.microIoT_showUserText(0, "STOP !")
        microIoT.microIoT_showUserNumber(4, Dist)
        basic.pause(1000)
        kitronik_VIEW128x64.clear()
    } else {
        microIoT.microIoT_MotorRun(microIoT.aMotors.M1, microIoT.Dir.CW, 134)
        microIoT.microIoT_showUserText(6, "GO !")
        microIoT.microIoT_showUserNumber(0, Dist)
        basic.pause(1000)
        kitronik_VIEW128x64.clear()
    }
})
let Dist = 0
radio.setGroup(2)
radio.setTransmitPower(7)
microIoT.microIoT_initDisplay()
kitronik_VIEW128x64.clear()
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
microIoT.microIoT_WIFI("INS-M2000-61DE", "88908431")
