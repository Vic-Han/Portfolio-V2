// /**
//  * Resume component that displays a list of categories and their corresponding items
//  * in a visually appealing and animated way.
//  */
// import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import { animateContentBoxes } from '../transitions/AnimationHelper';

// /**
//  * Define the Resume component
//  */
// function Resume() {
//   // Get the global context states
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;

//   // Define the categories and items to be displayed
//   const refactoredItems = {
//     "Front end": ["React", "Vue", "Angular"],
//     "Back end": ["Node", "Express", "Django"],
//     "Database": ["MongoDB", "PostgreSQL", "MySQL"],
//     "Languages": ["JavaScript", "Python", "Java"],
//     "Tools": ["Git", "Docker", "Jenkins"],
//     "Cloud": ["AWS", "Azure", "Google Cloud"],
//   };

//   // Initialize state variables for category list, item list, box animation states, and item animation states
//   const categories = Object.keys(refactoredItems);
//   const [categoryList, setCategoryList] = useState(categories);
//   const [itemList, setItemList] = useState(
//     categories.map(category => refactoredItems[category])
//   );
//   const [boxAnimationStates, setBoxAnimationStates] = useState(
//     categories.map(() => "")
//   );
//   const [itemAnimationStates, setItemAnimationStates] = useState(
//     categories.map(category => refactoredItems[category].map(() => ""))
//   );

//   /**
//    * Hide all content boxes
//    */
//   const hideContentBoxes = () => {    
//     const newAnimationStates = boxAnimationStates.map(() => 'hidden');
//     setBoxAnimationStates(newAnimationStates);
//     const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'hidden'));
//     setItemAnimationStates(newItemAnimationStates);
//   }

//   /**
//    * Define animation functions with different animation classes and durations
//    */
//   const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
//   const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
//   const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

//   /**
//    * Animate items in a category
//    * @param {number} index - The index of the category
//    */
//   const animateItems = (index) => {
//     const itemLength = itemAnimationStates[index].length;
//     for (let i = 0; i < itemLength; i++) {
//       setTimeout(() => {
//         setItemAnimationStates((prevItemAnimationStates) => {
//           const newItemAnimationStates = [...prevItemAnimationStates];
//           newItemAnimationStates[index][i] = 'fade-in-top';
//           return newItemAnimationStates;
//         });
//         setTimeout(() => {
//           setItemAnimationStates((prevItemAnimationStates) => {
//             const newItemAnimationStates = [...prevItemAnimationStates];
//             newItemAnimationStates[index][i] = 'animate-glow';
//             return newItemAnimationStates;
//           });
//         }, 800); 
//       }, i * 100); 
//     }
//   }

//   /**
//    * Run the animation functions when the component mounts
//    */
//   useEffect(() => {
//     hideContentBoxes();
//     if (animation === 'Low') {
//       animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
//     } else if (animation === 'Normal') {
//       animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
//     } else if (animation === 'Extreme') {
//       animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates, animateItems);
//     }

//   }, []);

//   /**
//    * Render the Resume component
//    */
  
//   return (
//     <div className="flex flex-wrap justify-center w-full">
//       {categoryList.map((category, index) => (
//         <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//           <div
//             className={`
//               relative left-1/2 -translate-x-1/2 p-4 
//               ${darkMode ? 'card-dark' : 'card-light'} 
//               ${boxAnimationStates[index]}
//             `}
//           >
//             <h2 className="text-xl font-bold mb-2">{category}</h2>
//             <div className="flex flex-wrap justify-center"> 
//               {itemList[index].map((item, itemIndex) => (
//                 <div key={itemIndex} className="w-fit mx-1">
//                   <div
//                     className={`
//                       relative left-1/2 -translate-x-1/2 
//                       inline-block 
//                       px-2 py-1 mb-2 mx-1
//                       ${itemAnimationStates[index][itemIndex]} 
//                       bg-slate-500 
//                       text-white 
//                     `}
//                   >
//                     <p>{item}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
  
// }

// export default Resume;

// import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import { animateContentBoxes } from '../transitions/AnimationHelper';

// function Resume() {
//   // Get the global context states
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;

//   // Define the categories and items to be displayed
//   const skills = {
//     "Front end": ["React", "Vue", "Angular"],
//     "Back end": ["Node", "Express", "Django"],
//     "Database": ["MongoDB", "PostgreSQL", "MySQL"],
//     "Languages": ["JavaScript", "Python", "Java"],
//     "Tools": ["Git", "Docker", "Jenkins"],
//     "Cloud": ["AWS", "Azure", "Google Cloud"],
//   };

