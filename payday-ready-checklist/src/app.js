import React, { Component } from "react";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Intro from "./pages/intro";
import Outro from "./pages/outro";
import Deposit from "./pages/direct-deposit";
import Splitting from "./pages/splitting-pay";
import Protecting from "./pages/protecting-my-funds";
import Timesheet from "./pages/completing-my-timesheet";
import Banking from "./pages/banking-smart";
import ForceVisitIndex from "./components/force-visit-index.js";
import Analytics from "./components/analytics";
import ScrollToTop from "./components/scroll-to-top";

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

const routeSequence = [
  { path: "/", component: Intro },
  { path: "/direct-deposit", component: Deposit },
  { path: "/splitting", component: Splitting },
  { path: "/protecting", component: Protecting },
  { path: "/timesheet", component: Timesheet },
  { path: "/banking", component: Banking },
  { path: "/outro", component: Outro }
];

const routes = routeSequence.map((elem, i) => {
  const { path, component: Component } = elem;
  const nextRoute = i < routeSequence.length - 1 ? routeSequence[i + 1].path : null;
  return <Route key={path} exact path={path} render={() => <Component nextRoute={nextRoute} />} />;
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route render={props => <Analytics trackingId="UA-114340105-1" {...props} />} />
          <ScrollToTop />

          {!dev && <Route component={ForceVisitIndex} />}
          <Switch>
            {routes}

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
