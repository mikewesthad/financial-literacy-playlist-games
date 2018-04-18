import React, { Component } from "react";
import { TweenMax } from "gsap";

export default class Connector extends Component {
  state = {
    initialX: 0,
    initialWidth: 0
  };
  rectRect = React.createRef();

  static getDerivedStateFromProps(nextProps, prevState) {
    return { initialX: nextProps.x, initialWidth: nextProps.width };
  }

  // Verify that one of the animated triggers has changed
  componentDidUpdate(prevProps, prevState) {
    const { isLeftActive, isRightActive } = this.props;
    if (prevProps.isLeftActive !== isLeftActive || prevProps.isRightActive !== isRightActive) {
      this.updateAnimation();
    }
  }

  componentDidMount() {
    this.updateAnimation(true);
  }

  componentWillUnmount() {
    TweenMax.killTweensOf(this.rectRect.current);
  }

  updateAnimation(immediate = false) {
    const { isLeftActive, isRightActive } = this.props;
    if (isLeftActive) this.animateShrinkLeft(immediate);
    else if (isRightActive) this.animateShrinkRight(immediate);
    else this.animateToInactive(immediate);
  }

  animateToInactive(immediate = false) {
    const { initialX, initialWidth } = this.state;
    const duration = immediate ? 0 : 0.5;
    TweenMax.to(this.rectRect.current, duration, {
      attr: { x: initialX, width: initialWidth }
    });
  }

  animateShrinkLeft(immediate = false) {
    const { initialX, initialWidth } = this.state;
    const duration = immediate ? 0 : 0.5;
    TweenMax.to(this.rectRect.current, duration, {
      attr: { x: initialX + 10, width: initialWidth - 10 }
    });
  }

  animateShrinkRight(immediate = false) {
    const { initialX, initialWidth } = this.state;
    const duration = immediate ? 0 : 0.5;
    TweenMax.to(this.rectRect.current, duration, {
      attr: { x: initialX, width: initialWidth - 10 }
    });
  }

  render() {
    const { y, height } = this.props;
    return <rect ref={this.rectRect} y={y} height={height} fill="#37BF86" />;
  }
}