//   // Define work experience and education
//   const workExperience = [
//     {
//       title: "Software Engineer",
//       company: "ABC Corporation",
//       timeline: "2020-2022",
//       accomplishments: [
//         "Developed and maintained multiple web applications",
//         "Collaborated with cross-functional teams to deliver projects",
//         "Improved code quality and reduced bugs by 30%",
//       ],
//     },
//     {
//       title: "Junior Developer",
//       company: "DEF Startups",
//       timeline: "2018-2020",
//       accomplishments: [
//         "Contributed to the development of a mobile app",
//         "Participated in code reviews and ensured best practices",
//         "Worked with the QA team to identify and fix issues",
//       ],
//     },
//   ];

//   const education = [
//     {
//       qualification: "Bachelor of Science in Computer Science",
//       date: "2015-2019",
//     },
//     {
//       qualification: "Certified Scrum Master",
//       date: "2020",
//     },
//   ];

//   // Initialize state variables for category list, item list, box animation states, and item animation states
//   const categories = Object.keys(skills);
//   const [categoryList, setCategoryList] = useState(categories);
//   const [itemList, setItemList] = useState(
//     categories.map(category => skills[category])
//   );
//   const [boxAnimationStates, setBoxAnimationStates] = useState(
//     categories.map(() => "")
//   );
//   const [itemAnimationStates, setItemAnimationStates] = useState(
//     categories.map(category => skills[category].map(() => ""))
//   );
//   const [cardAnimationState, setCardAnimationState] = useState("");
//   const [sectionAnimationStates, setSectionAnimationStates] = useState({
//     workExperience: "",
//     education: "",
//     skills: "",
//   });

//   // Hide all content boxes
//   const hideContentBoxes = () => {    
//     const newAnimationStates = boxAnimationStates.map(() => 'hidden');
//     setBoxAnimationStates(newAnimationStates);
//     const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'hidden'));
//     setItemAnimationStates(newItemAnimationStates);
//   }

//   // Define animation functions with different animation classes and durations
//   const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
//   const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
//   const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

//   // Animate items in a category
//   const animateItems = (index) => {
//     const itemLength = itemAnimationStates[index].length;
//     for (let i = 0; i < itemLength; i++) {
//       setTimeout(() => {
//         setItemAnimationStates((prevItemAnimationStates) => {
//           const newItemAnimationStates = [...prevItemAnimationStates];
//           newItemAnimationStates[index][i] = 'fade-in-top';
//           return newItemAnimationStates;
//         });
//         setTimeout(() => {
//           setItemAnimationStates((prevItemAnimationStates) => {
//             const newItemAnimationStates = [...prevItemAnimationStates];
//             newItemAnimationStates[index][i] = 'animate-glow';
//             return newItemAnimationStates;
//           });
//         }, 800); 
//       }, i * 100); 
//     }
//   }

//   useEffect(() => {
//     hideContentBoxes();
//     setCardAnimationState('fade-in');
//     setTimeout(() => {
//       setSectionAnimationStates((prevSectionAnimationStates) => ({
//         ...prevSectionAnimationStates,
//         workExperience: 'fade-in',
//       }));
//       setTimeout(() => {
//         setSectionAnimationStates((prevSectionAnimationStates) => ({
//           ...prevSectionAnimationStates,
//           education: 'fade-in',
//         }));
//         setTimeout(() => {
//           setSectionAnimationStates((prevSectionAnimationStates) => ({
//             ...prevSectionAnimationStates,
//             skills: 'fade-in',
//           }));
//           if (animation === 'Low') {
//             animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
//           } else if (animation === 'Normal') {
//             animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
//           } else if (animation === 'Extreme') {
//             animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates, animateItems);
//           }
//         }, 200);
//       }, 200);
//     }, 200);
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center w-full">
//       <div className="w-full md:w-3/4 lg:w-2/3 px-4 mb-8">
//         <div
//           className={`
//             relative left-1/2 -translate-x-1/2 p-4 
//             ${darkMode ? 'card-dark' : 'card-light'} 
//             ${cardAnimationState}
//           `}
//         >
//           <div className={`flex flex-wrap justify-center md:flex-nowrap mb-4 ${sectionAnimationStates.workExperience}`}>
//             <p className="text-lg">Download my resume:</p>
//             <a
//               href="resume.pdf"
//               download
//               className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Download
//             </a>
//           </div>
//           <h2 className={`text-xl font-bold mb-2 ${sectionAnimationStates.workExperience}`}>Work Experience:</h2>
//           {workExperience.map((experience, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-bold">{experience.title}</h3>
//               <p className="text-lg">{experience.company}</p>
//               <p className="text-lg">{experience.timeline}</p>
//               <ul>
//                 {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
//                   <li key={accomplishmentIndex}>{accomplishment}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           <h2 className={`text-xl font-bold mb-2 ${sectionAnimationStates.education}`}>Education:</h2>
//           {education.map((qualification, index) => (
//             <div key={index} className="mb-4">
//               <h3 className="text-lg font-bold">{qualification.qualification}</h3>
//               <p className="text-lg">{qualification.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={`w-full flex flex-wrap justify-center ${sectionAnimationStates.skills}`}>
//         {categoryList.map((category, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//             <div
//               className={`
//                 relative left-1/2 -translate-x-1/2 p-4 
//                 ${darkMode ? 'card-dark' : 'card-light'} 
//                 ${boxAnimationStates[index]}
//               `}
//             >
//               <h2 className="text-xl font-bold mb-2">{category}</h2>
//               <div className="flex flex-wrap justify-center"> 
//                 {itemList[index].map((item, itemIndex) => (
//                   <div key={itemIndex} className="w-fit mx-1">
//                     <div
//                       className={`
//                         relative left-1/2 -translate-x-1/2 
//                         inline-block 
//                         px-2 py-1 mb-2 mx-1
//                         ${itemAnimationStates[index][itemIndex]} 
//                         bg-slate-500 
//                         text-white 
//                       `}
//                     >
//                       <p>{item}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Resume;

