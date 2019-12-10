import React from 'react';
import { connect } from 'react-redux';
import './CountryNews.scss';

import Chips from '../Chips/Chips';
import NewsItem from '../NewsItem/NewsItem';

import { setList } from '../../store/actions';

class CountryNews extends React.Component {
    constructor (props) {
        super();

        this.state = {
            chipsList: [
                {
                    title: 'business',
                    active: false
                },
                {
                    title: 'entertainment',
                    active: false
                },
                {
                    title: 'health',
                    active: false
                },
                {
                    title: 'science',
                    active: false
                },
                {
                    title: 'sports',
                    active: false
                },
                {
                    title: 'technology',
                    active: false
                }
            ]
        }
    }

    componentDidMount () {
        setList(`https://newsapi.org/v2/top-headlines?country=ua`, this.props.dispatch);
    }

    setFilter (value, index) {
        const chips = this.state.chipsList;
        const active = chips[index].active;
        
        chips.forEach((el, indexChips) => {
            if (index === indexChips) {
                el.active = !active;
            } else {
                el.active = false;
            }
        });

        this.setState({
            chipsList: chips
        });

        setList(`https://newsapi.org/v2/top-headlines?country=ua&category=${value}`, this.props.dispatch);
    }

    render () {
        const { listNews } = this.props;
        const { chipsList } = this.state;

        return (
            <div className="country-news">
                <h2 className="country-news__title">Country news</h2>
                <div className="country-news__filter">
                    {   chipsList.map((chip, index) => {
                            return (
                                <Chips 
                                    key={index}
                                    activeClass={chip.active}
                                    Click={() => this.setFilter(chip.title, index)}> {chip.title} </Chips>
                            )
                        })
                    }
                </div>
                <div>
                    {   listNews.map((element, index) => {
                            return (
                                <div className="country-news__item" key={index}>
                                    <NewsItem news={element} />
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

export default connect(mapStateToProps)(CountryNews);