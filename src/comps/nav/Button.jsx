/**
 * Buttons functions: Active clicks and filter.
 */

import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
                {id: 1, tagName: 'Global News'},
                {id: 2, tagName: 'Local News'},
                {id: 3, tagName: 'Business'},
                {id: 4, tagName: 'Lifestyle'},
                {id: 5, tagName: 'Sport'},
                {id: 6, tagName: 'Weather'},
            ]
        };
    }

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    };

    render() {
        return (
            <div>
                <ul>
                  <button 
                  className={this.state.active ? 'active' : 'tag-btn'} 
                  onClick={this.toggleActive}><span>Global News</span></button>
                  <button 
                  className={this.state.active ? 'active' : 'tag-btn'} 
                  onClick={this.toggleActive}><span>Local News</span></button>
                  <button 
                  className={this.state.active ? 'active' : 'tag-btn'} 
                  onClick={this.toggleActive}><span>Business</span></button>
                  <button 
                  className={this.state.active ? 'active' : 'tag-btn'} 
                  onClick={this.toggleActive}><span>Lifestyle</span></button>
                  <button 
                  className={this.state.active ? 'active' : 'tag-btn'} 
                  onClick={this.toggleActive}><span>Sport</span></button>
                  <button 
                  className={this.state.active ? 'active' : 'tag-btn'} 
                  onClick={this.toggleActive}><span>Weather</span></button>
                </ul>
            </div>
        )
    }
}

export default Button;