/**
 * @component ImageGallery
 * @description
 * A responsive image gallery component that displays images with scroll-based
 * visibility and configurable animations.
 * 
 * @properties
 * Accessed through GlobalContext:
 * - animation: 'Minimal' | 'Normal' | 'Extreme'
 * - casualPictures: string[] - Array of images
 * 
 * @animations
 * Three visibility modes:
 * - Minimal: All images visible immediately
 * - Normal: Fade-in with alternating directions
 * - Extreme: 3D flip animation on scroll
 * 
 * @layout
 * - Responsive image sizing
 * - Alternating left/right positioning
 * - Overlapping margins between images
 * 
 * @styling
 * - Tailwind classes for responsive design
 * - Intersection Observer for scroll-based animations
 */
import React, { useEffect, useRef, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ImageGallery = () => {
  
  const { animation, casualPictures } = useContext(GlobalContext);
  const [imageVisibility, setImageVisibility] = useState([]);
  const observer = useRef(null);
  const imageRefs = useRef([]);

 
  const animationClass = (index, animationLevel) =>{
    if (animationLevel === "Miminal"){
        return '';
    }
    if(animationLevel === "Normal"){
        return imageVisibility[index] ? index % 2 === 0 ? 'fade-in': 'fade-in-right' : ''
    }
    if(animationLevel === "Extreme"){
        return imageVisibility[index] ? "flip" : "before-flip"
    }
  }

  
  const negMargin = (index) =>{
    if(index === 0){
        return '-mb-40'
    }
    if(index === casualPictures.length - 1){
      return '-mt-40'
    }
    return '-my-40'
  }

  const setObserver = () => {
    const initialVisibility = new Array(casualPictures.length).fill(false);
    setImageVisibility(initialVisibility);
    observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setImageVisibility((prev) => {
                const newArray = [...prev];
                newArray[index] = true;
                return newArray;
            })
          } else {
            setImageVisibility((prev) => {
                const newArray = [...prev];
                newArray[index] = false;
                return newArray;
            })
          }
        });
      });

      imageRefs.current.forEach((element) => {
        if (element) observer.current.observe(element);
      });

      return () => observer.current.disconnect();
  };

  useEffect(() => {
    if (animation === "Minimal") {
        setImageVisibility(new Array(casualPictures.length).fill(true));
    } else {
      return setObserver();
    } 
  }, [animation]);

  return (
    <div className="absolute top-0 w-full h-full px-1 sm:px-0 flex flex-col justify-between">
      {casualPictures.map((image, index) => (
        <div key={index} ref={(el) => (imageRefs.current[index] = el)} className={`relative w-1/6 sm:w-1/5 md:w-1/4 xl:w-[30%] transform ${negMargin(index)} ${
            index % 2 === 0 ? "left-full -translate-x-full sm:left-0 sm:translate-x-0" : "left-full -translate-x-full"
          } ${imageVisibility[index] ? "opacity-100" : "opacity-0"}`}>
          <img src={image} alt={`Casual Picture ${index + 1}`} className={`${animationClass(index,animation)} min-w-16 w-4/5 2xl:w-3/5 4xl:w-1/2 max-w-[450px] relative left-1/2 -translate-x-1/2 rounded-lg 2xl:rounded-3xl`}/>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;