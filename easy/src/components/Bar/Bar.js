import React, { useState, Fragment } from "react";
import { useSpring, animated } from "react-spring";
import range from "lodash-es/range";

import "./bar.css";

const items = range(1);
const interp = (i) => (r) =>
  `translate3d(0, ${20 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
const interpY = (i) => (r) =>
  `translate3d(0, ${8 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
const interpG = (i) => (r) =>
  `translate3d(0, ${20 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
export default function Bar() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });
  return (
    <Fragment>
      {items.map((i) => (
        <animated.div
          key={i}
          className="script-bf-box"
          style={{ transform: radians.interpolate(interp(i)) }}
        />
      ))}
      {items.map((i) => (
        <animated.div
          key={i}
          className="script-bf-box-y"
          style={{ transform: radians.interpolate(interpY(i)) }}
        />
      ))}
      {items.map((i) => (
        <animated.div
          key={i}
          className="script-bf-box-g"
          style={{ transform: radians.interpolate(interpG(i)) }}
        />
      ))}
    </Fragment>
  );
}
