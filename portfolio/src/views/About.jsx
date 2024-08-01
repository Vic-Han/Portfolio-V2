

import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import casualAbout from "../data/CasualAbout";
import formalAbout from "../data/FormalAbout";
import casualPictures from "../data/CasualPictures";

/**
 * The "About" component manages the dynamic presentation of text and images with interactive animations.
 */
const About = () => {
  const { darkMode, animation } = useContext(GlobalContext);
  const [imageVisibility, setImageVisibility] = useState({});
  const [textVisibility, setTextVisibility] = useState({});
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRefs = useRef([]);
  const parentRef = useRef(null);
  const observer = useRef(null);
  const textObserver = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageVisibility((prev) => ({ ...prev, [entry.target.id]: true }));
        } else {
          setImageVisibility((prev) => ({ ...prev, [entry.target.id]: false }));
        }
      });
    });

    casualPictures.forEach((image, index) => {
      const element = document.getElementById(`image-${index}`);
      if (element) observer.current.observe(element);
    });

    return () => observer.current.disconnect();
  }, [casualPictures]);

  useEffect(() => {
    textObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTextVisibility((prev) => ({ ...prev, [entry.target.id]: true }));
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
    const texts = [...formalAbout, ...casualAbout];
    if (textVisibility[`text-${currentIndex}`]) {
      const interval = setInterval(() => {
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        } else {
          clearInterval(interval);
          if (currentIndex < texts.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentText("");
          }
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [textVisibility, currentIndex, currentText]);

  /**
   * Helper function to store refs of text chunk elements in the textRefs array.
   * @param {number} index - The index of the text chunk in the array.
   */
  const handleTextRef = (index) => (el) => {
    textRefs.current[index] = el;
  };
  /**
   * Render function to display individual text chunks with dynamic visibility and typewriter animation.
   * @param {string} text - The text chunk to be displayed.
   * @param {number} index - The index of the text chunk in the array.
   */
  const renderText = (text, index) => {
    const isVisible = textVisibility[`text-${index}`];
    const isCurrent = index === currentIndex;
  
    return (
      <div
        key={index}
        ref={handleTextRef(index)}
        id={`text-${index}`}
        className={`my-4 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {isCurrent ? (
          <span>
            <span className="text-secondary">{currentText}</span>
            <span className="opacity-0">{text.slice(currentText.length)}</span>
          </span>
        ) : (
          <span className={`text-secondary ${index > currentIndex || !isVisible ? "invisible" : "opacity-100"}`}>
            {text}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col" ref={parentRef}>
        <div
          className={`${
            darkMode ? "card-dark" : "card-light"
          } w-3/5 p-6 my-4 text-4xl leading-relaxed relative left-1/2 -translate-x-1/2`}
        >
          <div className="text-primary"> About me</div>
          {formalAbout.map((text, index) => renderText(text, index))}
        </div>
        <div
          className={`${
            darkMode ? "card-dark" : "card-light"
          } w-3/5 p-6 my-4 text-4xl leading-relaxed relative left-1/2 -translate-x-1/2`}
        >
          <div className="text-primary">Even more about me</div>

          {casualAbout.map((text, index) =>
            renderText(text, formalAbout.length + index)
          )}
        </div>
      </div>
      <div className="absolute top-0 w-full h-full py-10 px-6 flex flex-col justify-between">
        {casualPictures.map((image, index) => (
          <div
            key={index}
            id={`image-${index}`}
            className={`relative w-1/6 my-6 transform ${
              index % 2 === 0 ? "left-0" : "left-full -translate-x-full"
            } ${imageVisibility[`image-${index}`] ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={image}
              alt={`Casual Picture ${index + 1}`}
              className={`${
                imageVisibility[`image-${index}`] ? "flip" : "before-flip"
              } w-full max-w-md rounded-lg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;