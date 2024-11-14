// AnimationToggle.jsx
// Taken practically verbatim from: https://uiverse.io/SelfMadeSystem/selfish-starfish-40
import React from 'react';
import './animationToggle.css'


/**
 * @component AnimationToggle
 * @description
 * A three-star radio button group for selecting animation intensity.
 * 
 * @props
 * - value: 'Minimal' | 'Normal' | 'Extreme' - Current animation setting
 * - change: function - Callback to update animation state
 * - dark: boolean - Applies dark theme styling
 * 
 * @features
 * - Custom SVG star icons for each option
 * - Dark mode compatibility with class switching
 * - Radio button functionality with custom styling
 */

function AnimationToggle({value, change, dark}){

    return (
        <div className={`rating ${dark ? 'dark' : ''}`}>
            <input type="radio" id="star-1" name="star-radio" value={'Extreme'} checked={value === 'Extreme'} onChange={(e) => change(e.target.value)} />
            <label htmlFor="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value={'Normal'} checked={value === 'Normal'} onChange={(e) => change(e.target.value)} />
            <label htmlFor="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value={'Minimal'} checked={value === 'Minimal'} onChange={(e) => change(e.target.value)} />
            <label htmlFor="star-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            
        </div>
    )
}

export default AnimationToggle;

