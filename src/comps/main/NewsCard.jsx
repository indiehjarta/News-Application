import React from 'react';
import './MainStyling.css';
import { Link } from 'react-router-dom';

// <i className="fas fa-angle-double-up"> in READ MORE

function NewsCard({ data }) {
    return (
        <Link to={`/article/${data.id}`} key={data.id}>
        <div className='card'>
            <img src={data.urlToImage} alt='' className='card-img' />
            <article>
                <div className='tags'>
                    <span className='card-tag'>Global</span>
                    <span className='card-tag'>Lifestyle</span>
                </div>
                <h3>{data.title}</h3>
                <p className='description'>{data.description}</p>
                <span className='read-more'>Read more</span>
                <i className='fas fa-share-alt' />
            </article>
        </div>
        </Link>
    );
}

export default NewsCard;