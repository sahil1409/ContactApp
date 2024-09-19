// import React, { useState } from "react";

// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: ""
//     }
//     add = (e) => {
//         e.preventDefault();
//         if (this.state.name === "" || this.state.email === "") {
//             alert("Enter field values");
//             return
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({ name: "", email: "" });
//         console.log(this.props);
//         //this.props.history.push("/"); no longer supported in react router v6
//     }
//     render() {
//         return (
//             <div className="ui main">
//                 <h2>Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
//                     </div>
//                     <button className="ui button blue">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default AddContact;

import React from "react";
import { useNavigate } from "react-router-dom";

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Enter field values");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        console.log(this.props);
        // Use navigate function passed as a prop
        this.props.navigate("/");

        // Link: Used navigate through routes via user interactions i.e. clickable links.

        // useNavigate: Used for programmatic navigation after an action (e.g., form submission, button click) .
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <AddContact {...props} navigate={navigate} />;
}

export default WithNavigate;