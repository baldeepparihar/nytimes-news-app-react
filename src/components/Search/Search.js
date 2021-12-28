import React, { useState } from  'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ searchArticles }) => {
    const [text, setText] = useState('');
    
    const handleChange = (e) => {
        setText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchArticles(text);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Search articles"
                    type="text"
                    name="text"
                    value={text}
                    onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                />
            </form>
        </div>
    );
};

Search.propTypes = {
    searchArticles: PropTypes.func.isRequired,
}

export default Search;