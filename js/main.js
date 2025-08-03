const api = `https://api.openweathermap.org/data/2.5/forecast?
q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;

fetch(api).then(reponse => reponse.json())
.then(data => {
    console.log(data);
});