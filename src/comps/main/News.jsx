import React, { Fragment, useContext } from 'react';
import { NewsContext } from '../../NewsContext';
import NewsCard from './NewsCard';
import './MainStyling.css';
import Loading from '../Loading';

function News () {
  const { data } = useContext(NewsContext);

  return (
    <Fragment>
      <div className='card-container'>
          {data
              ? data.articles.map((news) => (
                  <NewsCard data={news} key={news.url} />
              ))
              : <Loading />}
      </div>
      <div className='load-more'>
        <button>Load more</button>
        <i className="fas fa-angle-double-down"></i>
      </div>
    </Fragment>
  );
}

export default News;