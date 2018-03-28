import React, { Component } from "react";
import CloseIcon from "../images/close-icon.svg";

export default class Modal extends Component {
  render() {
    const { children, isOpen, onClose, className } = this.props;

    if (!isOpen) return null;

    return (
      <div className="modal">
        <div className="modal__overlay" onClick={onClose} />
        <div className={`modal__content ${className || ""}`}>
          <CloseIcon className="modal__close" onClick={onClose} />
          {children}
        </div>
      </div>
    );
  }
}
