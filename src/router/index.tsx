import React, { } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
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
                <Route path='/articles' component={ArticlesList} />
                <Route path='/detail/:id' component={ArticleDetail} />
            </Switch>
        )
    }

    history.replace('/')

    return (
        <Switch>
            <Route path='/' component={Login} />
        </Switch>
    )
}

export default Router;