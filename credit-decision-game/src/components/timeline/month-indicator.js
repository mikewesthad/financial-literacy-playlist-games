import React, { Component } from "react";
import { TweenMax } from "gsap";

export default class MonthIndicator extends Component {
  groupRef = React.createRef();

  // Verify that one of the animated triggers has changed
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.x !== this.props.x) this.updateAnimation();
  }

  componentDidMount() {
    this.updateAnimation(true);
  }

  componentWillUnmount() {
    TweenMax.killTweensOf(this.groupRef.current);
  }

  updateAnimation(immediate = false) {
    const { x, y } = this.props;
    if (immediate) TweenMax.set(this.groupRef.current, { x, y });
    else TweenMax.to(this.groupRef.current, 0.5, { x, y });
  }

  render() {
    const { name } = this.props;
    return (
      <g ref={this.groupRef}>
        <polygon points="-10,50 10,50 0,40" fill="#37BF86" />
        <text
          x="0"
          y="75"
          fontFamily="Glacial Indifference"
          fill="#fff"
          stroke="none"
          fontSize="28"
          textAnchor="middle"
        >
          {name}
        </text>
      </g>
    );
  }
}
