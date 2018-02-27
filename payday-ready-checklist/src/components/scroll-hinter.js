import React, { Component } from "react";
import throttle from "lodash.throttle";

// Could be made more specific and hint to scroll only when a target element is not visible:
// https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
export default class ScrollHinter extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };

    window.addEventListener("scroll", this.checkIfScrollAvailable);
    window.addEventListener("resize", this.checkIfScrollAvailable);
  }

  componentDidMount() {
    setTimeout(this.checkIfScrollAvailable, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkIfScrollAvailable);
    window.removeEventListener("resize", this.checkIfScrollAvailable);
  }

  checkIfScrollAvailable = throttle(
    () => {
      const rootElement = document.documentElement;
      const bottomOfWindow = rootElement.scrollTop + window.innerHeight;
      const totalPageHeight = rootElement.offsetHeight;

      this.setState({ visible: bottomOfWindow < totalPageHeight });
    },
    250,
    { leading: true }
  );

  render() {
    return this.state.visible ? <div className="scroll-hint hover-animation">Scroll</div> : null;
  }
}
