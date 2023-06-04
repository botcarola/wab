document.querySelector("button").onclick = () => {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
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
            console.log(`Battery percentage is ${ value.getUint8(0) }`);
        })
        .catch(error => { console.error(error); });
}