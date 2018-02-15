import React from "react";

export function recursiveMapChildren(children, mapFunction) {
  return React.Children.map(children, child => {
    // Child could be a string
    if (!React.isValidElement(child)) {
      return child;
    }

    // Child may be an empty (or void) element
    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMapChildren(child.props.children, mapFunction)
      });
    }

    return mapFunction(child);
  });
}
