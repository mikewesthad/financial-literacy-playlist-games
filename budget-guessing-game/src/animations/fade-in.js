import React, { Component } from "react";
import { TweenLite } from "gsap";

export default class FadeIn extends Component {
  constructor(props) {
    super(props);

    this.tween = null;
  }

  componentDidMount() {
    const { duration, delay } = this.props;
    this.tween = TweenLite.to(this.el, duration, { opacity: 1, delay: delay });
  }

  componentWillUnmount() {
    this.tween.kill();
  }

  render() {
    const child = React.Children.only(this.props.children);
    const style = Object.assign({}, child.props.style, { opacity: 0 });
    return React.cloneElement(child, { style: style, ref: el => (this.el = el) });
  }
}
