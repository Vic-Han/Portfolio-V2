// ReadOnlyStars.jsx
// All styling from: https://uiverse.io/SelfMadeSystem/selfish-starfish-40
import React from 'react';
import './readOnlyStars.css'

/**
 * 
 * @component ReadOnlyStars
 * @description
 * A read-only star rating component that displays a row of filled stars.
 * 
 * @param {Object} props - Component props
 * @param {number} props.value - Number of stars to display (1-5)
 * @returns {React.ReactElement} A row of filled stars
 */
function ReadOnlyStars({value}){

    return (
        <div className="stars">
            {Array.from(Array(value).keys()).map((i) => 
             <label key ={i}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>)
            }
            
        </div>
    )
}

export default ReadOnlyStars;