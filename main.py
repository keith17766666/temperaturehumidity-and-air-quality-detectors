def on_bluetooth_connected():
    global IsConnect
    IsConnect = 1
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

IsConnect = 0
dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P0, True, False, True)
dht11_dht22.select_temp_type(tempType.CELSIUS)
bluetooth.start_uart_service()