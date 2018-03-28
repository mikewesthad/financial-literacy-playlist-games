import React, { Component } from "react";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import gameData from "./store";
import { observer } from "mobx-react";
import EnterName from "./pages/enter-name";
import Interview from "./pages/interview";
import InterviewMenu from "./pages/interview-menu";
import ConversationTree from "./conversation-tree/conversation-tree";
import ReviewNotes from "./pages/review-notes";
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

const App = observer(
  class App extends Component {
    render() {
      return (
        <Router>
          <div>
            {/* <Route render={props => <Analytics trackingId="UA-114340105-2" {...props} />} /> */}
            {/* {!dev && <Route component={ForceVisitIndex} />} */}

            <Switch>
              <Route exact path="/" render={() => <EnterName gameData={gameData} />} />

              <Route
                exact
                path="/start"
                render={() => {
                  return (
                    <InterviewMenu
                      gameData={gameData}
                      numBorrowersInterviewed={gameData.borrowersInterviewed.length}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/interview-hannah"
                render={() => (
                  <Interview gameData={gameData} conversationTree={hannahTree} name="Hannah" />
                )}
              />
              <Route
                exact
                path="/interview-anthony"
                render={() => (
                  <Interview gameData={gameData} conversationTree={anthonyTree} name="Anthony" />
                )}
              />
              <Route
                exact
                path="/interview-taylor"
                render={() => (
                  <Interview gameData={gameData} conversationTree={taylorTree} name="Taylor" />
                )}
              />

              <Route
                exact
                path="/review-notes"
                render={() => (
                  <ReviewNotes
                    hannahTree={hannahTree}
                    anthonyTree={anthonyTree}
                    taylorTree={taylorTree}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      );
    }
  }
);

export default App;
