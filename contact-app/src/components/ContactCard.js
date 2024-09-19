import React from "react";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        < div className="item" >
            <img className="ui avatar image" src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png" alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red" }}
                onClick={() => props.clickHandler(id)}>
            </i>
            <Link to={`/edit`} state={{ contact: props.contact }}>
                <i className="edit alternate outline icon" style={{ color: "blue" }}>
                </i>
            </Link>
        </div >
    );
}

export default ContactCard;