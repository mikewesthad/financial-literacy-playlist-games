import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import helpIcon from "../../images/icons/help-icon.svg";

// TODO: make mobile-friendly variant

export default class Tooltip extends Component {
  state = {
    isOpen: false
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { children, onClose, onOpen } = this.props;
    return (
      <div className="tooltip">
        <CSSTransition in={isOpen} classNames="tooltip__container-" timeout={200}>
          {state => {
            const style = state === "exited" ? { display: "none" } : {};
            return (
              <div className="tooltip__container" style={style}>
                {/* <img src={closeIcon} className="tooltip__close" onClick={this.close} /> */}
                <div className="tooltip__content">{children}</div>
              </div>
            );
          }}
        </CSSTransition>
        <img
          src={helpIcon}
          className="tooltip__help"
          onMouseOver={this.open}
          onMouseOut={this.close}
          onClick={this.open}
        />
      </div>
    );
  }
}
