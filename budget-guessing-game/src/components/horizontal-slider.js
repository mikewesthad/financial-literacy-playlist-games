import React, { Component } from "react";
import Draggable from "react-draggable";
import PropTypes from "prop-types";

export default class Slider extends Component {
  static defaultProps = {
    width: 0,
    value: 0.5,
    trackHeight: 10,
    sliderElement: null,
    trackColor: "#000000"
  };

  constructor(props) {
    super(props);
  }

  onDrag = (e, position) => {
    const { x } = position;
    const { width, onChange } = this.props;
    const value = width !== 0 ? x / width : 0;
    onChange(value);
  };

  render() {
    let { value, width, trackHeight, trackColor } = this.props;

    return (
      <div
        className="slider"
        style={{
          position: "relative",
          width: `${width}px`
        }}
      >
        <Draggable
          axis="x"
          bounds="parent"
          position={{ x: value * width, y: 0 }}
          onDrag={this.onDrag}
        >
          <div
            className="slider__thumb"
            style={{ display: "inline-block", width: 0 }}
          >
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
