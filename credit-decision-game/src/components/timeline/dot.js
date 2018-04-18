import React, { Component } from "react";
import { TweenMax } from "gsap";

export default class Dot extends Component {
  innerCircleRef = React.createRef();
  outerCircleRef = React.createRef();

  // Verify that one of the animated triggers has changed
  componentDidUpdate(prevProps, prevState) {
    const { isActive, isComplete } = this.props;
    if (prevProps.isActive !== isActive || prevProps.isComplete !== isComplete) {
      this.updateAnimation();
    }
  }

  componentDidMount() {
    this.updateAnimation();
  }

  componentWillUnmount() {
    TweenMax.killTweensOf(this.innerCircleRef.current);
    TweenMax.killTweensOf(this.outerCircleRef.current);
  }

  updateAnimation() {
    const { isActive, isComplete } = this.props;
    if (!isActive && !isComplete) this.setInitial();
    else if (isActive) this.animateToActive();
    else if (!isActive && isComplete) this.animateToComplete();
  }

  animateToComplete() {
    TweenMax.to(this.innerCircleRef.current, 0.5, { attr: { r: 13 } });
    TweenMax.to(this.outerCircleRef.current, 0.5, { attr: { r: 13 } });
  }

  animateToActive() {
    TweenMax.to(this.innerCircleRef.current, 0.5, { delay: 0.2, attr: { r: 25 } });
    TweenMax.to(this.outerCircleRef.current, 0.5, { attr: { r: 25 } });
  }

  setInitial() {
    TweenMax.set(this.innerCircleRef.current, { attr: { r: 0 } });
    TweenMax.set(this.outerCircleRef.current, { attr: { r: 13 } });
  }

  render() {
    const { x, y } = this.props;
    return (
      <g>
        <circle ref={this.innerCircleRef} cx={x} cy={y} fill="#fff" />
        <circle
          ref={this.outerCircleRef}
          cx={x}
          cy={y}
          stroke="#37BF86"
          strokeWidth="7"
          fill="none"
        />
      </g>
    );
  }
}
