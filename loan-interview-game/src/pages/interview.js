import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Conversation from "./conversation";

import hannahDarkRingImage from "../images/hannah-dark-ring.svg";
import hannahWhiteRingImage from "../images/hannah-white-ring.svg";
import helpIcon from "../images/question-circle.svg";

export default class Interview extends Component {
  componentWillUpdate(nextProps) {
    // console.log(conversationTree.getChoices());
  }

  render() {
    const { conversationTree } = this.props;
    const choices = conversationTree.getChoices();

    return (
      <div>
        <div className="fixed-navbar">
          <img
            className="fixed-navbar__portrait"
            src={hannahWhiteRingImage}
            alt="Hannah Portrait"
          />
          <div className="fixed-navbar__center">Interviewing Paola</div>
          <img className="fixed-navbar__help" src={helpIcon} alt="Help" />
        </div>

        <Conversation messages={conversationTree.conversationHistory.slice()} />

        <div className="options-menu">
          <img className="options-menu__portrait" src={hannahDarkRingImage} alt="Hannah Portrait" />
          <ul className="options-menu__list">
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
                Talk to someone else.
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
