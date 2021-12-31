import React from 'react';
import './Sidebar.css';

function Sidebar({ weather, sidebarOne, sidebarTwo }) {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let forecast1 = weather && weather.weather?.[2]?.date;
    let day1 = new Date(forecast1);
    let dayOfWeek1 = day1.getDay();

    let forecast2 = weather && weather.weather?.[3]?.date;
    let day2 = new Date(forecast2);
    let dayOfWeek2 = day2.getDay();

    let forecast3 = weather && weather.weather?.[4]?.date;
    let day3 = new Date(forecast3);
    let dayOfWeek3 = day3.getDay();

    return (
        <div>
            {weather && (
            <div className="weather">
                <div className="current__weather">
                    <h1>{weather?.request?.[0]?.query}</h1>
                    <img src={weather?.current_condition?.[0]?.weatherIconUrl?.[0]?.value} alt="" />
                    <p>Current Temp: {weather?.current_condition?.[0]?.temp_C}C</p>
                    <p>Feels Like: {weather?.current_condition?.[0]?.FeelsLikeC}C</p>
                    <p>{weather?.current_condition?.[0]?.weatherDesc?.[0]?.value}</p>
                </div>
                <div className="forecast">
                    <h1>Forecast for the next 3 days</h1>
                    <div className='forecast__day--wrapper'>
                        <p>{daysOfWeek[dayOfWeek1]}</p>
                        <p className='date-string'>{weather && weather.weather?.[2]?.date}</p>
                        <p>Min: {weather.weather?.[2]?.mintempC}C</p>
                        <p>Max: {weather.weather?.[2]?.maxtempC}C</p>
                    </div>
                    <div className='forecast__day--wrapper'>
                        <p>{daysOfWeek[dayOfWeek2]}</p>
                        <p className='date-string'>{weather && weather.weather?.[3]?.date}</p>
                        <p>Min: {weather.weather?.[3]?.mintempC}C</p>
                        <p>Max: {weather.weather?.[3]?.maxtempC}C</p>
                    </div>
                    <div className='forecast__day--wrapper'>
                        <p>{daysOfWeek[dayOfWeek3]}</p>
                        <p className='date-string'>{weather && weather.weather?.[4]?.date}</p>
                        <p>Min: {weather.weather?.[4]?.mintempC}C</p>
                        <p>Max: {weather.weather?.[4]?.maxtempC}C</p>
                    </div>
                </div>
            </div>
            )}
            <div className='sidebar-one'>
            <h1>Science</h1>
                    {sidebarOne?.length && sidebarOne.map((article) => (
                <div className="sidebar" key={article._id}>
                    {article && (
                        <div className="sidebar__card" id={article._id}>
                            <img className="sidebar__img"
                            src={article.multimedia?.[0]?.url ? 
                                `https://nytimes.com/${article.multimedia[0].url}` :
                                'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                            } alt="news-img" />
                                <h6 className='sidebar__header'>
                                    <a href={article.web_url} target="_blank" rel="noreferrer">
                                        {article.headline.main}
                                    </a>
                                </h6>
                        </div>
                    )}
                </div>
                    ))}
            </div>
            <div className='sidebar-two'>
                <h1>Technology</h1>
                    {sidebarTwo?.length && sidebarTwo.map((article) => (
                <div className="sidebar" key={article._id}>
                    {article && (
                        <div className="sidebar__card" id={article._id}>
                            <img className="sidebar__img"
                            src={article.multimedia?.[0]?.url ? 
                                `https://nytimes.com/${article.multimedia[0].url}` :
                                'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                            } alt="news-img" />
                                <h6 className='sidebar__header'>
                                    <a href={article.web_url} target="_blank" rel="noreferrer">
                                        {article.headline.main}
                                    </a>
                                </h6>
                        </div>
                    )}
                </div>
                    ))}
            </div>
        </div>
    );
}

export default Sidebar;