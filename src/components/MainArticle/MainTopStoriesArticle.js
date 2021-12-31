import React from 'react';
import './MainArticle.css';


function MainTopStoriesArticle({ topStories }) {
    return(
        <div className="main-article">
            {topStories?.length && (
            <div className="main-article--container">
                <div className="main-article__card" id={topStories?.[0]?.uri}>
                    <img className="main-article__img"
                    src={topStories?.[0]?.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${topStories?.[0]?.multimedia?.[0]?.url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='main-article__content--container'>
                        <h6 className='main-article__header'>
                            <a href={topStories?.[0]?.short_url} target="_blank" rel="noreferrer">
                                {topStories?.[0]?.title}
                            </a>
                        </h6>
                        <p className='main-article__byline'>
                            {topStories?.[0]?.byline}
                        </p>
                        <p className='main-article__snippet'>
                            {topStories?.[0]?.abstract}
                        </p>
                    </div>
                </div>
            </div>
    )}
        </div>
    )
}

export default MainTopStoriesArticle;