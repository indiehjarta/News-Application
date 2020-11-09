import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';

import Avatar from '@material-ui/core/Avatar';

class ArticleScreen extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <main>
                    <div className='newspaper'>
                        <div className='heading'>
                            <div className='article-tags'>
                                <div className='article-tag'>Business</div>
                            </div>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                            <div className='author'>
                                <div className='author-img'>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </div>
                                <div className='author-title'>
                                    <p>By Remy Sharp</p>
                                    <i>Journalist</i>
                                </div>
                            </div>
                            <hr className='small-hr' />
                        </div>
                        <div className='article'>
                            <p className='article-text'>
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
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget scelerisque nisi. 
                            Vivamus sit amet libero vel quam volutpat pellentesque. Cras id imperdiet tellus. Morbi volutpat nisl vel vehicula sollicitudin. 
                            <br />
                            Suspendisse laoreet, metus vel mattis fringilla, magna nisi vehicula risus, in convallis tortor urna id arcu. 
                            Curabitur ut dapibus nunc, a convallis nisi.
                            Fusce varius pretium maximus. Praesent tincidunt risus at nisi fermentum vulputate. Mauris blandit varius quam 
                            eu placerat. Donec nisl risus, aliquet eu erat consequat, scelerisque posuere leo. Praesent eget iaculis ipsum. 
                            Aliquam porta urna non magna pretium mattis facilisis sed nunc. Nulla id imperdiet ex.
                            nec, malesuada pretium lorem. Quisque consectetur dui non libero consequat, sit amet suscipit nulla posuere.
                            Suspendisse potenti. Phasellus fringilla sit amet nulla quis tempus. Duis sodales suscipit tortor, eu semper est scelerisque eu. 
                            Duis erat orci, ultricies sit amet turpis fringilla, consequat iaculis libero. Donec eu dignissim nulla, at sollicitudin sem. 
                            Praesent interdum, ligula posuere ullamcorper iaculis, dui sapien tempus lorem, quis elementum elit urna id erat. 
                            Vestibulum vitae quam imperdiet, iaculis ex non, pulvinar felis.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget scelerisque nisi. 
                            Vivamus sit amet libero vel quam volutpat pellentesque. Cras id imperdiet tellus. Morbi volutpat nisl vel vehicula sollicitudin. 
                            <br />
                            </p>
                        </div>
                    </div>
                    <hr className='bottom-hr'/>
                </main>
            </Fragment>
        );
    };
}

export default ArticleScreen;