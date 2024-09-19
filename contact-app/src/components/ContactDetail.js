import React from "react";
import { Link, useLocation } from 'react-router-dom';
import user from '../images/user.jpg';

const ContactDetail = () => {
    const location = useLocation();
    //console.log(location);
    const { name, email } = location.state.contact;
    return (
        < div className="main" >
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui centered grid" style={{ marginTop: '10px' }}>
                <Link to='/'>
                    <button className="ui button blue">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div >
    );
}

export default ContactDetail;