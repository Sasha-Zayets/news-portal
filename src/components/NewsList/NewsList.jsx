import React from 'react';
import './NewsList.scss';
import { connect } from 'react-redux';
import { addList } from '../../store/actions';

import NewsItem from '../NewsItem/NewsItem';

class NewsList extends React.Component {
    constructor (props) {
        super();
    }

    componentDidMount () {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d38891e5f6fc4ec2885615900859eb4a')
            .then(data => {
                return data.json()
            })
            .then(result => {
                this.props.setList(result.articles)
            })
            .catch(error => console.log(error))
    }

    render () {
        const { listNews } = this.props;
        return (
            <div className="news-list">
                <div className="news-list__row">
                    {
                        listNews.map((item, index) => {
                            return (
                                <div key={index} className="news-list__col">
                                    <NewsItem news={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listNews: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setList: list => dispatch(addList(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);