import React, { Component } from 'react';
import './NavStyling.css';
import Button from './Button';

class TagsBar extends Component {
    render () {
        return (
            <nav>
                <hr />
                <div className='tags-bar-container'>
                    <Button />
                </div>
                <hr />
            </nav>
        );
    }
}

export default TagsBar;
