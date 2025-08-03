const city = 'hanoi';

const api = `https://api.openweathermap.org/data/2.5/forecast?
q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;

const weatherContainer = document.getElementById('container');

fetch(api).then(reponse => reponse.json())
.then(data => {

    weatherContainer.innerHTML = ``;

    const weatherList = data.list;

    // Duyệt mảng với tham số là property
    weatherList.forEach(property => {
        const dateTime = property.dt_txt;
        const temp = property.main.temp;
        const description = property.weather[0].description;
        const icon = property.weather[0].icon;

        const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const weatherRender = `
        <div id="card" class="weather-card">
            <h3>${dateTime}</h3>
            <div class="temp-box">
                <h1>${temp}&deg</h1>
                <img src="${iconSrc}" alt="Weather icon">
            </div>
            <p>${description}</p>
        </div>
        `;

        weatherContainer.innerHTML += weatherRender;
    });
});