import { useState, useEffect, useCallback, useContext } from 'react';
import './ImageToggler.css';
import { GlobalContext } from '../context/GlobalContext';

// ImageToggler component displays a slideshow of images with different transition effects
function ImageToggler() {
  const settingsStates = useContext(GlobalContext);
  const { animation, mainPictures } = settingsStates;
  const length = mainPictures.length;
  const [index, setIndex] = useState(0); // current image index
  const [imageState, setImageState] = useState(''); // state of the image (e.g., "slide-out-img", "flip-in-img", etc.)

  // Basic transition effect: slide out and slide in
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

  // Normal transition effect: flip out and flip in
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

  
  // Trigger the transition effect based on the animation prop
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

  // Set up an interval to trigger the transition effect every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
        transition()
    }, 6500);
    return () => clearInterval(interval); // Clear the interval when the component unmounts or re-renders
  }, [animation]);


  return (
    <div className="overflow-hidden w-full px-1">
      <img className={`base-img ${imageState}`} src={mainPictures[index]} alt="PersonalPhoto" />
    </div>
  );
}

export default ImageToggler;

// import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
// import './ImageToggler.css';
// import { GlobalContext } from '../context/GlobalContext';

// const ImageToggler = React.memo(function ImageToggler() {
//   const settingsStates = useContext(GlobalContext);
//   const { animation, mainPictures } = settingsStates;
//   const length = mainPictures.length;
//   const [index, setIndex] = useState(0);
//   const [imageState, setImageState] = useState('');
//   const [isPlaying, setIsPlaying] = useState(true);
//   const intervalRef = useRef(null);

//   const preloadImages = useCallback(() => {
//     mainPictures.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, [mainPictures]);

//   useEffect(() => {
//     preloadImages();
//   }, [preloadImages]);

//   const basicTransition = useCallback(() => {
//     setImageState('slide-out-img');
//     setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % length);
//       setImageState('slide-in-img');
//       setTimeout(() => {
//         setImageState('');
//       }, 1000);
//     }, 990);
//   }, [length]);

//   const normalTransition = useCallback(() => {
//     setImageState('flip-out-img');
//     setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % length);
//       setImageState('flip-in-img');
//       setTimeout(() => {
//         setImageState('');
//       }, 1000);
//     }, 990);
//   }, [length]);

//   const extremeTransition = useCallback(() => {
//     setImageState('spin-out-img');
//     setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % length);
//       setImageState('spin-in-img');
//       setTimeout(() => {
//         setImageState('');
//       }, 600);
//     }, 590);
//   }, [length]);

//   const transition = useCallback(() => {
//     if (animation === 'Minimal') {
//       setIndex((prevIndex) => (prevIndex + 1) % length);
//     } else if (animation === 'Normal') {
//       basicTransition();
//     } else if (animation === 'Extreme') {
//       normalTransition();
//     }
//   }, [animation, basicTransition, normalTransition, length]);

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(() => {
//         transition();
//       }, 8000);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying, transition]);

//   const handlePrevious = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + length) % length);
//   };

//   const handleNext = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % length);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   return (
//     <div className="relative w-full px-1">
//       <div className="overflow-hidden">
//         <img 
//           className={`base-img ${imageState}`} 
//           src={mainPictures[index]} 
//           alt={`Personal photo ${index + 1} of ${length}`} 
//           onError={(e) => {e.target.src = '/path/to/fallback/image.jpg'}}
//         />
//       </div>
//       <div className="controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
//         <button 
//           onClick={handlePrevious}
//           aria-label="Previous image"
//           className="p-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button 
//           onClick={togglePlayPause}
//           aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//           className="p-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//         >
//           {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//         </button>
//         <button 
//           onClick={handleNext}
//           aria-label="Next image"
//           className="p-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//       <div className="progress absolute bottom-0 left-0 w-full flex justify-center space-x-2 p-2">
//         {mainPictures.map((_, i) => (
//           <div 
//             key={i} 
//             className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`}
//             aria-hidden="true"
//           />
//         ))}
//       </div>
//     </div>
//   );
// });

// export default ImageToggler;




