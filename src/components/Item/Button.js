import React from 'react';
import './Button.css';

function Button() {
    return (
        <div className="button" onClick={HandleClick}>
            <div className="cross"></div>
        </div>
    );
}

function HandleClick() {
    console.log('---', 'click');
    
}

export default Button;