import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@pages/Home';
import routes from './utils/routes';
import Navbar from '@components/Navbar/Navbar';
import ListOfProjects from '@components/Home/ListOfProjects/ListOfProjects';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={ListOfProjects} />
          {routes.map((project) => {
            return (
              <Route
                exact
                path={project.path}
                key={project.id}
                component={project.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
