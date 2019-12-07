import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../components/Welcome/Welcome';
import NewsList from '../components/NewsList/NewsList';

const RootRouter = () => {
    return (
        <Switch>
            <Route path='/' exact component={Welcome}></Route>
            <Route path='/news' exact component={NewsList}></Route>
        </Switch>
    )
}

export default RootRouter;