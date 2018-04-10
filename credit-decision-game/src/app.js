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
import gameData from "./store";
import { observer } from "mobx-react";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

const decisions = [
  SavingFirst,
  ChoosingPlastic,
  Budgeting,
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
    return (
      <Router>
        <div className="container">
          {/* < render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
          {/* {!dev && <Route component={ForceVisitIndex} />} */}
          <div className="hud">
            <CreditPowerDisplay value={gameData.creditPower} />
            <SavingsDisplay value={gameData.savings} />
          </div>
                <Timeline decisionNumber={location.pathname.slice(1)} />

          <div className="page-wrapper">
            <Route
              render={({ location }) => (
                <TransitionGroup component={null}>
                  <CSSTransition key={location.pathname} timeout={1200} classNames="fade-zoom-">
                    <Switch location={location}>
                      {decisions.map((Component, i) => (
                        <Route
                          key={i}
                          exact
                          path={`/${i}`}
                          render={() => <Component gameData={gameData} nextRoute={`/${i + 1}`} />}
                        />
                      ))}
                      <Redirect to="/0" />
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
