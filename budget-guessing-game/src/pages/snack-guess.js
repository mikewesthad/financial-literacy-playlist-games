import React, { Component } from "react";
import Slider from "../components/horizontal-slider";
import { Link } from "react-router-dom";
import { snapWithinRange } from "../utils/math";

import sodaIcon from "../images/soda-pin.svg";

const range = { min: 0, max: 900, step: 50 };

export default class LunchGuess extends Component {
  constructor(props) {
    super(props);

    let initialValue = (range.max - range.min) / 2 + range.min;
    initialValue = snapWithinRange(initialValue, range.step, range.min, range.max);
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
    const { nextRoute } = this.props;

    return (
      <div className="fullscreen-container">
        <div className="content text-center">
          <div className="question section">
            <p>
              How much do you think it would cost if you bought a snack and soda every day for one
              year?
            </p>
          </div>
          <div className="slider-container section">
            <Slider
              min={range.min}
              max={range.max}
              step={range.step}
              value={sliderValue}
              onChange={this.onSliderChange}
              sliderElement={
                <img
                  src={sodaIcon}
                  draggable={false}
                  className={"slider__draggable-image"}
                  alt=""
                />
              }
              trackColor="#f57e25"
            />
            <div className="slider__labels">
              <div className="slider__label-min">${range.min}</div>
              <div className="slider__label-max">${range.max}</div>
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
