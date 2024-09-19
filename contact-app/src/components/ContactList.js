import { React, useRef } from "react";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const inputElement = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    // const contacts = [
    //     {
    //         id: "1",
    //         "name": "sahil",
    //         "email": "abcd@gmail.com"
    //     }
    // ];

    const getSearchTerm = () => {
        props.searchKeyword(inputElement.current.value);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    })
    return (
        <div className="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue" style={{ float: "right" }}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search" style={{ marginBottom: "20px" }}>
                <div className="ui icon input" style={{ width: "100%" }}>
                    <input ref={inputElement} type="text" placeholder="Search Contact" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
        </div>
    );
}

export default ContactList;