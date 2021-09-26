import React from "react";
import { useSpring, animated } from "react-spring";

import { makeStyles } from "@material-ui/core/styles";

import cube from "../Assets/background_images/Cube-Orange.png";
import donatPurple from "../Assets/background_images/donat-purple.png";
import pill from "../Assets/background_images/Pill.png";
import sphere from "../Assets/background_images/Sphere-White.png";
import pokeball from "../Assets/background_images/pokeball.png";
import headphones from "../Assets/background_images/headphones.png";
import code from "../Assets/background_images/code.png";
import code2 from "../Assets/background_images/code2.png";
import css from "../Assets/background_images/css.png";
import gear from "../Assets/background_images/gear.png";
import html from "../Assets/background_images/html.png";
import mail from "../Assets/background_images/mail.png";
import page from "../Assets/background_images/page.png";
import rocket from "../Assets/background_images/rocket.png";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    opacity: 0.9,
    filter:' drop-shadow(16px 16px 20px black) ',

  },

  cube: {
    position: "absolute",
    top: "-5%",
    left: "-5%",
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '3vw',
    height: '3vw',
    backgroundImage: `url(${cube})`,

  },
  donatPurple: {
    position: "absolute",
    bottom: "30%",
    left: "-10%",
    backgroundSize: "contain",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '5vw',
    height: '5vw',
    backgroundImage: `url(${donatPurple})`,
  },
  pill: {
    position: "absolute",
    bottom: "30%",
    right: "-5%",
    backgroundSize: "contain",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '10vw',
    height: '10vw',
    backgroundImage: `url(${pill})`,
  },
  sphere: {
    position: "absolute",
    top: -30,
    right:0,
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '3vw',
    height: '3vw',
    backgroundImage: `url(${sphere})`,
  },
  code: {
    position: "absolute",
    top: '5%',
    right: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '5vw',
    height: '3vw',
    backgroundImage: `url(${code})`,
  },
  headphones: {
    position: "absolute",
    bottom: '10%',
    left: "-5%",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '3vw',
    height: '3vw',
    backgroundImage: `url(${headphones})`,
  },
  pokeball: {
    position: "absolute",
    top: "10%",
    right: "10%",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '3vw',
    height: '3vw',
    backgroundImage: `url(${pokeball})`,
  },
  code2: {
    position: "absolute",
    bottom: "40%",
    left: "-10%",
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
    willChange: "transform",

    width: '5vw',
    height: '3vw',

    backgroundImage: `url(${code2})`,
  },
  css: {
    position: "absolute",
    bottom: "20%",
    left: "-10%",
    backgroundSize: "contain",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '3vw',
    height: '3vw',
    backgroundImage: `url(${css})`,
  },
  gear: {
    position: "absolute",
    top: "30%",
    right: 0,
    backgroundSize: "contain",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '5vw',
    height: '5vw',
    backgroundImage: `url(${gear})`,
  },
  html: {
    position: "absolute",
    bottom: "30%",
    left: "-5%",
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '5vw',
    height: '3vw',
    backgroundImage: `url(${html})`,
  },
  mail: {
    position: "absolute",
    top: "25%",
    right: "5%",
    zIndex: 10,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    willChange: "transform",

    width: '5vw',
    height: '3vw',

    backgroundImage: `url(${mail})`,
  },
  page: {
    position: "absolute",
    top: "30%",
    left: "-10%",
    zIndex: 100,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '5vw',
    height: '5vw',
    backgroundImage: `url(${page})`,
  },
  rocket: {
    position: "absolute",
    top: "15%",
    left: "-10%",
    zIndex: 100,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",
    willChange: "transform",
    width: '10vw',
    height: '10vw',
    backgroundImage: `url(${rocket})`,
  },
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;

const Parallax = () => {
  const classes = useStyles();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div>
      <div
        className={classes.container}
        onTouchMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className={classes.cube}
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className={classes.donatPurple}
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className={classes.pill}
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <animated.div
          className={classes.sphere}
          style={{ transform: props.xy.interpolate(trans4) }}
        />
        <animated.div
          className={classes.code}
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className={classes.headphones}
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className={classes.pokeball}
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <animated.div
          className={classes.code2}
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className={classes.css}
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className={classes.gear}
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <animated.div
          className={classes.html}
          style={{ transform: props.xy.interpolate(trans4) }}
        />
        <animated.div
          className={classes.mail}
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className={classes.page}
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className={classes.rocket}
          style={{ transform: props.xy.interpolate(trans3) }}
        />
      </div>
    </div>
  );
};

export default Parallax;
