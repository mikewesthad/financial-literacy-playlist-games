import React, { Component } from "react";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";

import Interview from "./pages/interview";
import InterviewSelection from "./pages/interview-selection";
import ConversationTree from "./conversation-tree/conversation-tree";
import dialogueData from "./conversation-tree/interview-dialogue-game.json";

const hannahStartingNode = dialogueData.find(
  node => node.type === "StartingText" && node.actor === "Hannah"
);
const taylorStartingNode = dialogueData.find(
  node => node.type === "StartingText" && node.actor === "Taylor"
);
const anthonyStartingNode = dialogueData.find(
  node => node.type === "StartingText" && node.actor === "Anthony"
);
const hannahTree = new ConversationTree(dialogueData, hannahStartingNode.id);
const taylorTree = new ConversationTree(dialogueData, taylorStartingNode.id);
const anthonyTree = new ConversationTree(dialogueData, anthonyStartingNode.id);

const dev = process.env.REACT_APP_ENV === "development";
const Router = dev ? HashRouter : MemoryRouter;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
          {/* {!dev && <Route component={ForceVisitIndex} />} */}

          <Switch>
            <Route exact path="/" render={() => <InterviewSelection />} />

            <Route
              exact
              path="/interview-hannah"
              render={() => (
                <Interview conversationTree={hannahTree} name="Hannah" color="#2098e3" />
              )}
            />
            <Route
              exact
              path="/interview-anthony"
              render={() => <Interview conversationTree={anthonyTree} name="Anthony" />}
            />
            <Route
              exact
              path="/interview-taylor"
              render={() => <Interview conversationTree={taylorTree} name="taylor" />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