// import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import { animateContentBoxes } from '../transitions/AnimationHelper';

// function Resume() {
//   // Get the global context states
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;

//   // Define the categories and items to be displayed
//   const sections = {
//     "Resume": ["Download my resume"],
//     "Work Experience": ["Software Engineer", "Junior Developer"],
//     "Education": ["Bachelor of Science in Computer Science", "Certified Scrum Master"],
//   };

//   const skills = {
//     "Front end": ["React", "Vue", "Angular"],
//     "Back end": ["Node", "Express", "Django"],
//     "Database": ["MongoDB", "PostgreSQL", "MySQL"],
//     "Languages": ["JavaScript", "Python", "Java"],
//     "Tools": ["Git", "Docker", "Jenkins"],
//     "Cloud": ["AWS", "Azure", "Google Cloud"],
//   };

//   // Define work experience and education
//   const workExperience = [
//     {
//       title: "Software Engineer",
//       company: "ABC Corporation",
//       timeline: "2020-2022",
//       accomplishments: [
//         "Developed and maintained multiple web applications",
//         "Collaborated with cross-functional teams to deliver projects",
//         "Improved code quality and reduced bugs by 30%",
//       ],
//     },
//     {
//       title: "Junior Developer",
//       company: "DEF Startups",
//       timeline: "2018-2020",
//       accomplishments: [
//         "Contributed to the development of a mobile app",
//         "Participated in code reviews and ensured best practices",
//         "Worked with the QA team to identify and fix issues",
//       ],
//     },
//   ];

//   const education = [
//     {
//       qualification: "Bachelor of Science in Computer Science",
//       date: "2015-2019",
//     },
//     {
//       qualification: "Certified Scrum Master",
//       date: "2020",
//     },
//   ];

//   // Initialize state variables for category list, item list, box animation states, and item animation states
//   const categories = Object.keys(skills);
//   const sectionList = Object.keys(sections);
//   const [categoryList, setCategoryList] = useState(categories);
//   const [itemList, setItemList] = useState(
//     categories.map(category => skills[category])
//   );
//   const [boxAnimationStates, setBoxAnimationStates] = useState(
//     categories.map(() => "")
//   );
//   const [itemAnimationStates, setItemAnimationStates] = useState(
//     categories.map(category => skills[category].map(() => ""))
//   );
//   const [sectionAnimationStates, setSectionAnimationStates] = useState(
//     sectionList.map(() => "")
//   );
//   const [sectionItemAnimationStates, setSectionItemAnimationStates] = useState(
//     sectionList.map(section => sections[section].map(() => ""))
//   );

//   // Hide all content boxes
//   const hideContentBoxes = () => {    
//     const newAnimationStates = boxAnimationStates.map(() => 'hidden');
//     setBoxAnimationStates(newAnimationStates);
//     const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'hidden'));
//     setItemAnimationStates(newItemAnimationStates);
//     const newSectionAnimationStates = sectionAnimationStates.map(() => 'hidden');
//     setSectionAnimationStates(newSectionAnimationStates);
//     const newSectionItemAnimationStates = sectionItemAnimationStates.map(section => section.map(() => 'hidden'));
//     setSectionItemAnimationStates(newSectionItemAnimationStates);
//   }

//   // Define animation functions with different animation classes and durations
//   const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
//   const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
//   const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

