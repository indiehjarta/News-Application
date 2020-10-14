import React, { Component } from 'react';

// imports outsiders

//const tags = ['Global News', 'Local News', 'Business', 'Lifestyle', 'Sport', 'Weather'];
// Check tabs in Material UI

class TagsBar extends Component {
    render () {
        return (
            <nav>
                <hr className='tags-bar-line'/>
                <div className='tags-bar-container'>
                    <button className='tag-btn'>Global News</button>
                    <button className='tag-btn'>Local News</button>
                    <button className='tag-btn'>Business</button>
                    <button className='tag-btn'>Lifestyle</button>
                    <button className='tag-btn'>Sport</button>
                    <button className='tag-btn'>Weather</button>
                </div>
                <hr className='tags-bar-line'/>
            </nav>
        );
    }
}

export default TagsBar;
