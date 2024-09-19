import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, name, email } = location.state.contact;

    const [contact, setContact] = useState({ id, name, email });

    const update = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("Enter field values");
            return;
        }
        props.updateContactHandler(contact);
        setContact({ ...contact, name: "", email: "" });
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
};

export default EditContact;