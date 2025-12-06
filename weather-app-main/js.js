async function NomeCity(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}`
    );
    const data = await response.json();
    console.log(data);
}
NomeCity('iguai');