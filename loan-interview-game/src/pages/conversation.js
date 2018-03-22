import React, { Component } from "react";
import { TweenLite, TimelineMax } from "gsap";
import "gsap/ScrollToPlugin";

export default class Conversation extends Component {
  constructor(props) {
    super(props);
    this.messageRefs = [];
    this.scrollTween = null;
    this.timeline = new TimelineMax();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollToBottom();

    const { messages } = this.props;
    const lastMessages = prevProps.messages;
    if (messages.length === lastMessages.length) return;

    this.timeline.clear();
    for (let i = 0; i < messages.length; i++) {
      if (i < lastMessages.length) {
        this.timeline.to(this.messageRefs[i], 1, { opacity: 0.5 }, 0);
      } else {
        const time = i === lastMessages.length ? 0 : "end";
        const fadeIn = TweenLite.fromTo(this.messageRefs[i], 1, { opacity: 0 }, { opacity: 1 });
        this.timeline.add(fadeIn, time);
      }
    }
  }

  scrollToBottom() {
    if (this.scrollTween) this.scrollTween.kill();
    this.scrollTween = TweenLite.to(this.messagesContainer, 1.5, {
      scrollTo: this.messagesContainer.scrollHeight
    });
  }

  componentWillUnmount() {
    if (this.scrollTween) this.scrollTween.kill();
    if (this.timeline) this.timeline.kill();
  }

  render() {
    const { messages } = this.props;

    this.messageRefs = [];

    return (
      <div className="conversation" ref={ref => (this.messagesContainer = ref)}>
        <div className="conversation__wrapper">
          {messages.map((node, i) => {
            const { id, speaker, text } = node;
            const classes = `conversation__message conversation__message--${
              speaker === "Player" ? "left" : "right"
            }`;
            return (
              <div key={id + i} className={classes} ref={ref => (this.messageRefs[i] = ref)}>
                <div
                  className={`conversation__bubble conversation__bubble--${speaker.toLowerCase()}`}
                >
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
