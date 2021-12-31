import React from 'react';
import './RemainingArticles.css';


function Sports({ article }) {
    return(
        <div className="remaining-articles--container">
            {article && (
                <div className="remaining-articles__card" id={article?._id}>
                    <img className="remaining-articles__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='remaining-articles__content--container'>
                        <h6 className='remaining-articles__header'>
                            <a href={article?.web_url} target="_blank" rel="noreferrer">
                                {article.headline?.main}
                            </a>
                        </h6>
                        <p className='remaining-articles__byline'>
                            {article.byline?.original}
                        </p>
                        <p className='remaining-articles__snippet'>
                            {article?.snippet}
                        </p>
                    </div>
                </div>
    )}
        </div>
    )
}
function BusinessDay({ article }) {
    return(
        <div className="remaining-articles--container">
            {article && (
                <div className="remaining-articles__card" id={article?._id}>
                    <img className="remaining-articles__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='remaining-articles__content--container'>
                        <h6 className='remaining-articles__header'>
                            <a href={article?.web_url} target="_blank" rel="noreferrer">
                                {article.headline?.main}
                            </a>
                        </h6>
                        <p className='remaining-articles__byline'>
                            {article.byline?.original}
                        </p>
                        <p className='remaining-articles__snippet'>
                            {article?.snippet}
                        </p>
                    </div>
                </div>
    )}
        </div>
    )
}
function Culture({ article }) {
    return(
        <div className="remaining-articles--container">
            {article && (
                <div className="remaining-articles__card" id={article?._id}>
                    <img className="remaining-articles__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='remaining-articles__content--container'>
                        <h6 className='remaining-articles__header'>
                            <a href={article?.web_url} target="_blank" rel="noreferrer">
                                {article.headline?.main}
                            </a>
                        </h6>
                        <p className='remaining-articles__byline'>
                            {article.byline?.original}
                        </p>
                        <p className='remaining-articles__snippet'>
                            {article?.snippet}
                        </p>
                    </div>
                </div>
    )}
        </div>
    )
}
function Wealth({ article }) {
    return(
        <div className="remaining-articles--container">
            {article && (
                <div className="remaining-articles__card" id={article?._id}>
                    <img className="remaining-articles__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='remaining-articles__content--container'>
                        <h6 className='remaining-articles__header'>
                            <a href={article?.web_url} target="_blank" rel="noreferrer">
                                {article.headline?.main}
                            </a>
                        </h6>
                        <p className='remaining-articles__byline'>
                            {article.byline?.original}
                        </p>
                        <p className='remaining-articles__snippet'>
                            {article?.snippet}
                        </p>
                    </div>
                </div>
    )}
        </div>
    )
}
function Food({ article }) {
    return(
        <div className="remaining-articles--container">
            {article && (
                <div className="remaining-articles__card" id={article?._id}>
                    <img className="remaining-articles__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='remaining-articles__content--container'>
                        <h6 className='remaining-articles__header'>
                            <a href={article?.web_url} target="_blank" rel="noreferrer">
                                {article.headline?.main}
                            </a>
                        </h6>
                        <p className='remaining-articles__byline'>
                            {article.byline?.original}
                        </p>
                        <p className='remaining-articles__snippet'>
                            {article?.snippet}
                        </p>
                    </div>
                </div>
    )}
        </div>
    )
}

function RemainingArticles({ 
                sports,
                businessDay,
                culture,
                wealth,
                food
            }) {

    return(
        <div className="remaining-articles--container">
            <div>
                <h1>Business Day</h1>
                {businessDay?.length && businessDay.map((article) => (
                    <BusinessDay article={article} key={article._id} />
                ))}
            </div>
            <div>
                <h1>Sports</h1>
                {sports?.length && sports.map((article) => (
                    <Sports article={article} key={article._id} />
                ))}
            </div>
            <div>
                <h1>Culture</h1>
                {culture?.length && culture.map((article) => (
                    <Culture article={article} key={article._id} />
                ))}
            </div>
            <div>
                <h1>Wealth</h1>
                {wealth?.length && wealth.map((article) => (
                    <Wealth article={article} key={article._id} />
                ))}
            </div>
            <div>
                <h1>Food</h1>
                {food?.length && food.map((article) => (
                    <Food article={article} key={article._id} />
                ))}
            </div>
        </div>
    )
}

export default RemainingArticles;