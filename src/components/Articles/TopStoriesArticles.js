import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainTopStoriesArticle from '../MainArticle/MainTopStoriesArticle.js';
import SmallTopStoriesArticles from '../SmallArticles/SmallSearchArticles.js';
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
            search,
            topStories,
            getTopArticles
        }) {
            const { pathname } = useLocation();
            let section = pathname.split('/').pop()
            let sectionString = section.toString()

        useEffect(() => {
            getTopArticles(sectionString);
            console.log(topStories);
        }, [getTopArticles])
    

    return (
        <div className='page--wrapper'>
                <div className="articles" >
                <MainTopStoriesArticle topStories={topStories} featuredArticle={featuredArticle}/>
                    <div className="smaller-articles--container">
                    {smallArticles.map((article) => (
                        <SmallTopStoriesArticles className="smaller-articles" topStories={topStories} article={article} key={article._id}/>
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
