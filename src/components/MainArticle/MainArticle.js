import React from 'react';
import './MainArticle.css';


function MainArticle({ featuredArticle }) {
    console.log(featuredArticle)
    return(
        <div className="main-article">
            {featuredArticle?.length && (
            <div className="main-article--container">
                <div className="main-article__card" id={featuredArticle[0]._id}>
                    <img className="main-article__img"
                    src={featuredArticle[0].multimedia?.[0]?.url ? 
                        `https://nytimes.com/${featuredArticle[0].multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='main-article__content--container'>
                        <h6 className='main-article__header'>
                            <a href={featuredArticle[0].web_url} target="_blank" rel="noreferrer">
                                {featuredArticle[0].headline?.main}
                            </a>
                        </h6>
                        <p className='main-article__byline'>
                            {featuredArticle[0].byline?.original}
                        </p>
                        <p className='main-article__snippet'>
                            {featuredArticle[0]?.snippet}
                        </p>
                    </div>
                </div>
            </div>
    )}
        </div>
    )
}

export default MainArticle;