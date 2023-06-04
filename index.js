document.querySelector("button").onclick = () => {
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // Required to access service later.
      })
      .then( device => alert(`Su porcentaje es: ${device}`))
      .catch(error => { console.error(error); });
}