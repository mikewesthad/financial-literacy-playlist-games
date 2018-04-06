import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeInSequence, SequenceElement } from "../components/fade-in-sequence";

export default class ReviewNotes extends Component {
  componentDidMount() {
    if (this.props.gameData.playerName === "") {
      this.props.gameData.setPlayerName("Ambrose");
    }
  }

  render() {
    const { nextRoute } = this.props;
    return (
      <div className="fullscreen-container">
        <FadeInSequence defaultDuration={1} defaultDelay={1}>
          <div className="content">
            <div className="section">
              <p>
                <SequenceElement delay={0}>
                  <span>Things have been 👍👍 at work recently. </span>
                </SequenceElement>
                <SequenceElement>
                  <span>
                    Your boss was profiled in the Chicago Tribune. She asked you to stop by her
                    office today.
                  </span>
                </SequenceElement>
              </p>
            </div>

            <SequenceElement>
              <div className="section text-center">
                <Link to={nextRoute} className="button-link">
                  Go to Office
                </Link>
              </div>
            </SequenceElement>
          </div>
        </FadeInSequence>
      </div>
    );
  }
}
