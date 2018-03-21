const NODE_TYPES = {
  STARTING_TEXT: "StartingText",
  TEXT: "Text",
  CHOICE: "Choice"
};

class DialogueNode {
  constructor(speaker, text, id) {
    this.id = id;
    this.speaker = speaker;
    this.text = text;
  }
}

export default class ConversationTree {
  constructor(nodes, startingNodeId) {
    this.nodes = nodes;
    this.currentNode = this.findNode(startingNodeId);
    this.mainDialogueNode = this.findNode(startingNodeId);
    this.conversationHistory = [];

    this.idsVisited = new Set();
    this.lastNode = this.currentNode;
    this.currentPath = [];

    this.processCurrentNode();
  }

  processCurrentNode() {
    while (true) {
      const node = this.currentNode;
      this.idsVisited.add(node.id);

      if (this.currentPath[this.currentPath.length - 1] !== node) {
        this.currentPath.push(node);
      }

      if (node.type === NODE_TYPES.TEXT || node.type === NODE_TYPES.STARTING_TEXT) {
        const { actor, name, id } = node;
        this.conversationHistory.push(new DialogueNode(actor, name, id));
      }

      if (node.next) {
        const nextNode = this.findNode(node.next);
        if (nextNode !== null) this.currentNode = nextNode;
      } else {
        break;
      }
    }

    if (!this.currentNode.choices) {
      this.goBackToLastDecisionPoint();
    }
  }

  goToMainDialogueNode() {
    this.lastNode = this.mainDialogueNode;
    this.currentNode = this.mainDialogueNode;
  }

  isAtMainDialogueNode() {
    return this.currentNode === this.mainDialogueNode;
  }

  printPath() {
    console.log("\n" + this.currentPath.map(node => node.text || node.name).join("\n") + "\n");
  }

  goBackToLastDecisionPoint() {
    this.currentPath.pop();
    for (let i = this.currentPath.length - 1; i >= 0; i--) {
      const node = this.currentPath[i];
      if (node.choices) {
        this.currentNode = node;
        break;
      } else {
        this.currentPath.pop();
      }
    }
  }

  goToNode(id) {
    const node = this.findNode(id);
    if (node) {
      this.lastNode = this.currentNode;
      this.currentNode = node;
      this.processCurrentNode();
    }
  }

  // Returns {id, title, text}
  getChoices() {
    if (!this.currentNode.choices) return [];
    return this.currentNode.choices.map(id => {
      const node = this.findNode(id);
      return { id, title: node.title, text: node.name, completed: this.isBranchComplete(id) };
    });
  }

  isBranchComplete(id) {
    const node = this.findNode(id);
    if (!node.choices && !node.next) return true;
    if (!this.idsVisited.has(node.id)) return false;
    if (node.next) {
      if (!this.isBranchComplete(node.next)) return false;
    } else if (node.choices) {
      for (const childId of node.choices) {
        if (!this.isBranchComplete(childId)) return false;
      }
    }

    return true;
  }

  findNode(id) {
    const node = this.nodes.find(node => node.id === id);
    return node || null;
  }
}
