import React from 'react';
import './NewsItem.scss';

const NewsItem = (props) => {
    const { title, urlToImage, description, publishedAt, url } = props.news;

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
                <div className="news-item__bottom">
                    <span className="news-item__date">
                        { publishedAt }
                    </span>
                    <a href={ url } target="__blank" className="news-item__link">To read the original</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;