import React, { Component } from 'react';
import '../App.css';

// imports outsiders

//const tags = ['Global News', 'Local News', 'Business', 'Lifestyle', 'Sport', 'Weather'];
// Check tabs in Material UI

class TagsBar extends Component {
    render () {
        return (
            <nav>
                <hr className='tags-bar-line'/>
                <div className='tags-bar-container'>
                    <button className='tag-btn'><span>Global News</span></button>
                    <button className='tag-btn'><span>Local News</span></button>
                    <button className='tag-btn'><span>Business</span></button>
                    <button className='tag-btn'><span>Lifestyle</span></button>
                    <button className='tag-btn'><span>Sport</span></button>
                    <button className='tag-btn'><span>Weather</span></button>
                </div>
                <hr className='tags-bar-line'/>
            </nav>
        );
    }
}

export default TagsBar;
