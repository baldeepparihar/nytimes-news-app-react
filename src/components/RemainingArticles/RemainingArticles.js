import React from 'react';
import './RemainingArticles.css';


function AdventureSports({ article }) {
    return(
        <div className="main-article">
            {article && (
            <div className="main-article--container">
                <div className="main-article__card" id={article?._id}>
                    <img className="main-article__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='main-article__content--container'>
                        <h6 className='main-article__header'>
                            <a href={article?.web_url} target="_blank" rel="noreferrer">
                                {article.headline?.main}
                            </a>
                        </h6>
                        <p className='main-article__byline'>
                            {article.byline?.original}
                        </p>
                        <p className='main-article__snippet'>
                            {article?.snippet}
                        </p>
                    </div>
                </div>
            </div>
    )}
        </div>
    )
}

function RemainingArticles({ adventureSports }) {

    return(
        <div className="remaining-articles--container">
            {adventureSports?.length && adventureSports.map((article) => (
                <AdventureSports article={article} />
            ))}
        </div>
    )
}

export default RemainingArticles;