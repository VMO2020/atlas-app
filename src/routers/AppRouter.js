import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Treatments } from '../pages/Treatments';
import { Team } from '../pages/Team';
import { Contact } from '../pages/Contact';
import { Blog } from '../pages/Blog';
import { Prices } from '../pages/Prices';

export const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/specialized-in' component={Treatments} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />
        <Route path='/blog' component={Blog} />
        <Route path='/prices' component={Prices} rel='nofollow' />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};
