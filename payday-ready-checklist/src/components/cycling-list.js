import React, { Component } from "react";
import PropTypes from "prop-types";
import noop from "../utils/noop";
import { TweenLite } from "gsap";

// These apply BEM-style class names:
// cycling-list, cycling-list--disabled
// cycling-list__item, cycling-list__item--answer

export class CyclingItem extends Component {
  static defaultProps = {
    isAnswer: false,
    isSelected: false,
    style: {},
    disabled: false
  };

  constructor(props) {
    super(props);
    this.listItem = null;
  }

  render() {
    const { isSelected, children, style, isAnswer, className, ...otherProps } = this.props;
    const itemStyle = Object.assign({}, style, {
      position: isSelected ? "relative" : "absolute",
      top: 0,
      left: "50%",
      display: "inline-block"
    });
    const bemName = "cycling-list__item";
    const classes = `${className || ""} ${bemName} ${isAnswer ? `${bemName}--answer` : ""}`;
    return (
      <li
        key={children}
        ref={ref => (this.listItem = ref)}
        className={classes}
        style={itemStyle}
        {...otherProps}
      >
        {children}
      </li>
    );
  }
}

export class CyclingList extends Component {
  static defaultProps = {
    onChange: noop,
    style: {}
  };

  static propTypes = {
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0, solved: false };

    this.tweens = [];
    this.listElement = null;
    this.underlineElement = null;
    this.listTween = null;
    this.previousItemTween = null;
    this.currentItemTween = null;
    this.underlineTween = null;
  }

  componentDidMount() {
    const { selectedIndex } = this.state;

    // Initialize everything except for the current link text to be clipped & resize the list to
    // match the width of the list items
    let maxItemWidth = 0;
    this.cyclingItems.forEach(cyclingItem => {
      const listItem = cyclingItem.listItem;
      const itemWidth = listItem.getBoundingClientRect().width;
      maxItemWidth = Math.max(itemWidth, maxItemWidth);
      const isSelected = cyclingItem.props.isSelected;
      TweenLite.set(listItem, { xPercent: -50, yPercent: isSelected ? 0 : -100 });
      if (isSelected) TweenLite.set(this.underlineElement, { width: itemWidth });
    });
    TweenLite.set(this.listElement, { width: maxItemWidth });

    // If the puzzle is already solved by mount, fire off an onChange
    const isSolved = this.cyclingItems[selectedIndex].props.isAnswer;
    if (isSolved) this.props.onChange(true);
  }

  componentWillUnmount() {
    if (this.previousItemTween) this.previousItemTween.kill();
    if (this.currentItemTween) this.currentItemTween.kill();
    if (this.underlineTween) this.underlineTween.kill();
    if (this.listTween) this.listTween.kill();
  }

  componentDidUpdate() {
    const { selectedIndex } = this.state;
    const lastIndex = this.cyclingItems.length - 1;
    const prevIndex = selectedIndex - 1 >= 0 ? selectedIndex - 1 : lastIndex;
    const lastListItem = this.cyclingItems[prevIndex].listItem;
    const currentListItem = this.cyclingItems[selectedIndex].listItem;

    if (this.props.disabled) {
      this.listTween = TweenLite.to(this.listElement, 0.5, {
        width: currentListItem.getBoundingClientRect().width
      });
    }

    // Don't run a tween if the selectedIndex hasn't changed from the initial value
    if (!this.currentItemTween && selectedIndex === 0) return;

    // Make sure that the current list item has actually changed before starting any new animations
    if (this.currentItemTween && this.currentItemTween.target === currentListItem) return;

    // Animate the previous element out of view and the current one into view
    this.previousItemTween = TweenLite.to(lastListItem, 0.5, { yPercent: -100 });
    TweenLite.set(currentListItem, { yPercent: 100 });
    this.currentItemTween = TweenLite.to(currentListItem, 0.5, { yPercent: 0 });
    this.underlineTween = TweenLite.to(this.underlineElement, 0.5, {
      width: currentListItem.getBoundingClientRect().width
    });
  }

  onClick = () => {
    this.setState(prevState => {
      const lastIndex = this.cyclingItems.length - 1;
      const nextIndex = prevState.selectedIndex < lastIndex ? prevState.selectedIndex + 1 : 0;
      const isSolved = this.cyclingItems[nextIndex].props.isAnswer;
      this.props.onChange(isSolved);
      return { selectedIndex: nextIndex, isSolved };
    });
  };

  render() {
    const { selectedIndex } = this.state;
    const { children, style, className, disabled, ...otherProps } = this.props;
    this.cyclingItems = [];

    const bemName = "cycling-list";
    const classes = `${className || ""} ${bemName} ${disabled ? `${bemName}--disabled` : ""}`;

    const newChildren = React.Children.map(children, (child, i) => {
      if (child.type !== CyclingItem) return child;

      return React.cloneElement(child, {
        isSelected: selectedIndex === i,
        ref: ref => (this.cyclingItems[i] = ref)
      });
    });

    const containerStyle = Object.assign({}, style, {
      position: "relative",
      top: 0,
      left: 0,
      overflowY: "hidden" // Ensure y translation of -100% or 100% culls the text from view
    });

    return (
      <ul
        ref={ref => (this.listElement = ref)}
        style={containerStyle}
        className={classes}
        onClick={disabled ? noop : this.onClick}
        {...otherProps}
      >
        {newChildren}

        <span className={bemName + "__underline"} ref={ref => (this.underlineElement = ref)} />
      </ul>
    );
  }
}
