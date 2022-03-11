let weather = {
    "apiKey" : "11312892223231707f1124092bcacd80",

    getWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },


};