import React, { Component } from "react";
import { TweenLite } from "gsap";

import iconSvg from "../images/icons/credit-power.svg";

export default class CreditPowerDisplay extends Component {
  state = {
    currentValue: 0,
    targetValue: 0,
    lastIncrement: 0
  };
  toastElement = null;
  gsapValue = null;
  valueTween = null;

  static getDerivedStateFromProps(nextProps, prevState) {
    const delta = nextProps.value - prevState.targetValue;
    if (delta !== 0) {
      return { targetValue: nextProps.value, lastIncrement: delta };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.targetValue !== this.state.targetValue) {
      if (this.valueTween) this.valueTween.kill();
      if (this.toastTween) this.toastTween.kill();
      this.gsapValue = this.state.currentValue;
      this.valueTween = TweenLite.to(this, 1, {
        gsapValue: this.state.targetValue,
        onUpdate: () => this.setState({ currentValue: Math.floor(this.gsapValue) }),
        onComplete: () => this.setState({ lastIncrement: 0 })
      });
      this.toastTween = TweenLite.fromTo(
        this.toastElement,
        1,
        {
          y: "50%",
          opacity: 1
        },
        {
          y: "-50%",
          opacity: 0
        }
      );
    }
  }

  componentWillUnmount() {
    if (this.valueTween) this.valueTween.kill();
    if (this.toastTween) this.toastTween.kill();
  }

  render() {
    const { currentValue, lastIncrement } = this.state;
    return (
      <div className="score-display">
        <div className="score-display__label">Credit Power</div>
        <div className="score-display__value-container">
          <img className="score-display__icon" src={iconSvg} alt="Credit Power" />
          <div className="score-display__value">
            {currentValue}
            <div
              className="score-display__toast"
              style={{ opacity: 0 }}
              ref={ref => (this.toastElement = ref)}
            >
              {lastIncrement > 0 ? "+" : "-"}
              {Math.abs(lastIncrement)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
