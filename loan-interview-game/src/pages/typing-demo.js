import React from "react";

export default function TypingDemo() {
  return (
    <div className="fullscreen-container">
      <div className="content">
        <Typist cursor={{ show: false }} avgTypingDelay={75} stdTypingDelay={25}>
          I know these people, so I would be biased.<Typist.Delay ms={300} />.<Typist.Delay
            ms={300}
          />.<Typist.Delay ms={300} /> I want you to interview them for me.
        </Typist>
      </div>
    </div>
  );
}
