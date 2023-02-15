const AnimationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const AnimationContainerLong = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const AnimationRotate = {
  show: { opacity: 1, x: 0, rotate: 0 },
  hidden: { opacity: 0, x: -300, rotate: 140 },
};

const AnimationLeftX = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -300 },
};

const AnimationRightX = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 300 },
};
const AnimationTopY = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 300 },
};
const AnimationBottomY = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -300 },
};
const AnimationOpacity = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const AnimationScale = {
  show: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const AnimationScaleLeftX = {
  show: { opacity: 1, scale: 1, x: 0 },
  hidden: { opacity: 0, scale: 0, x: -700 },
};

const AnimationPage = {
  show: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};
const PageTranstition = {
  duration: 0.3,
  ease: 'easeInOut',
};
const AnimationCardLeft = {
  show: { opacity: 1, x: 0, rotate: 0 },
  hidden: { opacity: 0, x: -600, rotate: 70 },
};
const AnimationCardRight = {
  show: { opacity: 1, x: 0, rotate: 0 },
  hidden: { opacity: 0, x: 600, rotate: 70 },
};

export {
  AnimationBottomY,
  AnimationTopY,
  AnimationRightX,
  AnimationLeftX,
  AnimationContainer,
  AnimationContainerLong,
  AnimationOpacity,
  AnimationScale,
  AnimationScaleLeftX,
  AnimationPage,
  PageTranstition,
  AnimationRotate,
  AnimationCardLeft,
  AnimationCardRight,
};
