import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

function Sidebar({ articles }) {


    return (
        <div>
                {articles.map((article) => (
            <div className="sidebar">
                {article && (
                    <div className="sidebar__card" id={article._id}>
                        <img className="sidebar__img"
                        src={article.multimedia?.[0]?.url ? 
                            `https://nytimes.com/${article.multimedia[0].url}` :
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                        } alt="news-img" />
                        <div className='sidebar__content--container'>
                            <h6 className='sidebar__header'>
                                <a href={article.web_url} target="_blank" rel="noreferrer">
                                    {article.headline.main}
                                </a>
                            </h6>
                            <p className='sidebar__byline'>
                                {article.byline.original}
                            </p>
                            <p className='sidebar__snippet'>
                                {article.snippet}
                            </p>
                        </div>
                    </div>
                )}
            </div>
                ))}
        </div>
    );
}


// Sidebar.propTypes = {
//     loading: PropTypes.bool.isRequired,
//     articles: PropTypes.array.isRequired,
// };

export default Sidebar;