import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';


import './app.scss';
import Header from '../header/header';

function App() {
        return (
                <>
                        <Header numItems={2} total={350} />
                        <Switch>
                                <Route path="/" component={HomePage} exact />
                                <Route path="/cart" component={CartPage} />
                        </Switch>
                </>
        )
}

export default App;
