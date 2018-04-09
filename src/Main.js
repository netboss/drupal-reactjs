import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Bio from './components/pages/Bio';
import Objectives from './components/pages/Objectives';
import Qualifications from './components/pages/Qualifications';
import Expertise from './components/pages/Expertise';
import Portfolio from './components/pages/Portfolio';
import { paths } from './components/conf/Conf';

const index = '/';
const msgSent = 'Thank you for your feedback!';

const Main = () => (
  <main>
  <h1 className="msg-sent hidden">{ msgSent }</h1>
    <Switch>
      <Route exact path={ index } render={ () => <Home /> }/>
      <Route exact path={ paths.home } render={ () => <Home /> }/>
      <Route path={ paths.bio } render={ () => <Bio /> }/>
      <Route path={ paths.objectives } render={ () => <Objectives /> }/>
      <Route path={ paths.qualifications } render={ () => <Qualifications /> }/>
      <Route path={ paths.expertise } render={ () => <Expertise /> }/>
      <Route path={ paths.portfolio } render={ () => <Portfolio /> }/>
    </Switch>
  </main>
)

export default Main;