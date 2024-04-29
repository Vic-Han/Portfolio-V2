import React from 'react';
import './coolButton.css';
function CoolButton({darkMode, click}){

    return(
        <button className="button" onClick={click}>
            <p>Button</p>
        </button>
    )
}

export default CoolButton;