//   // Animate items in a category
//   const animateItems = (index) => {
//     const itemLength = itemAnimationStates[index].length;
//     for (let i = 0; i < itemLength; i++) {
//       setTimeout(() => {
//         setItemAnimationStates((prevItemAnimationStates) => {
//           const newItemAnimationStates = [...prevItemAnimationStates];
//           newItemAnimationStates[index][i] = 'fade-in-top';
//           return newItemAnimationStates;
//         });
//         setTimeout(() => {
//           setItemAnimationStates((prevItemAnimationStates) => {
//             const newItemAnimationStates = [...prevItemAnimationStates];
//             newItemAnimationStates[index][i] = 'animate-glow';
//             return newItemAnimationStates;
//           });
//         }, 800); 
//       }, i * 100); 
//     }
//   }

//   // Animate section items
//   const animateSectionItems = (index) => {
//     const itemLength = sectionItemAnimationStates[index].length;
//     for (let i = 0; i < itemLength; i++) {
//       setTimeout(() => {
//         setSectionItemAnimationStates((prevSectionItemAnimationStates) => {
//           const newSectionItemAnimationStates = [...prevSectionItemAnimationStates];
//           newSectionItemAnimationStates[index][i] = 'fade-in-top';
//           return newSectionItemAnimationStates;
//         });
//         setTimeout(() => {
//           setSectionItemAnimationStates((prevSectionItemAnimationStates) => {
//             const newSectionItemAnimationStates = [...prevSectionItemAnimationStates];
//             newSectionItemAnimationStates[index][i] = 'animate-glow';
//             return newSectionItemAnimationStates;
//           });
//         }, 800); 
//       }, i * 100); 
//     }
//   }

//   useEffect(() => {
//     hideContentBoxes();
//     setTimeout(() => {
//       if (animation === 'Low') {
//         animateContentBoxesLow(sectionAnimationStates, setSectionAnimationStates, animateSectionItems);
//         animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
//       } else if (animation === 'Normal') {
//         animateContentBoxesNormal(sectionAnimationStates, setSectionAnimationStates, animateSectionItems);
//         animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
//       } else if (animation === 'Extreme') {
//         animateContentBoxesExtreme(sectionAnimationStates, setSectionAnimationStates, animateSectionItems);
//         animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates, animateItems);
//       }
//     }, 200);
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center w-full">
//       <div className={`w-full flex flex-wrap justify-center ${sectionAnimationStates[0]}`}>
//         {sectionList.map((section, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//             <div
//               className={`
//                 relative left-1/2 -translate-x-1/2 p-4 
//                 ${darkMode ? 'card-dark' : 'card-light'} 
//                 ${sectionAnimationStates[index]}
//               `}
//             >
//               <h2 className="text-xl font-bold mb-2">{section}</h2>
//               <div className="flex flex-wrap justify-center"> 
//                 {sections[section].map((item, itemIndex) => (
//                   <div key={itemIndex} className="w-fit mx-1">
//                     <div
//                       className={`
//                         relative left-1/2 -translate-x-1/2 
//                         inline-block 
//                         px-2 py-1 mb-2 mx-1
//                         ${sectionItemAnimationStates[index][itemIndex]} 
//                         bg-slate-500 
//                         text-white 
//                       `}
//                     >
//                       <p>{item}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={`w-full flex flex-wrap justify-center ${sectionAnimationStates[1]}`}>
//         {categoryList.map((category, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//             <div
//               className={`
//                 relative left-1/2 -translate-x-1/2 p-4 
//                 ${darkMode ? 'card-dark' : 'card-light'} 
//                 ${boxAnimationStates[index]}
//               `}
//             >
//               <h2 className="text-xl font-bold mb-2">{category}</h2>
//               <div className="flex flex-wrap justify-center"> 
//                 {itemList[index].map((item, itemIndex) => (
//                   <div key={itemIndex} className="w-fit mx-1">
//                     <div
//                       className={`
//                         relative left-1/2 -translate-x-1/2 
//                         inline-block 
//                         px-2 py-1 mb-2 mx-1
//                         ${itemAnimationStates[index][itemIndex]} 
//                         bg-slate-500 
//                         text-white 
//                       `}
//                     >
//                       <p>{item}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Resume;

// import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import { animateContentBoxes } from '../transitions/AnimationHelper';

// function Resume() {
//   // Get the global context states
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;

//   // Define the categories and items to be displayed
//   const sections = {
//     "Resume": ["Download my resume"],
//     "Experience & Education": ["Work Experience", "Education"],
//   };

//   const skills = {
//     "Front end": ["React", "Vue", "Angular"],
//     "Back end": ["Node", "Express", "Django"],
//     "Database": ["MongoDB", "PostgreSQL", "MySQL"],
//     "Languages": ["JavaScript", "Python", "Java"],
//     "Tools": ["Git", "Docker", "Jenkins"],
//     "Cloud": ["AWS", "Azure", "Google Cloud"],
//   };

