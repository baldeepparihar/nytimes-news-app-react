import React from 'react';
import PropTypes from 'prop-types';
import './SmallArticles.css';


const SmallerArticles = ({ article }) => {
    return(
        <div className="small-article">
                {article && (
                <div className="small-article__card" id={article._id}>
                    <img className="small-article__img"
                    src={article.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='small-article__content--container'>
                        <h6 className='small-article__header'>
                            <a href={article.web_url} target="_blank" rel="noreferrer">
                                {article.headline.main}
                            </a>
                        </h6>
                        <p className='small-article__byline'>
                            {article.byline.original}
                        </p>
                        <p className='small-article__snippet'>
                            {article.snippet}
                        </p>
                    </div>
                </div>
                )}  
        </div>
    )
}

{/* MainArticle.protoTypes = {
mainarticle: PropTypes.object.isRequired,
}; */}

export default SmallerArticles;