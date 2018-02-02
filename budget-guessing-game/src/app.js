import React, { Component } from "react";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import CoffeeGuess from "./pages/coffee-guess";
import CoffeeResults from "./pages/coffee-results";
import LunchGuess from "./pages/lunch-guess";
import LunchResults from "./pages/lunch-results";
import Intro1 from "./pages/intro-1";
import Intro2 from "./pages/intro-2";
import Outro from "./pages/outro";
import ForceVisitIndex from "./components/force-visit-index.js";
import { Prompt } from "react-router";

const dev = false;
const Router = dev ? HashRouter : MemoryRouter;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeGuess: null,
      lunchGuess: null
    };

    this.setCoffeeGuess = guess => this.setState({ coffeeGuess: guess });
    this.setLunchGuess = guess => this.setState({ lunchGuess: guess });
  }

  render() {
    const { coffeeGuess, lunchGuess, hasVisitedHome } = this.state;
    return (
      <Router>
        <div>
          {!dev && <Route component={ForceVisitIndex} />}

          <Switch>
            <Route exact path="/" render={() => <Intro1 nextRoute="/intro2" />} />
            <Route exact path="/intro2" render={() => <Intro2 nextRoute="/coffee-guess" />} />
            <Route
              exact
              path="/coffee-guess"
              render={() => (
                <CoffeeGuess nextRoute="coffee-results" onSubmit={this.setCoffeeGuess} />
              )}
            />
            <Route
              exact
              path="/coffee-results"
              render={() => <CoffeeResults nextRoute="lunch-guess" guess={coffeeGuess} />}
            />
            <Route
              exact
              path="/lunch-guess"
              render={() => <LunchGuess nextRoute="lunch-results" onSubmit={this.setLunchGuess} />}
            />
            <Route
              exact
              path="/lunch-results"
              render={() => <LunchResults nextRoute="/outro" guess={lunchGuess} />}
            />
            <Route exact path="/outro" component={Outro} />

            {/* Redirect to home if no page found */}
            <Redirect to="/" />
          </Switch>

          <Link className="restart" to="/">
            Start Over
          </Link>
        </div>
      </Router>
    );
  }
}
