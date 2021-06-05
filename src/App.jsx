import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from '@pages/Home';
import routes from './utils/routes';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
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
