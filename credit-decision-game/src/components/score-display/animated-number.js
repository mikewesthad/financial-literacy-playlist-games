import React, { Component } from "react";
import { TweenLite } from "gsap";

export default class AnimatedNumber extends Component {
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
      this.valueTween = TweenLite.to(this, 2, {
        gsapValue: this.state.targetValue,
        onUpdate: () => this.setState({ currentValue: Math.floor(this.gsapValue) })
      });
      this.toastTween = TweenLite.fromTo(
        this.toastElement,
        10,
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
    );
  }
}
