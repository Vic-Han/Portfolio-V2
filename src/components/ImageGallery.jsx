
import React, { useEffect, useRef, useState, useContext } from "react";
import casualPictures from "../data/CasualPictures";
import { GlobalContext } from "../context/GlobalContext";

const ImageGallery = () => {
  const { animation } = useContext(GlobalContext);
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
    },[]);
  useEffect(() => {
    if (animation === "Minimal") {
        setImageVisibility(new Array(casualPictures.length).fill(true));
    } else {
      return setObserver();
    } 
  }, [animation]);

  return (
    <div className="absolute top-0 w-full h-full px-1 md:px-6 flex flex-col justify-between">
      {casualPictures.map((image, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className={`relative w-1/6 transform ${negMargin(index)} ${
            index % 2 === 0 ? "left-0" : "left-full -translate-x-full"
          } ${imageVisibility[index] ? "opacity-100" : "opacity-0"}`}
        >
          <img src={image} alt={`Casual Picture ${index + 1}`} className={`${animationClass(index,animation)} 2xl:max-w-64 3xl:max-w-96 4xl:max-w-128 relative left-1/2 -translate-x-1/2 rounded-lg`}/>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
