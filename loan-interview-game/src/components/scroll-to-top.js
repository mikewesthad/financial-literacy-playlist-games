import { Component } from "react";
import { withRouter } from "react-router-dom";
import { TweenLite } from "gsap";
import "gsap/ScrollToPlugin";

class ScrollToTop extends Component {
  tween = null;

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.tween = TweenLite.to(window, 0.5, { scrollTo: 0 });
    }
  }

  componentWillUnmount() {
    if (this.tween) this.tween.kill();
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
