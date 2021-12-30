import React from 'react';
import MainArticle from '../MainArticle/MainArticle.js';
import SmallerArticles from '../SmallArticles/SmallArticles.js';
import RemainingArticles from '../RemainingArticles/RemainingArticles.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './Articles.css';


function Articles({ 
            articles, 
            featuredArticle,
            smallArticles, 
            sports,
            businessDay,
            culture,
            wealth,
            food,
            sidebarOne,
            sidebarTwo
        }) {
    

    return (
        <div className='page--wrapper'>
                <div className="articles" >
                <MainArticle featuredArticle={featuredArticle}/>
                    <div className="smaller-articles--container">
                    {smallArticles.map((article) => (
                        <SmallerArticles className="smaller-articles" article={article} key={article._id}/>
                    ))}
                    </div>
                <RemainingArticles
                    sports={sports}
                    businessDay={businessDay}
                    culture={culture}
                    wealth={wealth}
                    food={food}
                />
                </div>
                <div>
                    <Sidebar 
                    sidebarOne={sidebarOne}
                    sidebarTwo={sidebarTwo}
                    />
                </div>
        </div>
    );
}

export default Articles;
