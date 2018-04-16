import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MemoryRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Timeline from "./components/timeline";
import { CreditPowerDisplay, SavingsDisplay } from "./components/score-display/";
import ChoosingPlastic from "./pages/choosing-plastic/";
import SavingFirst from "./pages/saving-first";
import Budgeting from "./pages/budgeting";
import TransactionDetective from "./pages/transaction-detective";
import BirthdaySurprise from "./pages/birthday-suprise";
import TheFluStrikes from "./pages/the-flu-strikes";
import PlasticMail from "./pages/plastic-mail";
import MissingCard from "./pages/missing-card";
import GettingOnline from "./pages/getting-online";
import CreditCheck from "./pages/credit-check";
import Intro from "./pages/intro";
import gameData from "./store";
import { observer } from "mobx-react";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

const decisions = [
  SavingFirst,
  ChoosingPlastic,
  props => <Budgeting iterationNumber={0} {...props} />,
  props => <Budgeting iterationNumber={1} {...props} />,
  props => <Budgeting iterationNumber={2} {...props} />,
  TransactionDetective,
  GettingOnline,
  BirthdaySurprise,
  TheFluStrikes,
  PlasticMail,
  MissingCard,
  CreditCheck
];

@observer
class App extends Component {
  render() {
    const { creditPower, savings } = gameData;
    return (
      <Router>
        {/* < render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
        {/* {!dev && <Route component={ForceVisitIndex} />} */}
        <Route
          render={({ location }) => (
            <div className="container transition-container">
              <div className="hud">
                <CreditPowerDisplay value={creditPower} />
                <Timeline decisionNumber={location.pathname.slice(1)} />
                <SavingsDisplay value={savings} />
              </div>

              <div className="page-wrapper">
                <Route
                  render={({ location }) => (
                    <TransitionGroup component={null}>
                      <CSSTransition key={location.pathname} timeout={1200} classNames="fade-zoom-">
                        <Switch location={location}>
                          <Route
                            key="intro"
                            exact
                            path="/"
                            render={() => <Intro gameData={gameData} nextRoute="/0" />}
                          />

                          {decisions.map((Component, i) => (
                            <Route
                              key={i}
                              exact
                              path={`/${i}`}
                              render={() => (
                                <Component
                                  gameData={gameData}
                                  nextRoute={i >= decisions.length - 1 ? "/" : `/${i + 1}`}
                                />
                              )}
                            />
                          ))}

                          <Redirect to="/" />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  )}
                />
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
