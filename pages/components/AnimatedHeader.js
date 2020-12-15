import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";

function AnimateHeader() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#FFFFFF",
    },
    enter: [
      { opacity: 1, height: 125, innerHeight: 125 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#FFFFFF" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    update: { color: "#FFFFFF" },
  });
  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    ref.current.push(
      setTimeout(() => set(["Daniel Osornio"]), 1500),
      setTimeout(() => set(["Software Engineer"]), 1000)
    );
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item text-center flex justify-center"
          key={key}
          style={rest}
        >
          <animated.h1
            className="text-4xl text-center"
            style={{
              overflow: "hidden",
              height: innerHeight,
              margin: "auto",
            }}
          >
            {item}
          </animated.h1>
        </animated.div>
      ))}
    </div>
  );
}

export default AnimateHeader;
