import React, { Component } from "react";
import { formatAsIntCurrency } from "../utils/currency-conversion";
import { TweenLite } from "gsap";

export default class AnimateCurrency extends Component {
  static defaultProps = {
    delay: 0,
    duration: 1,
    startValue: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.startValue
    };

    this.gsapValue = props.startValue;
    this.el = null;
    this.tween = null;
  }

  componentDidMount() {
    const { endValue, duration, delay } = this.props;
    this.tween = TweenLite.to(this, duration, {
      gsapValue: endValue,
      onUpdate: this.onUpdate,
      delay: delay
    });
  }

  componentWillUnmount() {
    this.tween.kill();
  }

  onUpdate = () => {
    this.setState({ value: this.gsapValue });
  };

  render() {
    const { startValue, endValue, ...otherProps } = this.props;
    const intCurrency = formatAsIntCurrency(this.state.value);

    return (
      <div ref={el => (this.el = el)} {...otherProps}>
        {intCurrency}
      </div>
    );
  }
}
