import React, { useEffect } from 'react';
import TopStory from '../TopStory/TopStory';
import { Grid, Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


function TopStories({ loading, topStories, getTopArticles }) {

    useEffect(() => {
        getTopArticles('world')
    }, [getTopArticles])
    return (
        <div>
            <div>
                <Button onClick={() => { getTopArticles('World'); }} variant="outlined" color="primary">World News</Button>
                <Button onClick={() => { getTopArticles('Technology'); }} variant="outlined" color="secondary">Technology</Button>
                <Button onClick={() => { getTopArticles('US'); }} variant="outlined" color="default">US News</Button>
            </div>

            <NavLink to="/">
                <Link component="button" variant="body2">Go Back</Link>
            </NavLink>

            <div>
                <Grid container spacing={3}>
                    {topStories.map((topStory) => (
                        <Grid item xs={12} sm={4} key={topStory.url}>
                            <TopStory topStory={topStory} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default TopStories;