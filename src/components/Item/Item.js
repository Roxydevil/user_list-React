import React, { useState } from 'react';
import './Item.css';
import Picture from './Picture';
import Button from './Button';

function Item(props) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(props);
    return (
        <div className="item" style={
            props.person.id % 2 == 0 ? { backgroundColor: "#b2b2b2" } : {}
        }>
            <div className="mainInfo">
                <Picture path={props.person.picture.medium} />
                <div className="infoText last">{props.person.name.last}</div>
                <div className="infoText first">{props.person.name.first}</div>
                <div className="infoText username">{props.person.login.username}</div>
                <div className="infoText phone">{props.person.cell}</div>
                <div className="infoText location">{props.person.location.country}</div>
                <div className="button" onClick={() => setIsOpen(!isOpen)}>
                    <div className="cross"></div>
                </div>
            </div>
            {isOpen && <div className="fullInfo t">
                <div className="userName t">
                    {props.person.name.first + " "}
                    {props.person.name.last}
                </div>
                <div className="userInfo t">
                    <div className="userInfo_text t"></div>
                    <div className="userInfo_text t"></div>
                    <div className="userInfo_text t"></div>
                    <div className="userInfo_img" style={{
                        backgroundImage: `url(${props.person.picture.medium})`
                    }}></div>
                </div>
            </div>}
        </div>
    );
}

export default Item;