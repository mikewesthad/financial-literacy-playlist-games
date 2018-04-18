import { Component } from "react";
import resizeEvent from "./resize-event";

export default class SizeTracker extends Component {
  static onResizeBound = false;

  state = {
    width: 0,
    height: 0
  };

  updateSize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidMount() {
    this.updateSize();
    resizeEvent.addListener(this.updateSize);
  }

  componentWillUnmount() {
    resizeEvent.removeListener(this.updateSize);
  }

  render() {
    return this.props.render(this.state);
  }
}
