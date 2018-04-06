import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Timeline from "./components/timeline";
import Interstitial from "./components/interstitial";
import { CreditPowerDisplay, SavingsDisplay } from "./components/score-display/";
import gameData from "./store";
import { observer } from "mobx-react";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

@observer
class App extends Component {
  state = {
    creditPower: 0,
    savings: 0
  };
  };


  render() {
    return (
      <Router>
        <div className="container">
          {/* <Route render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
          {/* {!dev && <Route component={ForceVisitIndex} />} */}

          <div className="hud">
            <CreditPowerDisplay value={this.state.creditPower} />
            <Timeline />
            <SavingsDisplay value={this.state.savings} />
          </div>

          <div className="page">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    timeout={1000}
                    classNames="fade-transition"
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path="/"
                        render={() => (
                          <div className="prompt">
                            <div className="prompt__section">
                              <div className="prompt__title">Birthday Surprise</div>
                            </div>
                            <div className="prompt__section">
                              <div className="prompt__message">
                                Smooth sailing this month. You paid your credit card bill on time
                                and in full. Since it was your birthday this month, your aunt and
                                uncle sent you a check for $100 dollar.
                              </div>
                            </div>
                            <div className="prompt__section text-center">
                              <Link to="/interstitial" className="prompt__button">
                                Continue
                              </Link>
                            </div>
                          </div>
                        )}
                      />

                      <Route
                        exact
                        path="/interstitial"
                        render={() => (
                          <Interstitial>
                            <div className="interstitial__section">
                              <h1 className="interstitial__title">Slow Down!</h1>
                            </div>
                            <div className="interstitial__section">
                              <p className="interstitial__message">
                                Whoa, you are close to maxing out your credit card. This won’t help
                                your credit power. Try putting less on your card.
                              </p>
                            </div>
                            <div className="interstitial__section">
                              <Link to="/" className="interstitial__button">
                                Continue
                              </Link>
                            </div>
                          </Interstitial>
                        )}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
