import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../components/Welcome/Welcome';
import NewsList from '../components/NewsList/NewsList';
import CountryNews from '../components/CountryNews/CountryNews';

const RootRouter = () => {
    return (
        <Switch>
            <Route path='/' exact component={Welcome}></Route>
            <Route path='/news-portal/' exact component={Welcome}></Route>

            <Route path='/news' exact component={NewsList}></Route>
            <Route path='/ukraine-news' component={CountryNews}></Route>
        </Switch>
    )
}

export default RootRouter;