//   // Define work experience and education
//   const workExperience = [
//     {
//       title: "Software Engineer",
//       company: "ABC Corporation",
//       timeline: "2020-2022",
//       accomplishments: [
//         "Developed and maintained multiple web applications",
//         "Collaborated with cross-functional teams to deliver projects",
//         "Improved code quality and reduced bugs by 30%",
//       ],
//     },
//     {
//       title: "Junior Developer",
//       company: "DEF Startups",
//       timeline: "2018-2020",
//       accomplishments: [
//         "Contributed to the development of a mobile app",
//         "Participated in code reviews and ensured best practices",
//         "Worked with the QA team to identify and fix issues",
//       ],
//     },
//   ];

//   const education = [
//     {
//       qualification: "Bachelor of Science in Computer Science",
//       date: "2015-2019",
//     },
//     {
//       qualification: "Certified Scrum Master",
//       date: "2020",
//     },
//   ];

//   // Initialize state variables for category list, item list, box animation states, and item animation states
//   const categories = Object.keys(skills);
//   const sectionList = Object.keys(sections);
//   const [categoryList, setCategoryList] = useState(categories);
//   const [itemList, setItemList] = useState(
//     categories.map(category => skills[category])
//   );
//   const [boxAnimationStates, setBoxAnimationStates] = useState(
//     categories.map(() => "")
//   );
//   const [itemAnimationStates, setItemAnimationStates] = useState(
//     categories.map(category => skills[category].map(() => ""))
//   );
//   const [sectionAnimationStates, setSectionAnimationStates] = useState(
//     sectionList.map(() => "")
//   );

//   // Hide all content boxes
//   const hideContentBoxes = () => {    
//     const newAnimationStates = boxAnimationStates.map(() => 'hidden');
//     setBoxAnimationStates(newAnimationStates);
//     const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'hidden'));
//     setItemAnimationStates(newItemAnimationStates);
//     const newSectionAnimationStates = sectionAnimationStates.map(() => 'hidden');
//     setSectionAnimationStates(newSectionAnimationStates);
//   }

//   // Define animation functions with different animation classes and durations
//   const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
//   const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
//   const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

//   useEffect(() => {
//     hideContentBoxes();
//     setTimeout(() => {
//       if (animation === 'Low') {
//         animateContentBoxesLow(sectionAnimationStates, setSectionAnimationStates);
//         animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates);
//       } else if (animation === 'Normal') {
//         animateContentBoxesNormal(sectionAnimationStates, setSectionAnimationStates);
//         animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates);
//       } else if (animation === 'Extreme') {
//         animateContentBoxesExtreme(sectionAnimationStates, setSectionAnimationStates);
//         animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates);
//       }
//     }, 200);
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center w-full">
//       {sectionList.map((section, index) => (
//         <div key={index} className="w-full md:w-3/4 lg:w-2/3 px-4 mb-8">
//           <div
//             className={`
//               relative left-1/2 -translate-x-1/2 p-4 
//               ${darkMode ? 'card-dark' : 'card-light'} 
//               ${sectionAnimationStates[index]}
//             `}
//           >
//             <h2 className="text-xl font-bold mb-2">{section}</h2>
//             {section === "Resume" && (
//               <div className="flex flex-wrap justify-center mb-4">
//                 <p className="text-lg">Download my resume:</p>
//                 <a
//                   href="resume.pdf"
//                   download
//                   className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Download
//                 </a>
//               </div>
//             )}
//             {section === "Experience & Education" && (
//               <div>
//                 <h2 className="text-xl font-bold mb-2">Work Experience:</h2>
//                 {workExperience.map((experience, experienceIndex) => (
//                   <div key={experienceIndex} className="mb-4">
//                     <h3 className="text-lg font-bold">{experience.title}</h3>
//                     <p className="text-lg">{experience.company}</p>
//                     <p className="text-lg">{experience.timeline}</p>
//                     <ul>
//                       {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
//                         <li key={accomplishmentIndex}>{accomplishment}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//                 <h2 className="text-xl font-bold mb-2">Education:</h2>
//                 {education.map((qualification, qualificationIndex) => (
//                   <div key={qualificationIndex} className="mb-4">
//                     <h3 className="text-lg font-bold">{qualification.qualification}</h3>
//                     <p className="text-lg">{qualification.date}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//       <div className="w-full flex flex-wrap justify-center">
//         {categoryList.map((category, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//             <div
//               className={`
//                 relative left-1/2 -translate-x-1/2 p-4 
//                 ${darkMode ? 'card-dark' : 'card-light'} 
//                 ${boxAnimationStates[index]}
//               `}
//             >
//               <h2 className="text-xl font-bold mb-2">{category}</h2>
//               <div className="flex flex-wrap justify-center"> 
//                 {itemList[index].map((item, itemIndex) => (
//                   <div key={itemIndex} className="w-fit mx-1">
//                     <div
//                       className={`
//                         relative left-1/2 -translate-x-1/2 
//                         inline-block 
//                         px-2 py-1 mb-2 mx-1
//                         ${itemAnimationStates[index][itemIndex]} 
//                         bg-slate-500 
//                         text-white 
//                       `}
//                     >
//                       <p>{item}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Resume;
// import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../context/GlobalContext";
// import { animateContentBoxes } from '../transitions/AnimationHelper';

