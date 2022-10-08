import React from "react";
import { useSpring, animated } from "react-spring";


// import cube from "../Assets/background_images/Cube-Orange.png";
// import donatPurple from "../Assets/background_images/donat-purple.png";
// import pill from "../Assets/background_images/Pill.png";
// import sphere from "../Assets/background_images/Sphere-White.png";
// import pokeball from "../Assets/background_images/pokeball.png";
// import headphones from "../Assets/background_images/headphones.png";
// import code from "../Assets/background_images/code.png";
// import code2 from "../Assets/background_images/code2.png";
// import css from "../Assets/background_images/css.png";
// import gear from "../Assets/background_images/gear.png";
// import html from "../Assets/background_images/html.png";
// import mail from "../Assets/background_images/mail.png";
// import rocket from "../Assets/background_images/rocket.png";

// const useStyles = makeStyles(() => ({
//   container: {
//     position: "absolute",
//     width: "100%",
//     height: "100vh",
//     opacity: 0.9,
//   },
//
//   cube: {
//     position: "absolute",
//     top: "12%",
//     left: "-5%",
//     backgroundSize: "cover",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "3vw",
//     height: "3vw",
//     backgroundImage: `url(${cube})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   donatPurple: {
//     position: "absolute",
//     top: "15%",
//     left: "-5%",
//     backgroundSize: "contain",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "5vw",
//     height: "5vw",
//     backgroundImage: `url(${donatPurple})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   rocket: {
//     position: "absolute",
//     top: "15%",
//     left: "-5%",
//     zIndex: 100,
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "5vw",
//     height: "5vw",
//     backgroundImage: `url(${rocket})`,
//     filter: " drop-shadow(10px 10px 10px black) ",
//   },
//
//   code: {
//     position: "absolute",
//     bottom: "40%",
//     left: "-8%",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "3vw",
//     height: "2vw",
//     backgroundImage: `url(${code})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   code2: {
//     position: "absolute",
//     bottom: "40%",
//     left: "-10%",
//     backgroundSize: "cover",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//
//     width: "3vw",
//     height: "2vw",
//
//     backgroundImage: `url(${code2})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   mail: {
//     position: "absolute",
//     bottom: "45%",
//     left: "-5%",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "2vw",
//     height: "2vw",
//
//     backgroundImage: `url(${mail})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   css: {
//     position: "absolute",
//     bottom: "40%",
//     left: "-8%",
//     backgroundSize: "contain",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "3vw",
//     height: "3vw",
//     backgroundImage: `url(${css})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//
//   html: {
//     position: "absolute",
//     bottom: "40%",
//     left: "-5%",
//     backgroundSize: "cover",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "3vw",
//     height: "2vw",
//     backgroundImage: `url(${html})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//
//   sphere: {
//     position: "absolute",
//     top: -30,
//     right: 0,
//     backgroundSize: "cover",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "3vw",
//     height: "3vw",
//     backgroundImage: `url(${sphere})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   pokeball: {
//     position: "absolute",
//     top: -30,
//     right: 0,
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "5vw",
//     height: "5vw",
//     backgroundImage: `url(${pokeball})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   pill: {
//     position: "absolute",
//     bottom: "40%",
//     right: "-5%",
//     backgroundSize: "contain",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "10vw",
//     height: "10vw",
//     backgroundImage: `url(${pill})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//   gear: {
//     position: "absolute",
//     bottom: "40%",
//     right: 0,
//     backgroundSize: "contain",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "5vw",
//     height: "5vw",
//     backgroundImage: `url(${gear})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
//
//   headphones: {
//     position: "absolute",
//     top: "40%",
//     right: 0,
//     backgroundSize: "contain",
//     backgroundPosition: "center",
//     backgroundRepeat: " no-repeat",
//     willChange: "transform",
//     width: "5vw",
//     height: "5vw",
//     backgroundImage: `url(${headphones})`,
//     filter: " drop-shadow(16px 16px 20px black) ",
//   },
// }));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 35}px,${y / 35}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 45}px,${y / 45}px,0)`;

const Parallax = () => {
  // const  = useStyles();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div>
      <div
        className='container'
        onTouchMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className='cube'
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className='donatPurple'
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          // className='rocket'
          style={{ transform: props.xy.interpolate(trans5) }}
        />
        <animated.div
          className='sphere'
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className='pokeball'
          style={{ transform: props.xy.interpolate(trans5) }}
        />
        <animated.div
          className='code'
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className='css'
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className="code2"
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <animated.div
          className='html'
          style={{ transform: props.xy.interpolate(trans4) }}
        />
        <animated.div
          className='mail'
          style={{ transform: props.xy.interpolate(trans5) }}
        />{" "}
        <animated.div
          className='pill'
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className='headphones'
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <animated.div
          className='gear'
          style={{ transform: props.xy.interpolate(trans5) }}
        />
        {/* <animated.div
          className='page'
          style={{ transform: props.xy.interpolate(trans2) }}
        /> */}
      </div>
    </div>
  );
};

export default Parallax;
