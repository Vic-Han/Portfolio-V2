

import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import casualAbout from "../data/CasualAbout";
import formalAbout from "../data/FormalAbout";
import ImageGallery from "../components/ImageGallery";
/**
 * The "About" component manages the dynamic presentation of text and images with interactive animations.
 */
const About = () => {
  const { darkMode, animation } = useContext(GlobalContext);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRefs = useRef([]);
  const parentRef = useRef(null);
  const textObserver = useRef(null);

  

  useEffect(() => {
    textObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textIndex = parseInt(entry.target.id.slice(5));
          setCurrentIndex((prevIndex) => Math.max(prevIndex, textIndex));
          console.log(textIndex);
        }
      });
    }, { threshold: 1.0 });

    textRefs.current.forEach((element) => {
      textObserver.current.observe(element);
    });

    return () => textObserver.current.disconnect();
  }, []);

  /**
   * Effect hook to manage the typewriter animation. 
   * It updates the currentText state gradually to reveal the next text chunk.
   */
  useEffect(() => {
    if(animation === "Normal"){
      const texts = [...formalAbout, ...casualAbout];
        const interval = setInterval(() => {
          if (currentText.length < texts[currentIndex].length) {
            setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
          } else {
            clearInterval(interval);
          }
        }, 10);
        return () => clearInterval(interval);
      
    }
  }, [currentIndex, currentText]);

  /**
   * Helper function to store refs of text chunk elements in the textRefs array.
   * @param {number} index - The index of the text chunk in the array.
   */
  const handleTextRef = (index) => (el) => {
    textRefs.current[index] = el;
  };
  const renderText = (text, index) => { 
    const isCurrent = index === currentIndex;
    const margin = 'my-4 3xl:my-6';
    if (!isCurrent || animation === "None") {
    return (
      <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
         <span className={`text-secondary ${index > currentIndex ? "opacity-0" : "opacity-100"}`}>{text}</span> 
      </div>)
    }
    else if (animation === "Low"){
      return (
        <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className="my-4 h-fit relative">
          
          <div className={`overflow-hidden fade-in-bottom relative left-1/2 -translate-x-1/2`}>
            <div className="text-secondary">{text}</div>
          </div>
        </div>
      )
    }
    else if (animation === "Normal"){
      return (
      <div key={index} ref={handleTextRef(index)} id={`text-${index}`} className={margin}>
        <span>
          <span className="text-secondary">{currentText}</span>
          <span className="opacity-0">{text.slice(currentText.length)}</span>
        </span>
      </div>)
    }
    else {
      return (<></>)
    }
  }
  const cardStyle = "w-3/5 p-3 md:p-6 4xl:p-10 relative left-1/2 -translate-x-1/2";
  const fontSize = " text-xs sm:text-sm md:text-base lg:text-2xl-relaxed xl:text-3xl-relaxed 2xl:text-4xl-relaxed 3xl:text-5xl-relaxed";
  return (
    <div className="relative my-4">
      <div className="flex flex-col" ref={parentRef}>
        <div className={`${darkMode ? "card-dark" : "card-light"} ${cardStyle} mb-8 ${fontSize}`}>
          <div className="text-primary"> About me</div>
          {formalAbout.map((text, index) => renderText(text, index))}
        </div>
        <div className={`${darkMode ? "card-dark" : "card-light"} ${cardStyle} ${fontSize}`}>
          <div className="text-primary">Even more about me</div>
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