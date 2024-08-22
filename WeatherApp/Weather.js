const cityInput = document.getElementById("cityname");
const searchButton = document.getElementById("searchbtn");
const cityElement = document.getElementById("city");
const timeElement = document.getElementById("datetime");
const tempElement = document.getElementById("temp");
const descriptElement = document.getElementById("weatherCondition");
const windElement = document.getElementById("windPre");
const humiElement = document.getElementById("humidity");
const iconElement = document.getElementById("weather-icon");
const fahrenheitElement=document.getElementById('fahren')
const pElement=document.getElementById('title');

searchButton.addEventListener("click", function () {
  const apiKey = "687f5652c22b154f43c362fdbc507178";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const url = `${apiUrl}?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var name = data.name; //fetch city name
      var weatherDate = new Date(data.dt * 1000);//fetch date and time
      var temp = data.main.temp;  //fetch temperature
      var des = data.weather[0].description;  //fetch weather description
      var wind = data.wind.speed;   //fetch wind speed
      var humi = data.main.humidity;  //fetch humidity
      var iconCode = data.weather[0].icon;  ////fetch weather icon
      
      var iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;// open weeather map api provides icon image

      var fahrenheit=temp*9/5+32; //convert temperature to fahrenheit
      
      pElement.innerText='Weather of';

      cityElement.innerText = `${name}`;
      cityElement.style.color='black';

      timeElement.innerText = `${weatherDate}`;

      tempElement.innerText = `${Math.round(temp)}℃`;

      fahrenheitElement.innerText=`${Math.round(fahrenheit)}°F`;

      descriptElement.innerText = `${des}`;

      windElement.innerText = `${wind}m/s`;

      humiElement.innerText = `${humi}%`;

      iconElement.src = iconUrl;

      // to add wind icon
      const para1 = document.getElementById("windPre");
      para1.insertAdjacentHTML(
        "afterbegin",
        "<i class='bi bi-wind'></i>&nbsp;"
      );


      //to add humidity icon
      const para2 = document.getElementById("humidity");
      para2.insertAdjacentHTML(
        "afterbegin",
        "<i class='bi bi-moisture'></i>&nbsp;"
      );
    });
});
