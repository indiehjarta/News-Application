import React, { Component } from 'react';
import './MainStyling.css';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import image from '../../image.jpg';

class Article extends Component {

    render() {
        return (
            <div>
                <div className='heading'>
                    <div className='tags' style={{margin: '26px 0 10px'}}>
                        <div className='tag business'>Business</div>
                        <div className='tag local'>Local</div>
                    </div>
                    <h2 className='article-heading'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit in dignissim volutpat eleifend
                    </h2>
                    <div className='author-description'>
                        <div className='author-img'>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </div>
                        <div className='author-title'>
                            <p className='author'>By Remy Sharp</p>
                            <i className='title'>Journalist</i>
                        </div>
                    </div>
                    <hr className='small-hr' />
                </div>
                <div className='article'>
                    <div className='article-img'>
                        <img src={image} alt=''></img>
                    </div>
                    <div className='article-text'>
                        <p>
                        In dignissim volutpat eleifend. Nunc quam nisl, aliquet in pellentesque et, dapibus in lacus. 
                        Praesent tempus erat non augue faucibus auctor eget vel ex. Donec ut leo consequat, elementum ante id, 
                        maximus magna. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Cras massa elit, fringilla semper pretium vitae, ullamcorper rhoncus neque. Aliquam aliquet ante et ornare 
                        <br/>
                        <br />
                        sollicitudin. Maecenas eget nulla sed dolor sollicitudin ornare at sit amet odio. Fusce at augue felis. 
                        Maecenas sed mauris id tortor ullamcorper consectetur. Curabitur interdum placerat sem sed hendrerit. 
                        In fringilla id eros vitae euismod. Pellentesque venenatis arcu et ante sollicitudin aliquam. 
                        Donec a arcu vitae massa ultrices euismod quis eget nunc. Fusce a accumsan lectus.
                        Sed elementum ornare leo, sit amet egestas tortor viverra vel. Sed quis accumsan orci, consectetur efficitur dui. 
                        Nunc efficitur magna quis nibh pulvinar vulputate. Curabitur eget nisl nec nisi egestas ornare. Donec convallis 
                        massa eu turpis vestibulum, a ornare lorem vulputate. Vestibulum luctus, nisi ultrices finibus dapibus, velit odio 
                        vestibulum dui, at fringilla erat risus at sem.
                        <br />
                        <br />
                        Integer et diam at nunc fringilla posuere. Fusce congue orci ac ante venenatis, in vestibulum lectus pulvinar. Vivamus vel risus
                        rhoncus, rutrum arcu elementum, vulputate risus. Sed condimentum nec risus nec porta. Nunc rutrum justo lectus, a sagittis erat
                        rutrum ut. In ullamcorper, mi posuere lacinia imperdiet, sapien velit gravida odio, id consequat purus metus et libero.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nibh turpis, hendrerit eu dui
                        <br />
                        <br />
                        nec, malesuada pretium lorem. Quisque consectetur dui non libero consequat, sit amet suscipit nulla posuere.
                        Suspendisse potenti. Phasellus fringilla sit amet nulla quis tempus. Duis sodales suscipit tortor, eu semper est scelerisque eu.
                        Duis erat orci, ultricies sit amet turpis fringilla, consequat iaculis libero. Donec eu dignissim nulla, at sollicitudin sem.
                        Praesent interdum, ligula posuere ullamcorper iaculis, dui sapien tempus lorem, quis elementum elit urna id erat.
                        Vestibulum vitae quam imperdiet, iaculis ex non, pulvinar felis.
                        <br />
                        <br />
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget scelerisque nisi.
                        Vivamus sit amet libero vel quam volutpat pellentesque. Cras id imperdiet tellus. Morbi volutpat nisl vel vehicula sollicitudin.
                        </p>
                    </div>
                </div>
                <hr className='small-hr'/>
                <Link to='/'>
                    <button className='back-btn' type='button'>
                        <i className="fas fa-chevron-left fa-3x" 
                        style={{color: 'white'}}></i>
                    </button>
                </Link>
            </div>
        );
    }
}

export default Article;
