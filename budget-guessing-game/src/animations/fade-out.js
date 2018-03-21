/**
 * WIP, but no longer needed currently.
 *
 * References:
 * https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a
 * https://codesandbox.io/s/k52zro4k3o
 * https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a
 */

import PropTypes from "prop-types";
import React, { Component } from "react";
import { Transition } from "react-transition-group";

export default class FadeOut extends Component {
  static defaultProps = {
    duration: 1000
  };

  constructor(props) {
    super(props);
  }

  renderByState = state => {
    const { duration, children, ...props } = this.props;
    const style = {
      opacity: state === "exiting" ? 0 : 1,
      transition: `opacity ${duration}ms ease-in-out`
    };
    return <div style={style}>{children}</div>;
  };

  render() {
    console.log(this.props.in);
    const { duration, children, ...props } = this.props;
    return (
      <Transition {...props} timeout={duration}>
        {this.renderByState}
      </Transition>
    );
  }
}
