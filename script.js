async function getWeather(){

const city = document.getElementById("cityInput").value;

const weatherResult = document.getElementById("weatherResult");

weatherResult.innerHTML = "Loading...";

try{

const response = await fetch(
`https://wttr.in/${city}?format=j1`
);

if(!response.ok){
throw new Error("City not found");
}

const data = await response.json();

weatherResult.innerHTML = `
<div class="weather-card">

<h2>${city}</h2>

<p>🌡 Temperature: ${data.current_condition[0].temp_C} °C</p>

<p>💧 Humidity: ${data.current_condition[0].humidity}%</p>

<p>🌬 Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>

<p>☁ Weather: ${data.current_condition[0].weatherDesc[0].value}</p>

</div>
`;

}catch(error){

weatherResult.innerHTML = `
<p>${error.message}</p>
`;

}

}
