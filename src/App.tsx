import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { About } from './components/pages/About';
import { Home } from './components/pages/Home';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
* {
  word-break: break-word;
  word-wrap: break-word;
}
`;
