import React, { Component } from "react";
import { TweenLite, TimelineMax } from "gsap";
import { recursiveMapChildren } from "../utils/react-utils";

// A simple data wrapper that exposes its only child element
export function SequenceElement({ duration, delay, children }) {
  return getSingleValidChild(children);
}

export class FadeInSequence extends Component {
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

    this.elements.forEach(({ ref, duration, delay }) => {
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

    const newChildren = recursiveMapChildren(this.props.children, child => {
      if (child.type !== SequenceElement) return child;

      let { delay, duration, children } = child.props;
      const sequenceChild = getSingleValidChild(children);

      // Override ONLY the opacity
      const newStyle = Object.assign({}, sequenceChild.props.style, { opacity: 0 });

      // Grab the individual child's animation properties
      if (delay === undefined) delay = defaultDelay;
      if (duration === undefined) duration = defaultDuration;

      return React.cloneElement(sequenceChild, {
        style: newStyle,
        ref: el => this.elements.push({ ref: el, delay, duration })
      });
    });

    return newChildren;
  }
}

function getSingleValidChild(children) {
  if (React.Children.count(children) !== 1) {
    throw new Error("SequenceElement must have only one child.");
  }
  const child = React.Children.toArray(children)[0];
  if (!React.isValidElement(child)) {
    throw new Error("SequenceElement expected a valid React element (e.g. not a string)");
  }
  return child;
}
