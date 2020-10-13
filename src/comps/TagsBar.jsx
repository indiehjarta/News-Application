import React, { Component, Fragment } from 'react';

// imports outsiders

//const tags = ['Global News', 'Local News', 'Business', 'Lifestyle', 'Sport', 'Weather'];
// Check tabs in Material UI

class TagsBar extends Component {
    render () {
        return (
            <Fragment>
                <button>Global News</button>
                <button>Local News</button>
                <button>Business</button>
                <button>Lifestyle</button>
                <button>Sport</button>
                <button>Weather</button>
            </Fragment>
        );
    }
}

export default TagsBar;
