
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import casualAbout from "../data/CasualAbout";
import formalAbout from "../data/FormalAbout";
import casualPictures from "../data/CasualPictures";

function About() {
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;
  const [imageVisible, setImageVisible] = useState({});

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
            setImageVisible((prev) => ({ ...prev, [entry.target.id]: true }));},500)
          } else {
            setImageVisible((prev) => ({ ...prev, [entry.target.id]: false }));
          }
        });
      });

    casualPictures.forEach((image, index) => {
      const element = document.getElementById(`image-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [casualPictures]);

  return (
    <div className="relative">
      <div className="flex flex-col">
        <div className={`${darkMode ? 'card-dark' : 'card-light'} w-3/5 p-6 my-4 text-4xl leading-relaxed relative left-1/2 -translate-x-1/2`}>
          {formalAbout.map((text, index) => (
            <p key={index} className="my-4">{text}</p>
          ))}
        </div>
        <div className={`${darkMode ? 'card-dark' : 'card-light'} w-3/5 p-6 my-4 text-4xl leading-relaxed relative left-1/2 -translate-x-1/2`}>
          {casualAbout.map((text, index) => (
            <p key={index} className="my-4">{text}</p>
          ))}
        </div>
      </div>
      <div className="absolute top-0 w-full h-full py-10 px-6">
        {casualPictures.map((image, index) => (
          <div
            key={index}
            id={`image-${index}`}
            className={`relative w-1/6 my-6 transform ${
              index % 2 === 0 ? 'left-0' : 'left-full -translate-x-full'
            } ${imageVisible[`image-${index}`] ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt={`Casual Picture ${index + 1}`}
              className={`${
                imageVisible[`image-${index}`] ? 'flip' : 'before-flip'
              } w-full max-w-md rounded-lg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;



// import React, { useContext, useState, useEffect } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import casualAbout from "../data/CasualAbout";
// import formalAbout from "../data/FormalAbout";
// import casualPictures from "../data/CasualPictures";

// function About() {
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [imageVisible, setImageVisible] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setImageVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//         } else {
//           setImageVisible((prev) => ({ ...prev, [entry.target.id]: false }));
//         }
//       });
//     });

//     casualPictures.forEach((image, index) => {
//       const element = document.getElementById(`image-${index}`);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, [casualPictures]);

//   return (
//     <div className="relative">
//       <div className="flex flex-col">
//         <div className={`${darkMode ? 'card-dark' : 'card-light'} w-3/5 p-6 my-4 text-4xl leading-relaxed relative left-1/2 -translate-x-1/2`}>
//           {formalAbout.map((text, index) => (
//             <p key={index} className="my-4">{text}</p>
//           ))}
//         </div>
//         <div className={`${darkMode ? 'card-dark' : 'card-light'} w-3/5 p-6 my-4 text-4xl leading-relaxed relative left-1/2 -translate-x-1/2`}>
//           {casualAbout.map((text, index) => (
//             <p key={index} className="my-4">{text}</p>
//           ))}
//         </div>
//       </div>
//       <div className="absolute top-0 w-full h-full py-10">
//         {casualPictures.map((image, index) => (
//           <div
//             key={index}
//             id={`image-${index}`}
//             className={`relative w-96 transform ${
//               index % 2 === 0 ? 'left-0' : 'left-full -translate-x-full'
//             }`}
//           >
//             <div className={`flip-container ${imageVisible[`image-${index}`] ? 'flip' : ''}`}>
//               <div className="flipper">
//                 <div className="front"></div>
//                 <div className="back">
//                   <img
//                     src={image}
//                     alt={`Casual Picture ${index + 1}`}
//                     className="w-full max-w-md"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;

// Buggy code: good to throw into the model

// import React, { useContext, useState, useEffect } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import casualAbout from "../data/CasualAbout";
// import formalAbout from "../data/FormalAbout";
// import casualPictures from "../data/CasualPictures";

// function About() {
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`${darkMode ? 'bg-dark' : 'bg-light'} p-4`}>
//       <div className="flex justify-center">
//         <div className={`${darkMode ? 'card-dark' : 'card-light'} w-1/2 p-4 mb-4 text-3xl leading-loose`}>
//           {formalAbout.map((text, index) => (
//             <p key={index} className="mb-4">{text}</p>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className={`${darkMode ? 'card-dark' : 'card-light'} w-1/2 p-4 mb-4 text-3xl leading-loose`}>
//           {casualAbout.map((text, index) => (
//             <p key={index} className="mb-4">{text}</p>
//           ))}
//         </div>
//       </div>
//       <div className="parallax-container relative">
//         {casualPictures.map((image, index) => (
//           <div
//             key={index}
//             className={`parallax-image absolute bottom-0 ${
//               scrollPosition > 200 + index * 100 ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ top: `${index * 200}px` }}
//           >
//             <img
//               src={image}
//               alt={`Casual Picture ${index + 1}`}
//               className={`${
//                 scrollPosition > 200 + index * 100 ? 'rotate-y-180' : ''
//               } w-full max-w-md`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;
