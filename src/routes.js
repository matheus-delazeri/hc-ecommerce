import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Admin from './Pages/Admin';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/admin' component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}