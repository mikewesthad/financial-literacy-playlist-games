import React, { Component } from "react";
import { Link } from "react-router-dom";
import Conversation from "./conversation";

import BackIcon from "../images/back-icon.svg";

export default class Interview extends Component {
  componentDidMount() {
    this.props.gameData.addBorrowerInterviewed(this.props.name);
  }

  render() {
    const { conversationTree, name, menuRoute } = this.props;
    const lowercaseName = name.toLowerCase();
    const choices = conversationTree.getChoices();
    const SvgAvatar = require(`../images/avatars/${lowercaseName}.svg`);
    const bgColorClass = `${lowercaseName}-background-color`;

    return (
      <div>
        <div className={`fixed-navbar ${bgColorClass}`}>
          <SvgAvatar className="fixed-navbar__portrait" />
          <div className="fixed-navbar__center">Interviewing {name}</div>
          <Link to={menuRoute} className="fixed-navbar__back">
            <BackIcon style={{ height: "100%" }} />
          </Link>
        </div>

        <Conversation messages={conversationTree.conversationHistory.slice()} />

        <div className="options-menu">
          <SvgAvatar className="options-menu__portrait" />
          <ul className="options-menu__list">
            <div className="options-menu__heading">What do you want to ask?</div>
            {choices.map((node, i) => {
              const { id, text, completed } = node;
              return (
                <li
                  key={id}
                  className={`options-menu__list-item options-menu__list-item--${i + 1} ${
                    completed ? "options-menu__list-item--visited" : ""
                  }`}
                  onClick={() => {
                    conversationTree.goToNode(id);
                    this.forceUpdate();
                  }}
                >
                  {text}
                </li>
              );
            })}

            {conversationTree.isAtMainDialogueNode() ? (
              <li
                key={"Someone else"}
                className="options-menu__list-item options-menu__list-item--6"
                onClick={() => {}}
              >
                <Link to={menuRoute}>Talk to someone else.</Link>
              </li>
            ) : (
              <li
                key={"Something else"}
                className="options-menu__list-item options-menu__list-item--6"
                onClick={() => {
                  this.forceUpdate();
                  conversationTree.goBackToLastDecisionPoint();
                }}
              >
                Ask about something else.
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
