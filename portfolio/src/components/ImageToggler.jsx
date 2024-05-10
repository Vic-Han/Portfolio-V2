import React,{useState, useEffect} from "react";
import mainPictures from "../data/MainPictures";
import './ImageToggler.css';
function ImageToggler({animation}){

    const length = mainPictures.length;

    const [index, setIndex] = useState(0);
    console.log(mainPictures[index])
    const [imageState, setImageState] = useState('');
    const basicTransition = () => { 
        setImageState('slide-out-img');
        setTimeout(() => {
            setIndex((index + 1) % length);
            setImageState('slide-in-img');
            setTimeout(() => {
                setImageState('');
            }, 1000);
        }, 1000);
    }
    const normalTransition = () => { }
    const extremeTransition = () => { }

    
    const transition = () => {  
        if(animation === 'Low'){
            basicTransition();
        }
        else if(animation === 'Normal'){
            normalTransition();
        }
        else if(animation === 'Extreme'){
            extremeTransition();
        }
    }
    useEffect(() => {
        setInterval(() => {
          transition()
        }, 8000);
      },[])
    return (
        <div className="py-5 overflow-x-hidden w-full pr-3 pl-1">
            <img className={`base-img ${imageState}`} src = {mainPictures[index]} alt = "PersonalPhoto"/>
        </div>
    )
}

export default ImageToggler;