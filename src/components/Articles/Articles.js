import React from 'react';
import MainArticle from '../Article/MainArticle.js';
import Sidebar from '../Sidebar/Sidebar.js';
import PropTypes from 'prop-types';
import './Articles.css';


function Articles({ loading, articles }) {

    const featuredArticle = articles[0]

    return (
        <div className='page--wrapper'>
        {
            loading ? (
                "Loading..."
            ) : (
                <div className="articles" >
                        {articles.map((article) => (
                                <MainArticle featuredArticle={featuredArticle} article={article} />
                        ))}
                </div>)}
                <Sidebar articles={articles}/>
        </div>
    );
}


Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};

export default Articles;
