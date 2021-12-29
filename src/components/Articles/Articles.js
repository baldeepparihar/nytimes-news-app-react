import React from 'react';
import MainArticle from '../Article/MainArticle.js';
import SmallerArticles from '../SmallArticles/SmallArticles.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './Articles.css';


function Articles({ articles, featuredArticle, smallArticles }) {
    

    return (
        <div className='page--wrapper'>
                <div className="articles" >
                    <MainArticle featuredArticle={featuredArticle} smallArticles={smallArticles}/>
                    {smallArticles.map((article) => {
                        <SmallerArticles article={article}/>
                    })}
                    <Sidebar articles={articles}/>
                </div>
        </div>
    );
}

export default Articles;
