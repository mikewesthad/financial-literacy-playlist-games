import React from "react";

export default function AvatarPortrait({ Svg, name, ...props } = {}) {
  return (
    <figure className="avatar-portrait" {...props}>
      <Svg className="avatar-portrait__image" />
      {/* <figcaption className="avatar-portrait__caption">{name}</figcaption> */}
    </figure>
  );
}
