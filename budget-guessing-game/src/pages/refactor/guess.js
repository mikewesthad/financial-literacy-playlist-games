/**
 * When refactoring, use this component.
 */

import React, { Component } from "react";
import Slider from "../components/horizontal-slider";
import { Link } from "react-router-dom";
import { snapWithinRange } from "../utils/math";
import PropTypes from "prop-types";

const SliderImage = src => (
  <img
    src={src}
    draggable={false}
    style={{
      height: "100px",
      userDrag: "none",
      userSelect: "none",
      cursor: "move",
      transform: "translateX(-50%)",
      verticalAlign: "top"
    }}
    alt=""
  />
);

export default class Guess extends Component {
  static defaultProps = {
    initialValue: null
  };

  static propTypes = {
    question: PropTypes.func.isRequired,
    sliderRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      step: PropTypes.number.isRequired
    }).isRequired,
    initialValue: PropTypes.number,
    sliderImageSrc: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    nextRoute: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    let { initialValue, sliderRange } = props;
    initialValue =
      initialValue !== null
        ? initialValue
        : (sliderRange.max - sliderRange.min) / 2 + sliderRange.min;
    initialValue = snapWithinRange(
      initialValue,
      sliderRange.step,
      sliderRange.min,
      sliderRange.max
    );
    this.state = {
      sliderValue: initialValue
    };
  }

  onSliderChange = value => {
    this.setState({ sliderValue: value });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.sliderValue);
  };

  render() {
    const { sliderValue } = this.state;
    const { nextRoute, sliderImageSrc, sliderRange, question } = this.props;

    return (
      <div className="fullscreen-container">
        <div className="content text-center">
          <div className="question section">{question()}</div>
          <div className="slider-container section">
            <Slider
              min={sliderRange.min}
              max={sliderRange.max}
              step={sliderRange.step}
              value={sliderValue}
              onChange={this.onSliderChange}
              sliderElement={SliderImage(sliderImageSrc)}
              trackColor="#f57e25"
            />
            <div className="slider__labels">
              <div className="slider__label-min">${sliderRange.min}</div>
              <div className="slider__label-max">${sliderRange.max}</div>
            </div>
          </div>
          <div className="guess section">
            <div>${sliderValue}</div>
          </div>
          <div className="submit section">
            <Link onClick={this.onSubmit} to={nextRoute} className="button-link">
              Submit →
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
