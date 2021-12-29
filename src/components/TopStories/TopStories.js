import React, { useEffect } from 'react';
import TopStory from '../TopStory/TopStory';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import { Grid, Button, Link } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroudColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    buttons: {
        '& > *' : {
            margin: "5px",
        },
    },
}));

function TopStories({ loading, topStories, getTopArticles }) {
    const classes = useStyles();
    useEffect(() => {
        getTopArticles('world')
    }, [getTopArticles])
    return (
        <div>
                { loading ? 
                    (
                        <Spinner />
                    ) : (
                    <>
                        <div className={classes.buttons}>
                            <Button onClick={() => { getTopArticles('World'); }} variant="outlined" color="primary">World News</Button>
                            <Button onClick={() => { getTopArticles('Technology'); }} variant="outlined" color="secondary">Technology</Button>
                            <Button onClick={() => { getTopArticles('US'); }} variant="outlined" color="default">US News</Button>
                        </div>

                        <NavLink to="/">
                            <Link component="button" variant="body2">Go Back</Link>
                        </NavLink>

                        <div className={classes.root} >
                            <Grid container spacing={3}>
                                {topStories.map((topStory) => (
                                    <Grid item xs={12} sm={4} key={topStory.url}>
                                        <TopStory topStory={topStory} />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </>
                )}
        </div>
    );
}

TopStories.propTypes = {
    loading: PropTypes.bool.isRequired,
    topStories: PropTypes.array.isRequired,
};

export default TopStories;