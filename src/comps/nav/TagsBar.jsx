import React, { Component } from 'react';
import './NavStyling.css';
import Button from './Button';

class TagsBar extends Component {

  render() {
    const tags= ['Global News', 'Local News', 'Business', 'Lifestyle', 'Sport', 'Weather'];

    return (
        <nav>
            <hr />
            <div className='tags-bar-container'>
                {tags.map((tag) => (
                    <Button 
                    name={tag}/>
                ))}
            </div>
            <hr />
        </nav>
    );
  }
}

export default TagsBar;