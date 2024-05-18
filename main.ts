bluetooth.onBluetoothConnected(function () {
    IsConnect = 1
    while (IsConnect == 1) {
        bluetooth.uartWriteString("T:" + convertToText(Math.trunc(dht11_dht22.readData(dataType.temperature))))
        bluetooth.uartWriteString("H:" + convertToText(Math.trunc(dht11_dht22.readData(dataType.humidity))))
        bluetooth.uartWriteString("A:" + convertToText(Math.trunc(pins.analogReadPin(AnalogPin.P1))))
    }
})
bluetooth.onBluetoothDisconnected(function () {
    IsConnect = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A:" + convertToText(Math.trunc(pins.analogReadPin(AnalogPin.P1))))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("T:" + convertToText(Math.trunc(dht11_dht22.readData(dataType.temperature))))
    basic.showString("H:" + convertToText(Math.trunc(dht11_dht22.readData(dataType.humidity))))
})
let IsConnect = 0
basic.pause(2000)
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P0,
true,
false,
true
)
dht11_dht22.selectTempType(tempType.celsius)
bluetooth.startUartService()
IsConnect = 0
