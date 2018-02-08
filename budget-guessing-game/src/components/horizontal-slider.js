import React, { Component } from "react";
import Draggable from "react-draggable";
import { map, snapWithinRange } from "../utils/math";

export default class Slider extends Component {
  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 0.5,
    trackHeight: 10,
    sliderElement: null,
    trackColor: "#000000"
  };

  constructor(props) {
    super(props);

    this.state = { pixelWidth: 0 };
    this.parent = null;
  }

  updateWidth = () => {
    this.setState({ pixelWidth: this.parent.getBoundingClientRect().width });
  };

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  onDrag = (e, position) => {
    const { min, max, step, onChange } = this.props;
    const { pixelWidth } = this.state;

    if (pixelWidth === 0) onChange(min);

    // react-dragged isn't great with sliders that have a width with a decimal part, so custom
    // stepping time. Note: snap after mapping to avoid floating point rounding issues when the user
    // is working with an int step size.
    let value = map(position.x, 0, pixelWidth, min, max);
    value = snapWithinRange(value, step, min, max);

    if (String(value).length > 10) debugger;
    onChange(value);
  };

  render() {
    let { min, max, step, value, trackHeight, trackColor } = this.props;
    const { pixelWidth } = this.state;
    const range = max - min;
    const pixelStep = step * (pixelWidth / range);

    // Enforce min/max range and step, even for the initial value
    let x = map(value, min, max, 0, pixelWidth);
    x = snapWithinRange(x, pixelStep, 0, pixelWidth);

    return (
      <div className="slider" ref={ref => (this.parent = ref)} style={{ position: "relative" }}>
        <Draggable axis="x" bounds="parent" position={{ x, y: 0 }} onDrag={this.onDrag}>
          <div className="slider__thumb" style={{ display: "inline-block", width: 0 }}>
            {this.props.sliderElement}
          </div>
        </Draggable>

        <div
          className="slider__track"
          style={{
            height: `${trackHeight}px`,
            backgroundColor: trackColor
          }}
        />
      </div>
    );
  }
}
