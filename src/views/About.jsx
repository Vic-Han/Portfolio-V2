// About.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import casualAbout from "../data/CasualAbout";
import formalAbout from "../data/FormalAbout";
import ImageGallery from "../components/ImageGallery";
/**
 * @component About
 * @description
 * A biographical section component that displays formal and casual text content
 * with animated text reveals and an accompanying image gallery.
 * 
 * @properties
 * Accessed through GlobalContext:
 * - darkMode: boolean - Controls light/dark theme
 * - animation: 'Minimal' | 'Normal' | 'Extreme' - Animation style
 * 
 * @animations
 * Text reveal modes:
 * - Minimal: All text visible immediately
 * - Normal: Fade-in animation on scroll
 * - Extreme: Typewriter effect for current text block
 * 
 * @layout
 * - Two card sections: formal and casual content
 * - Overlaid image gallery
 * - Responsive text sizing and spacing
 * - Scroll-based text visibility using Intersection Observer
 * 
 * @styling
 * - Dynamic theme switching (light/dark modes)
 * - Responsive typography scales
 * - Card-based content containers
 */
const About = () => {

  const { darkMode, animation } = useContext(GlobalContext);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRefs = useRef([]);
  const parentRef = useRef(null);
  const textObserver = useRef(null);
  useEffect(() => {
    textObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textIndex = parseInt(entry.target.id.slice(5));
          setCurrentIndex((prev) => Math.max(textIndex, prev));
        }
      });
    }, { threshold: 0.8 });

    textRefs.current.forEach((element) => {
      textObserver.current.observe(element);
    });

    return () => textObserver.current.disconnect();
  }, []);

  useEffect(() => {
    setCurrentTextIndex(0);

    if(animation === "Extreme"){
      const texts = [...formalAbout, ...casualAbout];
      const textLength = texts[currentIndex].length;
      let interval;

      interval = setInterval(() => {
        setCurrentTextIndex((prev) => {
          if (prev >= textLength) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 6);

      // Cleanup function
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
}, [currentIndex]); 


   
  const handleTextRef = (index) => (el) => {
    textRefs.current[index] = el;
  };

  const renderText = (text, index) => { 
    const isCurrent = index === currentIndex;
    const margin = 'my-6 xl:my-8 3xl:my-10';
    if (animation === "Minimal" || index < currentIndex) {
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
           <span className={`text-secondary`}>{text}</span> 
        </div>)
    }
    if(!isCurrent){
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
            <span className="opacity-0">{text}</span>
        </div>)
    }
    else if (animation === "Normal"){
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
          <div className={`overflow-hidden fade-in-bottom relative left-1/2 -translate-x-1/2`}>
            <div className="text-secondary">{text}</div>
          </div>
        </div>
      )
    }
    else if (animation === "Extreme"){
      return (
      <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
        <span>
          <span className="text-secondary">{text.slice(0,currentTextIndex-1)}</span>
          <span className="opacity-0">{(currentTextIndex < text.length - 1) ? text.slice(currentTextIndex) : null}</span>
        </span>
      </div>)
    }
    else {
      return (<></>)
    }
  }

   
  const cardStyle = "w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 p-3 md:p-6 2xl:p-10 4xl:p-14 relative left-0 ml-1 sm:ml-0 sm:left-1/2 sm:-translate-x-1/2";
  const fontSize = "text-xs sm:text-sm md:text-base/loose lg:text-lg/loose xl:text-xl/loose 3xl:text-2xl/loose 4xl:text-3xl/loose"
  const fontSizeHeader = "text-primary text-center text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl"

  return (
    <div className="relative my-4">
      <div className="flex flex-col" ref={parentRef}>
        <div className={`${darkMode ? "card-dark" : "card-light"} ${cardStyle} mb-8 ${fontSize}`}>
          <div className={fontSizeHeader}> About me</div>
          {formalAbout.map((text, index) => renderText(text, index))}
        </div>
        <div className={`${darkMode ? "card-dark" : "card-light"} ${cardStyle} ${fontSize}`}>
          <div className={fontSizeHeader}>Even more about me</div>
          {casualAbout.map((text, index) =>
            renderText(text, formalAbout.length + index)
          )}
        </div>
      </div>
      <ImageGallery/>
    </div>
  );
};

export default About;
