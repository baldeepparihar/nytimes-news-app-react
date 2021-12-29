import React from 'react';
import MainArticle from '../Article/MainArticle.js';
import Sidebar from '../Sidebar/Sidebar.js';
import PropTypes from 'prop-types';
import './Articles.css';


function Articles({ loading, articles, featuredArticle, smallArticles }) {
    

    return (
        <div className='page--wrapper'>
        {
            loading ? (
                "Loading..."
            ) : (
                
                <div className="articles" >
                    <MainArticle featuredArticle={featuredArticle} smallArticles={smallArticles}/>
                    <Sidebar articles={articles}/>
                </div>)}
        </div>
    );
}


// Articles.propTypes = {
//     loading: PropTypes.bool.isRequired,
//     articles: PropTypes.array.isRequired,
// };

export default Articles;
