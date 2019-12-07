import React from 'react';
import './NewsItem.scss';

const NewsItem = (props) => {
    const { title, urlToImage, description, publishedAt } = props.news;
    return (
        <div className="news-item">
            <picture className="news-item__frame">
                <img 
                    src={ urlToImage } 
                    className="news-item__image"
                    alt=""/>
            </picture>
            <div className="news-item__content">
                <h2 className="news-item__title">{ title }</h2>
                <p className="news-item__description">
                    { description }
                </p>
                <span className="news-item__date">
                    { publishedAt }
                </span>
            </div>
        </div>
    )
}

export default NewsItem;