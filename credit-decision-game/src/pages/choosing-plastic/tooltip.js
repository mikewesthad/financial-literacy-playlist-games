import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import helpIcon from "../../images/icons/help-icon.svg";
import closeIcon from "../../images/icons/close-icon.svg";

export default class Tooltip extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div className="tooltip">
        <CSSTransition in={isOpen} classNames="tooltip__container-" timeout={200}>
          {state => {
            const style = state === "exited" ? { display: "none" } : {};
            return (
              <div className="tooltip__container" style={style}>
                <img
                  src={closeIcon}
                  alt="Close Tip"
                  className="tooltip__close"
                  onClick={this.toggle}
                />
                <div className="tooltip__content">{children}</div>
              </div>
            );
          }}
        </CSSTransition>
        <img src={helpIcon} className="tooltip__help" onClick={this.toggle} alt="Tooltip Help" />
      </div>
    );
  }
}
