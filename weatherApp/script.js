let apiKey = "7fa6f4066e57bea247ac878ae38ddb78";
let Api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector("#searchtext");
const searchbutton = document.querySelector(".search button");
const mainImage = document.querySelector('.detail img');
async function CheckData(city) {
    const response = await fetch(Api + city +`&appid=${apiKey}`);
    var data =await response.json();

    if(response.status == '404'){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weatherdetail').style.display = 'none';
    }
    else{
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector(".humvalue").innerHTML = data.main.humidity + " %";
        document.querySelector('.speedvalue').innerHTML = data.wind.speed + " km/hour";
            
        if(data.weather[0].main == 'Clear'){
            mainImage.src = '/weatherApp//images/clear.png'
        }
        else if(data.weather[0].main == 'Clouds'){
            mainImage.src = '/weatherApp//images/clouds.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            mainImage.src = '/weatherApp//images/drizzle.png'
        }
        else if(data.weather[0].main == 'Mist'){
            mainImage.src = '/weatherApp//images/mist.png'
        }
        else if(data.weather[0].main == 'Rain'){
            mainImage.src = '/weatherApp//images/rain.png'
        }
        else if(data.weather[0].main == 'Snow'){
            mainImage.src = '/weatherApp//images/snow.png'
        }
        document.querySelector('.weatherdetail').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
    
}
searchbutton.addEventListener('click' , () =>{
    CheckData(searchBox.value); 
})
console.log(mainImage);
console.log(searchbutton);
console.log();


