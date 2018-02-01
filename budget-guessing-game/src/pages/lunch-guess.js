import React, { Component } from "react";
import Slider from "../components/horizontal-slider";
import { Link } from "react-router-dom";
import lunchIcon from "../images/lunch-pin.svg";
import { map } from "../utils";

const range = { min: 1, max: 7000 };

// https://freeiconshop.com/icon/burger-icon-flat/
const LunchSliderImage = () => (
  <img
    src={lunchIcon}
    draggable={false}
    style={{
      height: "100px",
      userDrag: "none",
      userSelect: "none",
      transform: "translateX(-50%)",
      verticalAlign: "top"
    }}
    alt=""
  />
);

export default class LunchGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0.5
    };
  }

  getGuess() {
    return Math.round(map(this.state.sliderValue, 0, 1, range.min, range.max));
  }

  onSliderChange = value => {
    this.setState({ sliderValue: value });
  };

  onSubmit = () => {
    this.props.onSubmit(this.getGuess());
  };

  render() {
    const { sliderValue } = this.state;
    const { nextRoute } = this.props;
    const guess = this.getGuess();

    return (
      <div className="fullscreen-container">
        <div className="content">
          <div className="question section">
            <p>
              How much do you think it would cost - on average - if you ate out for lunch every day
              for one year?
            </p>
          </div>
          <div className="slider-container section">
            <Slider
              value={sliderValue}
              width={650}
              onChange={this.onSliderChange}
              sliderElement={LunchSliderImage()}
              trackColor="#f57e25"
            />
            <div className="slider__labels">
              <div className="slider__label-min">${range.min}</div>
              <div className="slider__label-max">${range.max}</div>
            </div>
          </div>
          <div className="guess section">
            <div>${guess}</div>
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
