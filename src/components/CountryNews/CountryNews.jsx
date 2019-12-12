import React from 'react';
import { connect } from 'react-redux';
import './CountryNews.scss';

import Chips from '../Chips/Chips';
import NewsItem from '../NewsItem/NewsItem';
import Select from '../Select/Select';

import { setList, setNewCountry } from '../../store/actions';

class CountryNews extends React.Component {
    constructor (props) {
        super();

        this.dispatch = props.dispatch;

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
            ],
            countryList: [
                {
                    name: 'Russia',
                    value: 'ru'
                },
                {
                    name: 'Serbia',
                    value: 'rs'
                }
            ]
        }
    }
    
    componentDidMount () {
        setList(`https://newsapi.org/v2/top-headlines?country=${this.props.country}`, this.dispatch);
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

        setList(`https://newsapi.org/v2/top-headlines?country=ua&category=${value}`, this.dispatch);
    }

    selectCountry (value) {
        setNewCountry(value, this.dispatch);
        
        setTimeout(() => {
            setList(`https://newsapi.org/v2/top-headlines?country=${this.props.country}`, this.dispatch);
        }, 100);
    }

    render () {
        const { listNews } = this.props;
        const { chipsList, countryList } = this.state;

        return (
            <div className="country-news">
                <h2 className="country-news__title">Country news</h2>
                <div className="country-news__header">
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
                    <div className="country-news__select">
                        <Select onChange={this.selectCountry.bind(this)} options={countryList} />
                    </div>
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
        listNews: state.list,
        country: state.country
    }
}

export default connect(mapStateToProps)(CountryNews);