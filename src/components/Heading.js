import './Heading.css';

function Heading() {
    return (
        <div className="heading">
            <div className="blank-left"></div>
            <div className="headingItem">Last</div>
            <div className="headingItem">First</div>
            <div className="headingItem">Username</div>
            <div className="headingItem">Phone</div>
            <div className="headingItem">Location</div>
            <div className="blank-right"></div>
        </div>
    );
}

export default Heading;