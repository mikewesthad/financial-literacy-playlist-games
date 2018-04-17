import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import helpIcon from "../../images/icons/help-icon.svg";
import closeIcon from "../../images/icons/close-icon.svg";

export default class Tooltip extends Component {
  state = {
    isHoverOpen: false,
    isTouchOpen: false,
    hasTouched: false
  };

  onTouch = e => {
    this.setState(prevState => ({ hasTouched: true, isTouchOpen: !prevState.isTouchOpen }));
  };

  onStartHover = () => {
    this.setState({ isHoverOpen: true });
  };

  onEndHover = () => {
    this.setState({ isHoverOpen: false });
  };

  render() {
    const { isHoverOpen, hasTouched, isTouchOpen } = this.state;
    const { children } = this.props;

    // If touched, rely on touch state to drive the tooltip
    const isOpen = hasTouched ? isTouchOpen : isHoverOpen;

    return (
      <div className="tooltip">
        <CSSTransition in={isOpen} classNames="tooltip__container-" timeout={200}>
          {state => {
            const style = state === "exited" ? { display: "none" } : {};
            return (
              <div className="tooltip__container" style={style}>
                {isTouchOpen && (
                  <img
                    src={closeIcon}
                    alt="Close Tip"
                    className="tooltip__close"
                    onClick={this.onTouch}
                  />
                )}
                <div className="tooltip__content">{children}</div>
              </div>
            );
          }}
        </CSSTransition>
        <img
          src={helpIcon}
          className="tooltip__help"
          onTouchStart={this.onTouch}
          onMouseOver={this.onStartHover}
          onMouseOut={this.onEndHover}
          alt="Tooltip Help"
        />
      </div>
    );
  }
}
