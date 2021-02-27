import React, { useState } from 'react';
import './Item.css';
import Picture from './Picture';
import Button from './Button';


function Item(props) {
    const [isOpen, setIsOpen] = useState(false);
    //console.log();
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
                    <div className={`cross ${isOpen ? 'minus' : ''}`} ></div>
                </div>
            </div>
            <div className={`fullInfoDefault ${isOpen ? 'fullInfo' : ''}`}>
                <div className="userName">
                    <div>
                    {props.person.name.first + " "}
                    {props.person.name.last}
                    </div>
                    <div className={`genderIcon ${props.person.gender == 'male' ? 'male' : 'female'}`}></div>
                </div>
                <div className="userInfo">
                    <div className="userInfo_text">
                        <b>Username: </b>{props.person.login.username}<br />
                        <b>Registered: </b>{props.person.registered.date.substring(0,10)}<br />
                        <b>Email: </b>{props.person.email}<br />
                    </div>
                    <div className="userInfo_text">
                        <b>Address: </b>{props.person.location.street.name + " " + props.person.location.street.number}<br />
                        <b>City: </b>{props.person.location.city}<br />
                        <b>Zipcode: </b>{props.person.location.postcode}<br />
                    </div>
                    <div className="userInfo_text">
                        <b>Birthday: </b>{props.person.dob.date.substring(0, 10)}<br />
                        <b>Phone: </b>{props.person.phone}<br />
                        <b>Cell: </b>{props.person.cell}<br />
                    </div>
                    <div className="userInfo_img" style={{
                        backgroundImage: `url(${props.person.picture.medium})`
                    }}></div>
                </div>
            </div>
        </div>
    );
}

export default Item;