// function Resume() {
//   // Get the global context states
//   const settingsStates = useContext(GlobalContext);
//   const { darkMode, animation } = settingsStates;

//   // Define the categories and items to be displayed
//   const sections = {
//     "Resume": ["Download my resume"],
//     "Experience & Education": ["Work Experience", "Education"],
//   };

//   const skills = {
//     "Front end": ["React", "Vue", "Angular"],
//     "Back end": ["Node", "Express", "Django"],
//     "Database": ["MongoDB", "PostgreSQL", "MySQL"],
//     "Languages": ["JavaScript", "Python", "Java"],
//     "Tools": ["Git", "Docker", "Jenkins"],
//     "Cloud": ["AWS", "Azure", "Google Cloud"],
//   };

//   // Define work experience and education
//   const workExperience = [
//     {
//       title: "Software Engineer",
//       company: "ABC Corporation",
//       timeline: "2020-2022",
//       accomplishments: [
//         "Developed and maintained multiple web applications",
//         "Collaborated with cross-functional teams to deliver projects",
//         "Improved code quality and reduced bugs by 30%",
//       ],
//     },
//     {
//       title: "Junior Developer",
//       company: "DEF Startups",
//       timeline: "2018-2020",
//       accomplishments: [
//         "Contributed to the development of a mobile app",
//         "Participated in code reviews and ensured best practices",
//         "Worked with the QA team to identify and fix issues",
//       ],
//     },
//   ];

//   const education = [
//     {
//       qualification: "Bachelor of Science in Computer Science",
//       date: "2015-2019",
//     },
//     {
//       qualification: "Certified Scrum Master",
//       date: "2020",
//     },
//   ];

//   // Initialize state variables for category list, item list, box animation states, and item animation states
//   const categories = Object.keys(skills);
//   const sectionList = Object.keys(sections);
//   const [categoryList, setCategoryList] = useState(categories);
//   const [itemList, setItemList] = useState(
//     categories.map(category => skills[category])
//   );
//   const [boxAnimationStates, setBoxAnimationStates] = useState(
//     categories.map(() => "")
//   );
//   const [itemAnimationStates, setItemAnimationStates] = useState(
//     categories.map(category => skills[category].map(() => ""))
//   );
//   const [sectionAnimationStates, setSectionAnimationStates] = useState(
//     sectionList.map(() => "")
//   );

//   // Hide all content boxes
//   const hideContentBoxes = () => {    
//     const newAnimationStates = boxAnimationStates.map(() => 'hidden');
//     setBoxAnimationStates(newAnimationStates);
//     const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'hidden'));
//     setItemAnimationStates(newItemAnimationStates);
//     const newSectionAnimationStates = sectionAnimationStates.map(() => 'hidden');
//     setSectionAnimationStates(newSectionAnimationStates);
//   }

//   // Define animation functions with different animation classes and durations
//   const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
//   const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
//   const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

//   // Animate items in a category
//   const animateItems = (index) => {
//     const itemLength = itemAnimationStates[index].length;
//     for (let i = 0; i < itemLength; i++) {
//       setTimeout(() => {
//         setItemAnimationStates((prevItemAnimationStates) => {
//           const newItemAnimationStates = [...prevItemAnimationStates];
//           newItemAnimationStates[index][i] = 'fade-in-top';
//           return newItemAnimationStates;
//         });
//         setTimeout(() => {
//           setItemAnimationStates((prevItemAnimationStates) => {
//             const newItemAnimationStates = [...prevItemAnimationStates];
//             newItemAnimationStates[index][i] = 'animate-glow';
//             return newItemAnimationStates;
//           });
//         }, 800); 
//       }, i * 100); 
//     }
//   }

