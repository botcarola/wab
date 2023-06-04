document.querySelector("button").onclick = () => {

    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // Required to access service later.
    })
        .then(device => device.gatt.connect())
        .then(server => {
            // Getting Battery Service…
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            // Getting Battery Level Characteristic…
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            // Reading Battery Level…
            return characteristic.readValue();
        })
        .then(value => {
            alert(`Battery percentage is ${value.getUint8(0)}`);
        })
        .catch(error => { console.error(error); });
}