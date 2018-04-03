import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MemoryRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import gameData from "./store";
import { observer } from "mobx-react";
import EnterName from "./pages/enter-name";
import DecisionMenu from "./pages/decision-menu";
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

            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition key={location.pathname} timeout={500} classNames="fade-transition">
                    <Switch location={location}>
                      <Route
                        exact
                        path="/"
                        render={() => <EnterName gameData={gameData} nextRoute="/interview-menu" />}
                      />

                      <Route
                        exact
                        path="/interview-menu"
                        render={props => {
                          return (
                            <InterviewMenu
                              gameData={gameData}
                              numBorrowersInterviewed={gameData.borrowersInterviewed.length}
                              {...props}
                            />
                          );
                        }}
                      />

                      <Route
                        exact
                        path="/interview-hannah"
                        render={() => (
                          <Interview
                            menuRoute="/interview-menu"
                            gameData={gameData}
                            conversationTree={hannahTree}
                            name="Hannah"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/interview-anthony"
                        render={() => (
                          <Interview
                            menuRoute="/interview-menu"
                            gameData={gameData}
                            conversationTree={anthonyTree}
                            name="Anthony"
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/interview-taylor"
                        render={() => (
                          <Interview
                            menuRoute="/interview-menu"
                            gameData={gameData}
                            conversationTree={taylorTree}
                            name="Taylor"
                          />
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

                      <Route
                        exact
                        path="/make-decision"
                        render={props => <DecisionMenu gameData={gameData} {...props} />}
                      />

                      <Route
                        exact
                        path="/decision-outcome"
                        render={() => <p>{gameData.selectedBorrower}</p>}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </Router>
      );
    }
  }
);

export default App;