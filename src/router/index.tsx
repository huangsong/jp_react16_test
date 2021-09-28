import React, { } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from '../pages/Login';
import ArticlesList from '../pages/ArticlesList';
import ArticleDetail from '../pages/ArticleDetail';
import { User } from '../types';
import { useAppSelector } from '../hooks';

const Router = () => {

    const user: User = useAppSelector(state => state.user);

    const history = useHistory();

    if (user.login) {
        return (
            <Switch>
                <Route path='/' exact component={ArticlesList} />
                <Route path='/articles' exact component={ArticlesList} />
                <Route path='/detail/:id' component={ArticleDetail} />
                <Route path='/login' exact component={Login} />
            </Switch>
        )
    }

    history.replace('/')

    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login' exact component={Login} />
        </Switch>
    )
}

export default Router;