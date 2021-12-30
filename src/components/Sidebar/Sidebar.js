import React from 'react';
import './Sidebar.css';

function Sidebar({ articles, sidebarOne, sidebarTwo }) {


    return (
        <div>
            <div className='sidebar-one'>
            <h1>Science</h1>
                    {sidebarOne.map((article) => (
                <div className="sidebar">
                    {article && (
                        <div className="sidebar__card" id={article._id}>
                            <img className="sidebar__img"
                            src={article.multimedia?.[0]?.url ? 
                                `https://nytimes.com/${article.multimedia[0].url}` :
                                'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                            } alt="news-img" />
                                <h6 className='sidebar__header'>
                                    <a href={article.web_url} target="_blank" rel="noreferrer">
                                        {article.headline.main}
                                    </a>
                                </h6>
                        </div>
                    )}
                </div>
                    ))}
            </div>
            <div className='sidebar-two'>
                <h1>Technology</h1>
                    {sidebarTwo.map((article) => (
                <div className="sidebar">
                    {article && (
                        <div className="sidebar__card" id={article._id}>
                            <img className="sidebar__img"
                            src={article.multimedia?.[0]?.url ? 
                                `https://nytimes.com/${article.multimedia[0].url}` :
                                'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                            } alt="news-img" />
                                <h6 className='sidebar__header'>
                                    <a href={article.web_url} target="_blank" rel="noreferrer">
                                        {article.headline.main}
                                    </a>
                                </h6>
                        </div>
                    )}
                </div>
                    ))}
            </div>
        </div>
    );
}

export default Sidebar;