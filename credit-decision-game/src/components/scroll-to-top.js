import { Component } from "react";
import { TweenLite } from "gsap";
import "gsap/ScrollToPlugin";

class ScrollToTop extends Component {
  tween = null;

  componentDidMount() {
    this.scrollToTop();
  }

  componentDidUpdate(prevProps) {
    if (this.props.scrollKey !== prevProps.scrollKey) this.scrollToTop();
  }

  scrollToTop() {
    this.tween = TweenLite.to(window, 0.5, { scrollTo: 0 });
  }

  componentWillUnmount() {
    if (this.tween) this.tween.kill();
  }

  render() {
    return null;
  }
}

export default ScrollToTop;
