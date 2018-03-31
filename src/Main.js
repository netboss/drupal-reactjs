import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Bio from './components/pages/Bio';
import Objectives from './components/pages/Objectives';
import Qualifications from './components/pages/Qualifications';
import Expertise from './components/pages/Expertise';
import Portfolio from './components/pages/Portfolio';
import { paths } from './components/conf/Conf';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' render={() => <Home source="{source.home}"/>}/>
      <Route exact path={paths.home} render={() => <Home source="{source.home}"/>}/>
      <Route path={paths.bio} render={() => <Bio source="{source.bio}"/>}/>
      <Route path={paths.objectives} render={() => <Objectives source="{source.objectives}"/>}/>
      <Route path={paths.qualifications} render={() => <Qualifications source="{source.qualifications}"/>}/>
      <Route path={paths.expertise} render={() => <Expertise source="{source.expertise}"/>}/>
      <Route path={paths.portfolio} render={() => <Portfolio source="{source.portfolio}"/>}/>
    </Switch>
  </main>
)

export default Main;