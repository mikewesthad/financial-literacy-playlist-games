import React, { Component } from "react";
import { TweenLite, TimelineMax } from "gsap";
import PropTypes from "prop-types";

export default class FadeInSequence extends Component {
  static defaultProps = {
    defaultDuration: 1,
    defaultDelay: 0
  };

  constructor(props) {
    super(props);

    this.elements = [];
    this.timeline = null;
  }

  componentDidMount() {
    this.timeline = new TimelineMax();

    this.elements.map(({ ref, duration, delay }) => {
      const tween = TweenLite.to(ref, duration, {
        opacity: 1,
        delay: delay
      });
      this.timeline.add(tween);
    });

    this.timeline.play();
  }

  componentWillUnmount() {
    this.timeline.kill();
  }

  render() {
    const { defaultDuration, defaultDelay } = this.props;

    const newChildren = this.props.children.map((child, i) => {
      let { delay, duration, style, ...otherProps } = child.props;

      // Override ONLY the opacity
      const newStyle = Object.assign({}, style, { opacity: 0 });

      // Grab the individual child's animation properties
      if (delay === undefined) delay = defaultDelay;
      if (duration === undefined) duration = defaultDuration;

      return React.cloneElement(child, {
        key: i,
        style: newStyle,
        ref: el => this.elements.push({ ref: el, delay, duration }),
        ...otherProps
      });
    });

    return newChildren;
  }
}
