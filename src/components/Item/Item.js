import React from 'react';
import './Item.css';
import Picture from './Picture';
import Button from './Button';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            //isOpen: false,
            //onButtonClick: this.props.onButtonClick,
        }
    }


    render() {
        const { isOpen, onButtonClick } = this.props;
        return (
            <div className="item" style={
                this.props.person.id % 2 == 0 ? { backgroundColor: "#b2b2b2" } : {}
            }>
                <div className="mainInfo">
                    <Picture path={this.props.person.picture.medium} />
                    <div className="infoText last">{this.props.person.name.last}</div>
                    <div className="infoText first">{this.props.person.name.first}</div>
                    <div className="infoText username">{this.props.person.login.username}</div>
                    <div className="infoText phone">{this.props.person.cell}</div>
                    <div className="infoText location">{this.props.person.location.country}</div>
                    <div className="button" onClick={onButtonClick}>
                        <div className={`cross ${isOpen ? 'minus' : ''}`} ></div>
                    </div>
                </div>
                <div className={`fullInfoDefault ${isOpen ? 'fullInfo' : ''}`}>
                    <div className="userName">
                        <div>
                            {this.props.person.name.first + " "}
                            {this.props.person.name.last}
                        </div>
                        <div className={`genderIcon ${this.props.person.gender == 'male' ? 'male' : 'female'}`}></div>
                    </div>
                    <div className="userInfo">
                        <div className="userInfo_text">
                            <b>Username: </b>{this.props.person.login.username}<br />
                            <b>Registered: </b>{this.props.person.registered.date.substring(0, 10)}<br />
                            <b>Email: </b>{this.props.person.email}<br />
                        </div>
                        <div className="userInfo_text">
                            <b>Address: </b>{this.props.person.location.street.name + " " + this.props.person.location.street.number}<br />
                            <b>City: </b>{this.props.person.location.city}<br />
                            <b>Zipcode: </b>{this.props.person.location.postcode}<br />
                        </div>
                        <div className="userInfo_text">
                            <b>Birthday: </b>{this.props.person.dob.date.substring(0, 10)}<br />
                            <b>Phone: </b>{this.props.person.phone}<br />
                            <b>Cell: </b>{this.props.person.cell}<br />
                        </div>
                        <div className="userInfo_img" style={{
                            backgroundImage: `url(${this.props.person.picture.medium})`
                        }}></div>
                    </div>
                </div>
            </div>
        );
    }
}
