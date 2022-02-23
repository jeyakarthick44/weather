import React,{useState,useEffect}from 'react';

function WeatherDetails({
    temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    sunset
}
) {
    const [weatherState,setWeatherState] = useState("")

    useEffect(() => {
       if(weatherType){
           switch(weatherType){
                case "Clouds":
                   setWeatherState("wi-day-cloudy")
                   break;
                case "Haze":
                    setWeatherState("wi-fog")
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny")
                    break;
                case "Mist":
                    setWeatherState("wi-dust")
                    break;
           }
       }
    }, [weatherType])





    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <article class="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherType}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-left-side">{timeStr} PM<br /> sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-left-side">{humidity}<br /> humidity</p>
                        </div>
                        </div>
                        <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-left-side">{pressure} <br /> rain</p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-left-side">{speed} <br /> wind</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherDetails;
