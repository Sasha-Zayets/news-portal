import React from 'react';
import './NewsList.scss';
import { connect } from 'react-redux';
import { addList } from '../../store/actions';

import NewsItem from '../NewsItem/NewsItem';

class NewsList extends React.Component {
    constructor (props) {
        super();

        this.state = {
            search: '',
            showResultSearch: false
        }
    }

    componentDidMount () {
        this.getArticles('https://newsapi.org/v2/top-headlines?country=us');   
    }

    getArticles (url) {
        fetch(`${url}&apiKey=d38891e5f6fc4ec2885615900859eb4a`)
            .then(data => {
                return data.json()
            })
            .then(result => {
                this.props.setList(result.articles)
            })
            .catch(error => console.log(error))
    }

    changeNews = () => {
        this.getArticles('https://newsapi.org/v2/everything?q=bitcoin');
    }

    changeSearch = (event) => {
        const value = event.target.value;

        if (value.length === 0) {
            this.setState({
                showResultSearch: false
            })
        }

        this.setState({
            search: value
        });
    }

    keyDown = (event) => {
        if (event.key === 'Enter') {
            this.sendSearch()
        }
    }

    sendSearch = () => {
        const { search } = this.state;

        if (search.length > 0) {
            this.getArticles(`https://newsapi.org/v2/everything?q=${this.state.search}`);
            this.setState({
                showResultSearch: true
            })
        }
    }

    render () {
        const { listNews } = this.props;
        const { search, showResultSearch } = this.state;

        return (
            <div className="news-list">
                <div className="news-list__search">
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={ search } 
                        onKeyPress={ this.keyDown }
                        onChange={ this.changeSearch } />
                    <button className="news-list__button" onClick={ this.sendSearch }>Search</button>
                </div>
                {   (search.length > 0 && showResultSearch) &&
                    <div className="news-list__result">
                        <strong>Search result: { search } </strong>
                    </div>
                }
                <div className="news-list__row">
                    {
                        listNews.map((item, index) => {
                            return (
                                <div key={index} className="news-list__col">
                                    <NewsItem news={item} index={index} />
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