function convertCtoF() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  
  function convertFtoC() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
  