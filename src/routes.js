import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/home';
import Header from './components/header';
import AddWord from './containers/addWord';
import Explore from './containers/explore';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={Header}>
    <IndexRoute component={HomePage}/>
    <Route path="/add" component={AddWord}/>
    <Route path="/explore" component={Explore}/>
    {/* <Route path="about" component={AboutPage}/> */}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
