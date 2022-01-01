import React from 'react';
import './SmallArticles.css';


const SmallerArticles = ({ smallArticle }) => {
    return(
        <div className="smaller-article">
                {smallArticle && (
                <div className="smaller-article__card" id={smallArticle._id}>
                    <img src={smallArticle.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${smallArticle.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                        <h6>
                            <a href={smallArticle.web_url} target="_blank" rel="noreferrer">
                                {smallArticle.headline.main}
                            </a>
                        </h6>
                </div>
                )}  
        </div>
    )
}

export default SmallerArticles;