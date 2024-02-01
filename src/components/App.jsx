import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const formSubmit = data => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} вже присутній`);
      return;
    }
    const id = nanoid();
    const newContacts = [...contacts, { id, ...data }];
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleSearchChange = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const contactsFromStorage = localStorage.getItem('contacts');
    if (contactsFromStorage) {
      setContacts(JSON.parse(contactsFromStorage));
    }
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      {' '}
      <h1>Phonebook</h1>
      <ContactForm submit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleSearchChange} />
      <ContactList deleteContact={deleteContact} contacts={filteredContacts} />
    </div>
  );
};

export default App;
