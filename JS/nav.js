const apiKey = 'f2fccefaecb21af526ec014538d02336'; // Reemplaza con tu clave de API

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid&lang=es&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.getElementById('humidity');
    const countryElement = document.getElementById('country');


    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const humedad = data.main.humidity;
    const pais = data.sys.country;

    temperatureElement.textContent = `Temperatura: ${temperatura}°C`;
    descriptionElement.textContent = `Descripción: ${descripcion}`;
    humidityElement.textContent = `Humedad: ${humedad}%`;
    countryElement.textContent = `Pais:${pais}`;
  })
  .catch(error => {
    console.log('Error al obtener los datos del pronóstico del tiempo:', error);
  });




 
  

