import React from 'react';
import './MainArticle.css';


function MainSearchArticle({ search }) {
    return(
        <div className="main-article">
            {search?.length && (
            <div className="main-article--container">
                <div className="main-article__card" id={search[0]._id}>
                    <img src={search[0].multimedia?.[0]?.url ? 
                        `https://nytimes.com/${search[0].multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='main-article__content--container'>
                        <h6>
                            <a href={search[0].web_url} target="_blank" rel="noreferrer">
                                {search[0].headline?.main}
                            </a>
                        </h6>
                        <p className='main-article__byline'>
                            {search[0].byline?.original}
                        </p>
                        <p className='main-article__snippet'>
                            {search[0]?.snippet}
                        </p>
                    </div>
                </div>
            </div>
    )}
        </div>
    )
}

export default MainSearchArticle;