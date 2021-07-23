import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Products from './Pages/Admin/Products';
import Customers from './Pages/Admin/Customers';
import NewProduct from './Pages/Admin/Products/newProduct';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/admin' exact component={Admin} />
                <Route path='/admin/products' exact component={Products} />
                <Route path='/admin/newproduct' exact component={NewProduct} />
                <Route path='/admin/customers' exact component={Customers} />
            </Switch>
        </BrowserRouter>
    )
}