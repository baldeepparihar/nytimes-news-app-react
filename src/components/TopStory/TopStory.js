import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backGroundColor: "#fafafa",
        height: 500
    },
    media: {
        height: 300,
    },
});

const TopStory = ({ topStory }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {topStory && (
                <Card className={classes.card} id={topStory.url}>
                    <CardMedia className={classes.media} component="img" src={topStory.multimedia?.[0]?.url ?
                    `https://nyt.com/${topStory.multimedia[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'   
                } alt="news-img" />
                    <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={topStory.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {topStory.byline}
                            </a>
                        </Typography>
                        <Typography variant="body2" component="p">
                            <br />
                            {topStory.abstract}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

// TopStory.propTypes = {
//     topStory: PropTypes.object.isRequired,
// };

export default TopStory;