//   useEffect(() => {
//     hideContentBoxes();
//     setTimeout(() => {
//       if (animation === 'Low') {
//         animateContentBoxesLow(sectionAnimationStates, setSectionAnimationStates, animateItems);
//         animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
//       } else if (animation === 'Normal') {
//         animateContentBoxesNormal(sectionAnimationStates, setSectionAnimationStates, animateItems);
//         animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
//       } else if (animation === 'Extreme') {
//         animateContentBoxesExtreme(sectionAnimationStates, setSectionAnimationStates, animateItems);
//         animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates, animateItems);
//       }
//     }, 200);
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center w-full">
//       {sectionList.map((section, index) => (
//         <div key={index} className="w-full md:w-3/4 lg:w-2/3 px-4 mb-8">
//           <div
//             className={`
//               relative left-1/2 -translate-x-1/2 p-4 
//               ${darkMode ? 'card-dark' : 'card-light'} 
//               ${sectionAnimationStates[index]}
//             `}
//           >
//             <h2 className="text-xl font-bold mb-2">{section}</h2>
//             {section === "Resume" && (
//               <div className="flex flex-wrap justify-center mb-4">
//                 <p className="text-lg">Download my resume:</p>
//                 <a
//                   href="resume.pdf"
//                   download
//                   className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Download
//                 </a>
//               </div>
//             )}
//             {section === "Experience & Education" && (
//               <div>
//                 <h2 className="text-xl font-bold mb-2">Work Experience:</h2>
//                 {workExperience.map((experience, experienceIndex) => (
//                   <div key={experienceIndex} className="mb-4">
//                     <h3 className="text-lg font-bold">{experience.title}</h3>
//                     <p className="text-lg">{experience.company}</p>
//                     <p className="text-lg">{experience.timeline}</p>
//                     <ul>
//                       {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
//                         <li key={accomplishmentIndex}>{accomplishment}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//                 <h2 className="text-xl font-bold mb-2">Education:</h2>
//                 {education.map((qualification, qualificationIndex) => (
//                   <div key={qualificationIndex} className="mb-4">
//                     <h3 className="text-lg font-bold">{qualification.qualification}</h3>
//                     <p className="text-lg">{qualification.date}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//       <div className="w-full flex flex-wrap justify-center">
//         {categoryList.map((category, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//             <div
//               className={`
//                 relative left-1/2 -translate-x-1/2 p-4 
//                 ${darkMode ? 'card-dark' : 'card-light'} 
//                 ${boxAnimationStates[index]}
//               `}
//             >
//               <h2 className="text-xl font-bold mb-2">{category}</h2>
//               <div className="flex flex-wrap justify-center"> 
//                 {itemList[index].map((item, itemIndex) => (
//                   <div key={itemIndex} className="w-fit mx-1">
//                     <div
//                       className={`
//                         relative left-1/2 -translate-x-1/2 
//                         inline-block 
//                         px-2 py-1 mb-2 mx-1
//                         ${itemAnimationStates[index][itemIndex]} 
//                         bg-slate-500 
//                         text-white 
//                       `}
//                     >
//                       <p>{item}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Resume;
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { animateContentBoxes } from '../transitions/AnimationHelper';

