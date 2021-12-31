import React from 'react';
import './MainArticle.css';


function MainTopStoriesArticle({ topStories }) {
    return(
        <div className="main-article">
            {topStories?.length && (
            <div className="main-article--container">
                <div className="main-article__card" id={topStories?.[0]._id}>
                    <img className="main-article__img"
                    src={topStories?.[0]?.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${topStories?.[0]?.multimedia?.[0]?.url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='main-article__content--container'>
                        <h6 className='main-article__header'>
                            <a href={topStories?.[0]?.web_url} target="_blank" rel="noreferrer">
                                {topStories?.[0]?.headline?.main}
                            </a>
                        </h6>
                        <p className='main-article__byline'>
                            {topStories?.[0]?.byline?.original}
                        </p>
                        <p className='main-article__snippet'>
                            {topStories?.[0]?.snippet}
                        </p>
                    </div>
                </div>
            </div>
    )}
        </div>
    )
}

export default MainTopStoriesArticle;