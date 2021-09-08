window.addEventListener("load", () => {
    let longitude;
    let latitude;


    var ChartDegree1;
    var ChartDegree2;
    var ChartDegree3;
    var ChartDegree4;
    var ChartDegree5;
    var ChartDegree6;
    var ChartDegree7;


    let temperatureDegree = document.querySelector(".temperature");
    let temperatureDescription = document.querySelector(".description");
    let locationName = document.querySelector(".location");

    var temperature1 = document.querySelector(".first-day");
    let temperature2 = document.querySelector(".second-day");
    let temperature3 = document.querySelector(".third-day");
    let temperature4 = document.querySelector(".fourth-day");
    let temperature5 = document.querySelector(".fiveth-day");
    let temperature6 = document.querySelector(".sixth-day");
    let temperature7 = document.querySelector(".seventh-day");

    let temperaturename1 = document.querySelector(".first-day-name");
    let temperaturename2 = document.querySelector(".second-day-name");
    let temperaturename3 = document.querySelector(".third-day-name");
    let temperaturename4 = document.querySelector(".fourth-day-name");
    let temperaturename5 = document.querySelector(".fiveth-day-name");
    let temperaturename6 = document.querySelector(".sixth-day-name");
    let temperaturename7 = document.querySelector(".seventh-day-name");

    const searchInput=document.getElementById("search-input");
    const searchButton=document.getElementById("search-button");

    myFunction();
    function myFunction() {
        let locationName = document.querySelector(".location");
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var TodayIs = d.getDay();
        var n = weekday[TodayIs];
        if (TodayIs > 7) {
            TodayIs = 0;
        }
        temperaturename1.textContent = n;
        document.querySelector(".first-day-name").innerHTML = n;
        n = weekday[(d.getDay() + 1) % 7];
        temperaturename2.textContent = n;
        document.querySelector(".second-day-name").innerHTML = n;
        n = weekday[(d.getDay() + 2) % 7];
        temperaturename3.textContent = n;
        document.querySelector(".third-day-name").innerHTML = n;
        n = weekday[(d.getDay() + 3) % 7];
        temperaturename4.textContent = n;
        document.querySelector(".fourth-day-name").innerHTML = n;
        n = weekday[(d.getDay() + 4) % 7];
        temperaturename5.textContent = n;
        document.querySelector(".fiveth-day-name").innerHTML = n;
        n = weekday[(d.getDay() + 5) % 7];
        temperaturename6.textContent = n;
        document.querySelector(".sixth-day-name").innerHTML = n;
        n = weekday[(d.getDay() + 6) % 7];
        temperaturename7.textContent = n;
        document.querySelector(".seventh-day-name").innerHTML = n;
    }

    searchButton.addEventListener('click',(e)=>
    {

    e.preventDefault();
    getWeather(searchInput.value);
    alert(searchInput.value);
    searchInput.value='';

    });

    const getWeather=async (city) => {
        try {
            console.log(city);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67e14cd4e81a19002ff4bac20b8716d8`,

                { mode: 'cors' }
            );

            
            const weatherData = await response.json();
            console.log(weatherData);
            const { name } = weatherData;
            const{ feels_like }=weatherData.main;
            console.log("hi");
            console.log(feels_like);
            locationName.textContent = name;
            temperatureDegree.textContent = Math.floor(feels_like - 273);
            
        }
        catch(error){
            alert('city not found');
        }
    };


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            console.log(longitude + ',', latitude);
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=67e14cd4e81a19002ff4bac20b8716d8`;

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const { feels_like } = data.current;
                    const { main } = data.current.weather[0];
                    const { timezone } = data;
                    temperatureDegree.textContent = Math.floor(feels_like - 273);
                    temperatureDescription.textContent = main;
                    locationName.textContent = timezone;
                    // console.log(feels_like);
                    ///Every day///
                    console.log(data);
                    // console.log(timezone);

                    temperature1.textContent = Math.floor(data.daily[1].temp.max - 273);
                    ChartDegree1 = Number(temperature1.textContent);
                    console.log("szam=", ChartDegree1);
                    temperature2.textContent = Math.floor(data.daily[2].temp.max - 273);
                    ChartDegree2 = Number(temperature2.textContent);
                    temperature3.textContent = Math.floor(data.daily[3].temp.max - 273);
                    ChartDegree3 = Number(temperature3.textContent);
                    temperature4.textContent = Math.floor(data.daily[4].temp.max - 273);
                    ChartDegree4 = Number(temperature4.textContent);
                    temperature5.textContent = Math.floor(data.daily[5].temp.max - 273);
                    ChartDegree5 = Number(temperature5.textContent);
                    temperature6.textContent = Math.floor(data.daily[6].temp.max - 273);
                    ChartDegree6 = Number(temperature6.textContent);
                    temperature7.textContent = Math.floor(data.daily[7].temp.max - 273);
                    ChartDegree7 = Number(temperature7.textContent);
                    console.log(temperature1);
                    ChartTable();
                    function ChartTable() {
                        var newName = {
                            temp1: 26,
                            temp2: 22,
                            tempall: [ChartDegree1, ChartDegree2, ChartDegree3, ChartDegree4, ChartDegree5, ChartDegree6, ChartDegree7]
                        };
                        console.log(Math.min.apply(Math, newName.tempall));
                        var xValues = [1, 2, 3, 4, 5, 6, 7];
                        var yValues = newName.tempall;
                        new Chart("myChart", {
                            type: "line",
                            data: {
                                labels: xValues,
                                datasets: [{
                                    fill: false,
                                    lineTension: 0.4,
                                    backgroundColor: "rgba(200,0,255,1.1)",
                                    borderColor: "rgba(0,200,255,1)",
                                    data: yValues
                                }]
                            },
                            options: {
                                legend: { display: false },
                                scales: {
                                    yAxes: [{ ticks: { min: Math.min.apply(Math, newName.tempall), max: Math.max.apply(Math, newName.tempall) } }],

                                    display: false,
                                    title: {
                                        display: false
                                    }

                                }
                            }
                        });
                    }


                });
        });
    }





});
