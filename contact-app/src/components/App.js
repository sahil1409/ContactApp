import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import api from '../api/contacts'
import EditContact from './EditContact'

function App() {
  const LOCAL_STORAGE_KEY = "secretKeyNew";

  // State for contacts
  const [contacts, setContacts] = useState([]);

  // State for searchTerm
  const [searchTerm, setSearchTerm] = useState("");

  // State for searchResults
  const [searchResults, setSearchResults] = useState("");

  // Function to retrieve contacts from API
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  }

  // useEffect to fetch contacts from the API on component mount
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);  // Empty dependency array ensures this only runs once when the component mounts

  // Add contact handler
  const addContactHandler = async (contact) => {
    //console.log(contact);

    const request = {
      id: uuidv4(),
      ...contact
    };

    const response = await api.post('/contacts', request);

    setContacts([...contacts, response.data]);
  };

  // Remove contact handler
  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`);

    const newContactList = contacts.filter((contact => {
      return contact.id !== id;
    }));
    setContacts(newContactList);
  };

  const updateContactHandler = async (contact) => {

    const response = await api.put(`/contacts/${contact.id}`, contact);

    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    )
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  // useEffect to save contacts to localStorage whenever the contacts state changes
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/add' Component={() => (<AddContact addContactHandler={addContactHandler} />)}></Route>
          <Route path='/' element={<ContactList contacts={searchTerm.length > 0 ? searchResults : contacts} getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler} />}></Route>
          <Route path='/contact/:id' element={<ContactDetail />}></Route>
          <Route path='/edit' Component={() => (<EditContact updateContactHandler={updateContactHandler} />)}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;