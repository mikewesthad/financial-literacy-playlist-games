import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Timeline from "./components/timeline";
import CreditPowerDisplay from "./components/credit-power-display";
import SavingsDisplay from "./components/savings-display";
import Interstitial from "./components/interstitial";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

const App = class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/* <Route render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
          {/* {!dev && <Route component={ForceVisitIndex} />} */}

          <Timeline />

          <div className="score-container">
            <CreditPowerDisplay />
            <SavingsDisplay />
          </div>

          <Interstitial>
            <div className="interstitial__section">
              <h1 className="interstitial__title">Slow Down!</h1>
            </div>
            <div className="interstitial__section">
              <p className="interstitial__message">
                Whoa, you are close to maxing out your credit card. This won’t help your credit
                power. Try putting less on your card.
              </p>
            </div>
            <div className="interstitial__section">
              <p className="interstitial__button">Continue</p>
            </div>
          </Interstitial>

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
