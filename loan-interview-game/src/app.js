import React, { Component } from "react";
import Interview from "./pages/interview";
import ConversationTree from "./conversation-tree/conversation-tree";
import dialogueData from "./conversation-tree/interview-dialogue-game.json";

const hannahStartingNode = dialogueData.find(
  node => node.type === "StartingText" && node.actor === "Hannah"
);
const hannahTree = new ConversationTree(dialogueData, hannahStartingNode.id);

class App extends Component {
  render() {
    return <Interview conversationTree={hannahTree} />;
  }
}
export default App;
