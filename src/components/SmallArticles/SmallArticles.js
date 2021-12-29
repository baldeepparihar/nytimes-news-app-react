import React from 'react';
import './SmallArticles.css';


const SmallerArticles = ({ article }) => {
    return(
        <div className="smaller-article">
                {article && (
                <div className="smaller-article__card" id={article._id}>
                    <img className="smaller-article__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                        <h6 className='smaller-article__header'>
                            <a href={article.web_url} target="_blank" rel="noreferrer">
                                {article.headline.main}
                            </a>
                        </h6>
                </div>
                )}  
        </div>
    )
}

export default SmallerArticles;