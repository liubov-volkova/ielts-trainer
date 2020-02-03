import React, { Component } from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import HomePage from '../src/components/HomePage/Home';
import PricePage from '../src/components/PricePage/PriceList';
import ContactToUsPage from '../src/components/ContactToUsPage/ContactToUs';
import BaseAppWrapper from '../src/components/BaseAppWrapper/Layout';
import NotFoundPage from '../src/components/NotFoundPage/NotFound';

import './App.css';

class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <BrowserRouter>
        <BaseAppWrapper>
            <Switch>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.PRICE} component={PricePage} />
                <Route path={ROUTES.CONTACTS} component={ContactToUsPage} />

                <Route render={({ location }) => (
                    <NotFoundPage location={location.pathname} />
                )} />
            </Switch>
        </BaseAppWrapper>
      </BrowserRouter>
        
    );
  }
}
export default App;