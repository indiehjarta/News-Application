import React, { Component } from 'react';

class SearchBar extends Component {
    render () {
        return (
            <div className='search-container'>
                <input type='text' placeholder=''></input>
                <button className='search-btn' type='submit'>
                    <i className="fas fa-search" style={{color: 'white', fontSize: 'large'}}></i>
                </button>
            </div>
        );
    };
}

export default SearchBar;