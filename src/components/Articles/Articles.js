import React from 'react';
import MainArticle from '../MainArticle/MainArticle.js';
import SmallerArticles from '../SmallArticles/SmallArticles.js';
import RemainingArticles from '../RemainingArticles/RemainingArticles.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './Articles.css';


function Articles({ articles, featuredArticle, smallArticles, adventureSports }) {
    

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
                    adventureSports={adventureSports}
                />
                </div>
                <Sidebar articles={articles}/>
        </div>
    );
}

export default Articles;
