import { Component } from "react";
import ReactGA from "react-ga";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize(this.props.trackingId);
  }

  getNormalizedPathname(pathname) {
    const { basePath } = this.props;
    if (pathname.startsWith(basePath)) return pathname.replace(basePath, "");
    else return pathname;
  }

  componentDidMount() {
    ReactGA.pageview(this.getNormalizedPathname(this.props.location.pathname));
    ReactGA.event({ category: "Game", action: "Game Started" });
  }

  componentDidUpdate(prevProps) {
    const prevPathname = prevProps.location.pathname;
    const { location, gameStartRoute, gameEndRoute } = this.props;
    const pathname = this.getNormalizedPathname(location.pathname);

    if (prevPathname !== location.pathname) {
      ReactGA.pageview(pathname);
      if (pathname === gameStartRoute) {
        ReactGA.event({ category: "Game", action: "Game Restarted" });
      } else if (pathname === gameEndRoute) {
        ReactGA.event({ category: "Game", action: "Game Completed" });
      }
    }
  }

  render() {
    return null;
  }
}
