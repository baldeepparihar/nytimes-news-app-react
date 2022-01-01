import React from 'react';
import './SmallSearchArticles.css';


const SmallSearchArticles = ({ smallSearchArticle }) => {
    return(
        <div className="smallersearch-article">
                {smallSearchArticle && (
                <div className="smallersearch-article__card" id={smallSearchArticle._id}>
                    <img src={smallSearchArticle.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${smallSearchArticle.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                        <h6>
                            <a href={smallSearchArticle?.web_url} target="_blank" rel="noreferrer">
                                {smallSearchArticle?.headline?.main}
                            </a>
                        </h6>
                </div>
                )}  
        </div>
    )
}

export default SmallSearchArticles;