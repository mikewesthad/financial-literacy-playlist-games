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
import gameData from "./store";
import { observer } from "mobx-react";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

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
            <Timeline decisionNumber={gameData.decisionNumber} />
            <SavingsDisplay value={gameData.savings} />
          </div>

          <div className="page-wrapper">
            <Route
              render={({ location }) => (
                <TransitionGroup component={null}>
                  <CSSTransition key={location.pathname} timeout={1200} classNames="fade-zoom-">
                    <Switch location={location}>
                      <Route
                        exact
                        path="/0"
                        render={() => <SavingFirst gameData={gameData} nextRoute="1" />}
                      />
                      <Route
                        exact
                        path="/1"
                        render={() => <ChoosingPlastic gameData={gameData} nextRoute="2" />}
                      />
                      <Route
                        exact
                        path="/2"
                        render={() => (
                          <Budgeting gameData={gameData} nextRoute="3" iterationNumber={0} />
                        )}
                      />
                      <Route
                        exact
                        path="/3"
                        render={() => (
                          <Budgeting gameData={gameData} nextRoute="4" iterationNumber={1} />
                        )}
                      />
                      <Route
                        exact
                        path="/4"
                        render={() => (
                          <Budgeting gameData={gameData} nextRoute="5" iterationNumber={2} />
                        )}
                      />
                      <Route
                        exact
                        path="/5"
                        render={() => <TransactionDetective gameData={gameData} nextRoute="6" />}
                      />
                      <Route
                        exact
                        path="/6"
                        render={() => <BirthdaySurprise gameData={gameData} nextRoute="7" />}
                      />
                      <Route
                        exact
                        path="/7"
                        render={() => <TheFluStrikes gameData={gameData} nextRoute="8" />}
                      />
                      <Route
                        exact
                        path="/8"
                        render={() => <PlasticMail gameData={gameData} nextRoute="9" />}
                      />
                      <Route
                        exact
                        path="/9"
                        render={() => <MissingCard gameData={gameData} nextRoute="0" />}
                      />
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
