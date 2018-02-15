import React, { Component } from "react";
import PropTypes from "prop-types";
import noop from "../utils/noop";
import { CyclingList } from "./cycling-list";
import { recursiveMapChildren } from "../utils/react-utils";

// This adds an additional BEM-style state to the cycling-list:
// cycling-list--solved

export default class CyclingPuzzle extends Component {
  static defaultProps = {
    onChange: noop,
    onSolve: noop,
    disableOnSolve: false
  };

  static propTypes = {
    onChange: PropTypes.func,
    onSolve: PropTypes.func,
    disableOnSolve: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = { solvedChildIndices: [], allSolved: false };
    this.numCyclingLists = 0;
  }

  onChildChanged = (child, index, isSolved) => {
    // Allow child CyclingLink onChange prop to still be used
    child.props.onChange(isSolved);

    this.setState(prevState => {
      let solvedIndices;
      const prevSolvedIndices = prevState.solvedChildIndices;
      const indexInPrevSolved = prevSolvedIndices.includes(index);

      if (isSolved && !indexInPrevSolved) {
        solvedIndices = [...prevSolvedIndices, index];
      } else if (!isSolved && indexInPrevSolved) {
        solvedIndices = prevSolvedIndices.filter(i => i !== index);
      } else {
        solvedIndices = prevSolvedIndices;
      }

      const allSolved = solvedIndices.length === this.numCyclingLists;

      if (allSolved) this.props.onSolve();
      this.props.onChange(allSolved);

      return { solvedChildIndices: solvedIndices, allSolved };
    });
  };

  render() {
    const { allSolved } = this.state;

    this.numCyclingLists = 0;

    const newChildren = recursiveMapChildren(this.props.children, child => {
      if (child.type !== CyclingList) return child;

      const classes = `${child.className || ""} ${allSolved ? "cycling-list--solved" : ""}`;

      const newChild = React.cloneElement(child, {
        className: classes,
        disabled: allSolved,
        onChange: this.onChildChanged.bind(null, child, this.numCyclingLists)
      });

      this.numCyclingLists++;

      return newChild;
    });

    return newChildren;
  }
}