function Resume() {
  // Get the global context states
  const settingsStates = useContext(GlobalContext);
  const { darkMode, animation } = settingsStates;

  // Define the categories and items to be displayed
  const sections = {
    "Resume": ["Download my resume"],
    "Experience & Education": ["Work Experience", "Education"],
  };

  const skills = {
    "Front end": ["React", "Vue", "Angular"],
    "Back end": ["Node", "Express", "Django"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL"],
    "Languages": ["JavaScript", "Python", "Java"],
    "Tools": ["Git", "Docker", "Jenkins"],
    "Cloud": ["AWS", "Azure", "Google Cloud"],
  };

  // Define work experience and education
  const workExperience = [
    {
      title: "Software Engineer",
      company: "ABC Corporation",
      timeline: "2020-2022",
      accomplishments: [
        "Developed and maintained multiple web applications",
        "Collaborated with cross-functional teams to deliver projects",
        "Improved code quality and reduced bugs by 30%",
      ],
    },
    {
      title: "Junior Developer",
      company: "DEF Startups",
      timeline: "2018-2020",
      accomplishments: [
        "Contributed to the development of a mobile app",
        "Participated in code reviews and ensured best practices",
        "Worked with the QA team to identify and fix issues",
      ],
    },
  ];

  const education = [
    {
      qualification: "Bachelor of Science in Computer Science",
      date: "2015-2019",
    },
    {
      qualification: "Certified Scrum Master",
      date: "2020",
    },
  ];

  // Initialize state variables for category list, item list, box animation states, and item animation states
  const categories = Object.keys(skills);
  const sectionList = Object.keys(sections);
  const [categoryList, setCategoryList] = useState(categories);
  const [itemList, setItemList] = useState(
    categories.map(category => skills[category])
  );
  const [boxAnimationStates, setBoxAnimationStates] = useState(
    [...categories.map(() => ""), ""]
  );
  const [itemAnimationStates, setItemAnimationStates] = useState(
    categories.map(category => skills[category].map(() => ""))
  );
  const [mainCardAnimationStates, setMainCardAnimationStates] = useState(["", "", ""]);

  // Hide all content boxes
  const hideContentBoxes = () => {    
    const newAnimationStates = boxAnimationStates.map(() => 'opacity-0');
    setBoxAnimationStates(newAnimationStates);
    const newItemAnimationStates = itemAnimationStates.map(category => category.map(() => 'opacity-0'));
    setItemAnimationStates(newItemAnimationStates);
    const newMainCardAnimationStates = mainCardAnimationStates.map(() => 'opacity-0');
    setMainCardAnimationStates(newMainCardAnimationStates);
  }

  // Define animation functions with different animation classes and durations
  const animateContentBoxesLow = animateContentBoxes('fade-in', 200);
  const animateContentBoxesNormal = animateContentBoxes('slide-in', 250);
  const animateContentBoxesExtreme = animateContentBoxes('bounce-in', 300);

  // Animate items in a category
  const animateItems = (index) => {
    if (index === 0) {
      const mainCardLength = mainCardAnimationStates.length;
      for (let i = 0; i < mainCardLength; i++) {
        setTimeout(() => {
          setMainCardAnimationStates((prevMainCardAnimationStates) => {
            const newMainCardAnimationStates = [...prevMainCardAnimationStates];
            newMainCardAnimationStates[i] = `resume-${animation.toLowerCase()}`;
            return newMainCardAnimationStates;
          });
        }, i * 100);
      }
    } else {
      const itemLength = itemAnimationStates[index - 1].length;
      for (let i = 0; i < itemLength; i++) {
        setTimeout(() => {
          setItemAnimationStates((prevItemAnimationStates) => {
            const newItemAnimationStates = [...prevItemAnimationStates];
            newItemAnimationStates[index - 1][i] = 'fade-in-top';
            return newItemAnimationStates;
          });
          setTimeout(() => {
            setItemAnimationStates((prevItemAnimationStates) => {
              const newItemAnimationStates = [...prevItemAnimationStates];
              newItemAnimationStates[index - 1][i] = 'animate-glow';
              return newItemAnimationStates;
            });
          }, 800); 
        }, i * 100); 
      }
    }
  }

  useEffect(() => {
    hideContentBoxes();
    if (animation === 'Low') {
      animateContentBoxesLow(boxAnimationStates, setBoxAnimationStates, animateItems);
    } else if (animation === 'Normal') {
      animateContentBoxesNormal(boxAnimationStates, setBoxAnimationStates, animateItems);
    } else if (animation === 'Extreme') {
      animateContentBoxesExtreme(boxAnimationStates, setBoxAnimationStates, animateItems);
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-full">
      <div key={0} className="w-full md:w-3/4 lg:w-2/3 px-4 mb-8">
        <div
          className={`
            relative left-1/2 -translate-x-1/2 p-4 
            ${darkMode ? 'card-dark' : 'card-light'} 
            ${boxAnimationStates[0]}
          `}
        >
          <div className={mainCardAnimationStates[0]}>
            <h2 className="text-xl font-bold mb-2">Resume</h2>
            <div className="flex flex-wrap justify-center mb-4">
              <p className="text-lg">Download my resume:</p>
              <a
                href="resume.pdf"
                download
                className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download
              </a>
            </div>
          </div>
          <div className={mainCardAnimationStates[1]}>
            <h2 className="text-xl font-bold mb-2">Experience:</h2>
            {workExperience.map((experience, experienceIndex) => (
              <div key={experienceIndex} className="mb-4">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="text-lg">{experience.company}</p>
                <p className="text-lg">{experience.timeline}</p>
                <ul>
                  {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
                    <li key={accomplishmentIndex}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={mainCardAnimationStates[2]}>
            <h2 className="text-xl font-bold mb-2">Education:</h2>
            {education.map((qualification, qualificationIndex) => (
              <div key={qualificationIndex} className="mb-4">
                <h3 className="text-lg font-bold">{qualification.qualification}</h3>
                <p className="text-lg">{qualification.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {categoryList.map((category, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              className={`
                relative left-1/2 -translate-x-1/2 p-4 
                ${darkMode ? 'card-dark' : 'card-light'} 
                ${boxAnimationStates[index + 1]}
              `}
            >
              <h2 className="text-xl font-bold mb-2">{category}</h2>
              <div className="flex flex-wrap justify-center"> 
                {itemList[index].map((item, itemIndex) => (
                  <div key={itemIndex} className="w-fit mx-1">
                    <div
                      className={`
                        relative left-1/2 -translate-x-1/2 
                        inline-block 
                        px-2 py-1 mb-2 mx-1
                        ${itemAnimationStates[index][itemIndex]} 
                        bg-slate-500 
                        text-white 
                      `}
                    >
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;