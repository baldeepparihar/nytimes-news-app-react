import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MainArticle.css';


const MainArticle = ({ article, featuredArticle }) => {

    
    return(
        <div className="main-article">
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
        </div>


        // <div className="article">
        //     {article && (
        //         <div className="article__card" id={article._id}>
        //             <img className="article__img"
        //             src={article.multimedia?.[0]?.url ? 
        //                 `https://nytimes.com/${article.multimedia[0].url}` :
        //                 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
        //             } alt="news-img" />
        //             <div className='article__content--container'>
        //                 <h6 className='article__header'>
        //                     <a href={article.web_url} target="_blank" rel="noreferrer">
        //                         {article.headline.main}
        //                     </a>
        //                 </h6>
        //                 <p className='article__byline'>
        //                     {article.byline.original}
        //                 </p>
        //                 <p className='article__snippet'>
        //                     {article.snippet}
        //                 </p>
        //             </div>
        //         </div>
        //     )}
        // </div>
    )
}

MainArticle.protoTypes = {
    mainarticle: PropTypes.object.isRequired,
};

export default MainArticle;