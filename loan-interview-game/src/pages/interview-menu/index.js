import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/modal";
import Hannah from "../../images/avatars/hannah.svg";
import Anthony from "../../images/avatars/anthony.svg";
import Taylor from "../../images/avatars/taylor.svg";
import "./style.css";

export default class InterviewMenu extends Component {
  state = {
    modalOpen: false
  };

  goToDecisionPage = () => {
    const { numBorrowersInterviewed, history } = this.props;
    if (numBorrowersInterviewed === 3) {
      history.push("/make-decision");
    } else {
      this.showModal();
    }
  };

  showModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { numBorrowersInterviewed } = this.props;
    const { modalOpen } = this.state;

    const heading = `Who do you want to interview ${
      numBorrowersInterviewed > 0 ? "now" : "first"
    }?`;

    return (
      <div className="fullscreen-container">
        <Modal isOpen={modalOpen} onClose={this.closeModal} className="text-center">
          <h2>You can’t make a decision until you interview everybody.</h2>
          <button onClick={this.closeModal} className="button-link">
            Got it!
          </button>
        </Modal>

        <div className="content">
          <h1>{heading}</h1>
          <div className="interview-choices">
            <div className="interview-choices__choice text-center">
              <Link to="/interview-hannah">
                <Hannah className="button-image" />
              </Link>
              <Link className="button-link button-link--hannah" to="/interview-hannah">
                Hannah
              </Link>
            </div>
            <div className="interview-choices__choice text-center" to="/interview-anthony">
              <Link to="/interview-anthony">
                <Anthony className="button-image" />
              </Link>
              <Link className="button-link button-link--anthony" to="/interview-anthony">
                Anthony
              </Link>
            </div>
            <div className="interview-choices__choice text-center" to="/interview-taylor">
              <Link to="/interview-taylor">
                <Taylor className="button-image" />
              </Link>
              <Link className="button-link button-link--taylor" to="/interview-taylor">
                Taylor
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1>Or, ready to make a decision?</h1>
            <div className="decision-choices">
              <div className="decision-choices__choice">
                <Link className="button-link" to="/review-notes">
                  Review Notes
                </Link>
              </div>
              <div className="decision-choices__choice">
                <button className="button-link" onClick={this.goToDecisionPage}>
                  Make Decision
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
