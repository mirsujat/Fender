import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CustomButton from "../CustomButton/CustomButton";
import "./card.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = () => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  let animClass = {
    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
    transform: x
      .interpolate({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
      })
      .interpolate((x) => `scale(${x})`),
  };

  return (
    <div className="product-card">
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div className="product-card-footer">
          <div className="name">Product Name</div>
          <div className="price">$ 45</div>
        </div>
      </animated.div>
      <div className="buy-now" onClick={() => toggle(!state)}>
        <animated.div style={animClass}>
          <CustomButton>BUY NOW</CustomButton>
        </animated.div>
      </div>
    </div>
  );
};

export default Card;
