import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@pages/Home';
import routes from './utils/routes';
import Navbar from '@components/Navbar/Navbar';
import ListOfProjects from '@components/Home/ListOfProjects/ListOfProjects';
import NotFound from './pages/NotFound';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={ListOfProjects} />
          <Route exact path='/about' component={About} />

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
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
