import React from 'react';
import './SmallTopStoriesArticles.css';


const SmallTopStoriesArticles = ({ smallTopStoriesArticle }) => {
    return(
        <div className="smallertopstories-article">
                {smallTopStoriesArticle && (
                <div className="smallertopstories-article__card" id={smallTopStoriesArticle.uri}>
                    <img
                    src={smallTopStoriesArticle.multimedia?.[0]?.url ? 
                        `${smallTopStoriesArticle.multimedia?.[0]?.url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                        <h6>
                            <a href={smallTopStoriesArticle.short_url} target="_blank" rel="noreferrer">
                                {smallTopStoriesArticle.title}
                            </a>
                        </h6>
                </div>
                )}  
        </div>
    )
}

export default SmallTopStoriesArticles;