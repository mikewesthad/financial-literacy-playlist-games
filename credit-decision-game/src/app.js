import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MemoryRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Timeline from "./components/timeline/";
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
import Analytics from "./components/analytics";

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

const getBasePath = location => {
  let parts = location.split("/");
  parts.pop();
  return parts.join("/");
};

@observer
class App extends Component {
  render() {
    const { creditPower, savings } = gameData;
    return (
      <Router>
        <Route
          render={({ location }) => {
            const route = location.pathname.slice(1);
            const decisionNumber = route ? parseInt(route, 10) : undefined;

            return (
              <div className="container">
                <Route
                  render={props => (
                    <Analytics
                      basePath={getBasePath(location.pathname)}
                      trackingId="UA-114340105-4"
                      gameStartRoute="/"
                      gameEndRoute="/11"
                      {...props}
                    />
                  )}
                />
                <div className="hud">
                  <CreditPowerDisplay value={creditPower} />
                  <Timeline decisionNumber={decisionNumber} />
                  <SavingsDisplay value={savings} />
                </div>

                <div className="page-wrapper">
                  <Route
                    render={({ location }) => (
                      <TransitionGroup component={null}>
                        <CSSTransition
                          key={location.pathname}
                          timeout={1200}
                          classNames="fade-zoom-"
                        >
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
            );
          }}
        />
      </Router>
    );
  }
}

export default App;
