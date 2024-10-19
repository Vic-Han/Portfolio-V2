// AnimationHelper.js


// Animation durations for different animation classes
const animationDurations = {
  'fade-in': 1200,
  'fade-in-top': 800,
  'pop-in': 800,
  'scale-in': 800,
  'smooth-reveal': 1100,
};

/**
* Animate content boxes with a specified animation class and duration
* @param {string} animationClass - The CSS class to use for the animation
* @param {number} stagger - The delay between each box animation
* @returns {function} - A function that animates the content boxes
*/
export const animateContentBoxes = (animationClass, stagger) => {
  /**
   * @param {array} boxAnimationStates - The current animation states of the boxes
   * @param {function} setBoxAnimationStates - The function to update the box animation states
   * @param {function} callback - The function to call after the animation is complete
   */


  return (boxAnimationStates, setBoxAnimationStates, callback) => {
    for (let i = 0; i < boxAnimationStates.length; i++) {
      setTimeout(() => {
        setBoxAnimationStates((prevState) => {
          const newAnimationStates = [...prevState];
          newAnimationStates[i] = animationClass;
          return newAnimationStates;
        });
        setTimeout(() => {
          setBoxAnimationStates((prevState) => {
            const newAnimationStates = [...prevState];
            newAnimationStates[i] = '';
            return newAnimationStates;
          });
          if (callback) {
            callback(i)
          }
        }, animationDurations[animationClass]);
      }, i * stagger);
    }
    return animationDurations[animationClass]
  };
};