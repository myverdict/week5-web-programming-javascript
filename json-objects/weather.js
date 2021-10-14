// Example weather current conditions from Open Weather Map API
// https://openweathermap.org/api
// https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02

// create a weather object
let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": { 
                "lat": 51.5085, 
                "lon": -0.1258 
            },
            "main": {
                "temp": 7,              // get the current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": { 
                "speed": 4.6,           // get the wind speed
                "deg": 90 
            },
            "sys": { "country": "GB" },
            "rain": null,
            "snow": null,
            "clouds": { "all": 90 },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",                      // get the weather description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",   // get the weather description
                    "icon": "09d"
                }       
            ]           // end of 'weather' array inside the 'list array' in the 'weather' object
        }               // end of a nested object inside the 'list' array in the 'weather' object
    ]                   // end of 'list' array
}                       // end of 'weather' object


let weatherList = weather.list;
// console.log(weatherList);           // prints the complete 'list' array

let weatherInfo = weatherList[0];
// console.log(weatherInfo);           // prints the first object from the 'list' array

let main = weatherInfo.main;
// console.log(main);                  // { temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 }

let currentTemp = main.temp;
console.log('Current temperature is ' + currentTemp);   // Current temperature is 7


// combine all these steps into one 
let temp = weather.list[0].main.temp;
// console.log(temp);                  // 7



// get the wind speed
// let windSpeed = weatherInfo.wind.speed;
let windSpeed = weather.list[0].wind.speed;
console.log('The wind speed is ' + windSpeed);          // The wind speed is 4.6


// get the weather descriptions
let descriptions = [];                      // create an empty descriptions array 

// let weatherDescArray = weatherInfo.weather;
let weatherDescArray = weather.list[0].weather;
// Prints the nested 'weather' array that is inside the 'list' array
// console.log(weatherDescArray);              

weatherDescArray.forEach( function(desc) {
    // console.log(desc.description);
    descriptions.push(desc.description);
})

let descriptionStrings = descriptions.join(', ')
console.log('The weather is ' + descriptionStrings);    // The weather is mist, light intensity drizzle


// Practice - get the pressure and humidity
console.log('The pressure is ' + weather.list[0].main.pressure);    // The pressure is 1012
console.log('The humidity is ' + weather.list[0].main.humidity);    // The humidity is 81

