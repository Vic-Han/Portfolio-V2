import React,{ useState, useEffect } from 'react';
import './animationToggle.css'
function AnimationToggle({value, change, dark}){

    const [selected, setSelected] = useState(value);

    const handleClick = (value) => {    
        setSelected(value);
        change(value);
    }
    return (
        <div className={"rating " + (dark ? 'dark' : '')}>
            <input type="radio" id="star-1" name="star-radio" value={'Extreme'} checked={selected === 'Extreme'} onChange={(e) => handleClick(e.target.value)} />
            <label htmlFor="star-1" onClick={() => handleClick(3)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value={'Normal'} checked={selected === 'Normal'} onChange={(e) => handleClick(e.target.value)} />
            <label htmlFor="star-2" onClick={() => handleClick(2)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value={'Minimal'} checked={selected === 'Minimal'} onChange={(e) => handleClick(e.target.value)} />
            <label htmlFor="star-3" onClick={() => handleClick(1)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            
        </div>
    )
}

export default AnimationToggle;

