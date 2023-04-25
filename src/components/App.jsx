// import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

import React, { useEffect, useState } from 'react';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contact'))
  );
  const [filterData, setfilterData] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  function checkNewName(newName) {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  }

  function addContact({ name, number }) {
    if (!checkNewName(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts([contact, ...contacts]);
    } else {
      alert(`${name} is already in contacts!`);
    }
  }

  function removeContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  function filterValue(e) {
    setfilterData(e.currentTarget.value.trim());
  }

  function filteredContacts() {
    const lowCase = filterData.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowCase)
    );
  }

  return (
    <div>
      <ContactForm onSubmit={data => addContact(data)} />
      <Filter value={filterData} onChange={filterValue} />
      <ContactList
        contacts={filteredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
}
