
function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let result = '';
  
    if (isNaN(temperatureInput)) {
      result = 'Please enter a valid number!';
    } else {
      const temperature = parseFloat(temperatureInput);
      if (unitSelect === 'C') {
        result = `${temperature}°C = ${temperature * 9 / 5 + 32}°F`;
      } else if (unitSelect === 'F') {
        result = `${temperature}°F = ${(temperature - 32) * 5 / 9}°C`;
      } else if (unitSelect === 'K') {
        result = `${temperature}°C = ${temperature + 273.15} K`;
      }
    }
  
    document.getElementById('result').textContent = result;
  }
  

  const convertButton = document.getElementById('convertButton');
  convertButton.addEventListener('click', convertTemperature);
  
