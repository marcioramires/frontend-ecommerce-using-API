import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Products, Cart } from '../containers'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Products} path="/products" />
                <Route component={Cart} path="/cart" />
            </Switch>
        </Router>
    )
}

export default Routes
