import { useState, useEffect, useCallback } from 'react';
import mainPictures from "../data/MainPictures";
import './ImageToggler.css';

// ImageToggler component displays a slideshow of images with different transition effects
function ImageToggler({ animation }) {
  const length = mainPictures.length;
  const [index, setIndex] = useState(0); // current image index
  const [imageState, setImageState] = useState(''); // state of the image (e.g., "slide-out-img", "flip-in-img", etc.)

  // Basic transition effect: slide out and slide in
  const basicTransition = useCallback(() => {
    setImageState('slide-out-img');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
      setImageState('slide-in-img');
      setTimeout(() => {
        setImageState('');
      }, 1000);
    }, 990);
  }, [index, length]);

  // Normal transition effect: flip out and flip in
  const normalTransition = useCallback(() => {
    setImageState('flip-out-img');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
      setImageState('flip-in-img');
      setTimeout(() => {
        setImageState('');
      }, 1000);
    }, 990);
  }, [index, length]);

  // Extreme transition effect: spin out and spin in
  const extremeTransition = useCallback(() => {
    setImageState('spin-out-img');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
      setImageState('spin-in-img');
      setTimeout(() => {
        setImageState('');
      }, 600);
    }, 590);
  }, [index, length]);

  // Trigger the transition effect based on the animation prop
  const transition = () => {
    if (animation === 'None') {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    }
    else if (animation === 'Low') {
      basicTransition();
    } else if (animation === 'Normal') {
      normalTransition();
    } else if (animation === 'Extreme') {
      extremeTransition();
    }
  }

  // Set up an interval to trigger the transition effect every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
        transition()
    }, 8000);
    return () => clearInterval(interval); // Clear the interval when the component unmounts or re-renders
  }, []);

  return (
    <div className="overflow-hidden w-full px-1">
      <img className={`base-img ${imageState}`} src={mainPictures[index]} alt="PersonalPhoto" />
    </div>
  );
}

export default ImageToggler;