import React from 'react';
import MainTopStoriesArticle from '../MainArticle/MainTopStoriesArticle.js';
import SmallTopStoriesArticles from '../SmallArticles/SmallTopStoriesArticles.js';
import RemainingArticles from '../RemainingArticles/RemainingArticles.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './Articles.css';


function TopStoriesArticles({  
            sports,
            businessDay,
            culture,
            wealth,
            food,
            sidebarOne,
            sidebarTwo,
            weather,
            search,
            topStories,
            smallTopStories,
        }) {
    

    return (
        <div className='page--wrapper'>
                <div className="articles" >
                <MainTopStoriesArticle topStories={topStories} />
                    <div className="smaller-articles--container">
                    {smallTopStories.length && smallTopStories.map((smallTopStoriesArticle) => (
                        <SmallTopStoriesArticles smallTopStoriesArticle={smallTopStoriesArticle}/>
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

export default TopStoriesArticles;
