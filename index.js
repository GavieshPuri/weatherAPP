const apiKey="64f0d5e1661625050f12dbbc3fdc4490";
let city ='';
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=jaipur&APPID=64f0d5e1661625050f12dbbc3fdc4490
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weather(city) {
    const response = await fetch(apiUrl+`q=${city}&appid=${apiKey}`);
    
    

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else if(input.value == ''){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        
    let data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
    
    document.querySelector("span").innerHTML =  data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
  
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    
    // input.value='';
}

    }
    
btn.addEventListener('click',()=>{
    weather(input.value);
    
})
input.addEventListener('keydown',(event)=>{

    if(event.key === "Enter")
        weather(input.value);
    
})

