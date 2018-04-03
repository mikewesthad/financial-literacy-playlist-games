import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Timeline from "./components/timeline";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

const App = class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
          {/* {!dev && <Route component={ForceVisitIndex} />} */}

          <Timeline />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={500} classNames="fade-transition">
                  <Switch location={location}>
                    <Route exact path="/" render={() => <p>Hi there</p>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </Router>
    );
  }
};

export default App;
