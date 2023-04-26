import {
  Wrapper,
  Title,
  AddBox,
  Label,
  AddContactButton,
} from './ContactForm.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/AddContactsSlice';


export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const data = {
    name,
    number,
  };

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  function handleValue(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  }

  function checkNewName(newName) {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  }

function addContacts ({ name, number }) {
    if (!checkNewName(name)) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(contact));
    } else {
      alert(`${name} is already in contacts!`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addContacts(data);
    reset();
  }

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <AddBox onSubmit={handleSubmit} name='addContact'>
        <Label>Name</Label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleValue}
          placeholder="Введите имя"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
        />

        <Label>Number</Label>

        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleValue}
          placeholder="Введите номер телефона"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона может состоять только из цифр и тире."
          required
        />
        <AddContactButton type="submit" onClick={handleSubmit} name='addContact'>
          Add contact
        </AddContactButton>
      </AddBox>
    </Wrapper>
  );
}


