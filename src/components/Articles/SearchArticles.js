import React from 'react';
import MainSearchArticle from '../MainArticle/MainSearchArticle.js';
import SmallSearchArticles from '../SmallArticles/SmallSearchArticles.js';
import RemainingArticles from '../RemainingArticles/RemainingArticles.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './Articles.css';


function SearchArticles({ 
            featuredArticle,
            smallArticles, 
            sports,
            businessDay,
            culture,
            wealth,
            food,
            sidebarOne,
            sidebarTwo,
            weather,
            search
        }) {
    

    return (
        <div className='page--wrapper'>
                <div className="articles" >
                <MainSearchArticle search={search} featuredArticle={featuredArticle}/>
                    <div className="smaller-articles--container">
                    {smallArticles.map((article) => (
                        <SmallSearchArticles className="smaller-articles" search={search} article={article} key={article._id}/>
                    ))}
                    </div>
                <RemainingArticles
                    sports={sports}
                    businessDay={businessDay}
                    culture={culture}
                    wealth={wealth}
                    food={food}
                    search={search}
                />
                </div>
                <div>
                    <Sidebar 
                    sidebarOne={sidebarOne}
                    sidebarTwo={sidebarTwo}
                    weather={weather}
                    />
                </div>
        </div>
    );
}

export default SearchArticles;
