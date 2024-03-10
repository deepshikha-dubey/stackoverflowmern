import React, {useState} from 'react'
import './CheckWeather.css'
import axios from 'axios'
import cloud from '../assets/cloud.png'
import clear from '../assets/clear.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png' 

function App() {
  const [data, setData] = useState([])
  const[location, setLocation] =useState('')
 
const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6338bb02d31c3f2a436e366d75768024`;

/*
const searchLocation = () => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })

    setLocation('')
  }
  
} */
const searchLocation = (Event) => {
  if (Event.key === 'Enter') {
    axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    setLocation('');
  }
};
/*
const fahrenheitToCelsius = (fahrenheitValue) =>  {

return  (fahrenheitValue - 32) * 5 / 9;
}
const fahrenheit = data.main.temp;
const celsius = fahrenheitToCelsius(fahrenheit); */
  return (
    <>
      <div className="appweather" >

      
        <div className="search">
          <input value={location} 
          type="text" 
          className='input'
          onChange={Event => setLocation(Event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'/>
        </div>
        <div className="container">
          <div className="top">
            <div className="weather-image">
              {/* {data.weather ? (: This checks if data.weather is truthy (not null or undefined).
             If it exists, the code inside the parentheses will be executed; otherwise, it returns null. */}
            {data.weather ? <img
            className="image"
            src={
              // The subsequent code uses a series of conditional (ternary) operators to determine the appropriate weather icon based on the value of data.weather[0].icon. Each condition corresponds to a specific weather condition.
                data.weather[0].icon === '01d' || data.weather[0].icon === '01n'
                ? clear
                : data.weather[0].icon === '02d' || data.weather[0].icon === '02n'
                ? drizzle
                : data.weather[0].icon === '03d' || data.weather[0].icon === '04d'
                ? cloud
                : data.weather[0].icon === '09d' || data.weather[0].icon === '10d'
                ? rain
                : data.weather[0].icon === '11d' || data.weather[0].icon === '11n'
                ? rain
                : data.weather[0].icon === '13d' || data.weather[0].icon === '13n'
                ? snow
                : data.weather[0].icon === '50d'  || data.weather[0].icon === '50n'
                ? cloud
                : null
            }
            alt="weather"
          /> : null}
            
            </div>
            <div className="location">
             <p className='p'>{data.name}</p> 
             <div className="temp">
              {/* data.main.temp is used because the value of the temperature is inside the 'main' */}
              {/* The .toFixed() function is used to round the figure up so we don't have any decimal */}
              {data.main ? <h1 className='h1'>{data.main.temp.toFixed()}&deg;F
                { /*celsius.toFixed(2) */}
              </h1> : null}
             </div>
             <div className="description">
              {/* data.weather[0] is used because we are accessing an array */}
             {data.weather ? <p>{data.weather[0].description}</p> : null}
             </div>
            </div> 
          </div>
             {/* The data.name!= undefined && is used to make sure that nothing shows on the screen unless user enters a name of a country */}
          {data.name !== undefined && 
            <div className="bottom">
              <div className="feels">
            {data.sys ? <p>{data.sys.country}</p> : null}
              <p className='p'>Country</p>
            </div>
            <div className="feels">
            {data.coord? <p>{data.coord.lon}</p> : null}
              <p className='p'>Longitude</p>
            </div>
            <div className="feels">
            {data.coord ? <p>{data.coord.lat}</p> : null}
              <p className='p'>Latitude</p>
            </div>
            <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}&deg;F</p> : null}
              <p className='p'>Feels</p>
            </div>
            <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
              <p className='p'>Humidity</p>
            </div>
            <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
              <p className='p'>Wind Speed</p>
            </div>
        </div>
          }
          
        </div>
      </div>
    </>
  )
}

export default App