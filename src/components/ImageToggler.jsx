// ImageToggler.jsx
import { useState, useEffect, useCallback, useContext } from 'react';
import './ImageToggler.css';
import { GlobalContext } from '../context/GlobalContext';
/**
 * @component ImageToggler
 * @description
 * A circular image slideshow component that automatically cycles through provided images
 * with configurable transition animations.
 * 
 * @properties
 * Accessed through GlobalContext:
 * - animation: 'Minimal' | 'Normal' | 'Extreme'
 * - mainPictures: string[] - Array of images
 * 
 * @animations
 * Three transition modes:
 * - Minimal: Simple image change
 * - Normal: Slide-out/slide-in animation
 * - Extreme: 3D flip animation
 * 
 * @timing
 * - Auto-transitions every 6.5 seconds
 * - Animation duration: ~1.8 seconds
 * 
 * @styling
 * - Responsive sizing
 * - Smooth transitions with CSS animations
 */

function ImageToggler() {
  const settingsStates = useContext(GlobalContext);
  const { animation, mainPictures } = settingsStates;
  const length = mainPictures.length;
  const [index, setIndex] = useState(0); 
  const [imageState, setImageState] = useState(''); 

  const normalTransition = useCallback(() => {
    setImageState('slide-out-img');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
      setImageState('slide-in-img');
      setTimeout(() => {
        setImageState('');
      }, 900);
    }, 890);
  }, [index, length]);

  const extremeTransition = useCallback(() => {
    setImageState('flip-out-img');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
      setImageState('flip-in-img');
      setTimeout(() => {
        setImageState('');
      }, 900);
    }, 890);
  }, [index, length]);

  
  const transition = () => {
    if (animation === 'Minimal') {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    }
    else if (animation === 'Normal') {
      normalTransition();
    } else if (animation === 'Extreme') {
      extremeTransition();
    } 
  }

  useEffect(() => {
    const interval = setInterval(() => {
        transition()
    }, 6500);
    return () => clearInterval(interval); 
  }, [animation]);


  return (
    <div className="overflow-hidden w-full px-1">
      <img className={`base-img ${imageState}`} src={mainPictures[index]} alt="PersonalPhoto" />
    </div>
  );
}

export default ImageToggler;

