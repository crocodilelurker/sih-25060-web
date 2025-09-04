export const SlideRight = (delay) => {
  return {
    hidden: {
      opacity:0,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease:"easeOut"
      }
    }
  }
}