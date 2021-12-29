import React from 'react';
import SmallArticles from '../SmallArticles/SmallArticles';
import PropTypes from 'prop-types';
import './MainArticle.css';


const MainArticle = ({ smallArticles, featuredArticle }) => {
    return(
        <div className="main-article">

            <div className="main-article--container">
                {featuredArticle && (
                <div className="main-article__card" id={featuredArticle._id}>
                    <img className="main-article__img"
                    src={featuredArticle.multimedia?.[0]?.url ? 
                        `https://nytimes.com/${featuredArticle.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <div className='main-article__content--container'>
                        <h6 className='main-article__header'>
                            <a href={featuredArticle.web_url} target="_blank" rel="noreferrer">
                                {featuredArticle.headline.main}
                            </a>
                        </h6>
                        <p className='main-article__byline'>
                            {featuredArticle.byline.original}
                        </p>
                        <p className='main-article__snippet'>
                            {featuredArticle.snippet}
                        </p>
                    </div>
                </div>
            )}
            <SmallArticles smallArticles={smallArticles} />
            </div>
            
        </div>
    )
}

// MainArticle.protoTypes = {
//     mainarticle: PropTypes.object.isRequired,
// };

export default MainArticle;