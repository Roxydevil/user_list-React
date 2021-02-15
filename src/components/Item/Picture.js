import React from 'react';
import './Picture.css';

function Picture(props) {
    return (
        <div className="picture" style={{
            backgroundImage: `url(${props.path})`
        }}></div>
    );
}

export default Picture;