import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  AddBox,
  Label,
  AddContactButton,
} from './ContactForm.styled';
import React, { useState } from 'react';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const data = {
    name,
    number,
  };

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

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
    reset();
  }

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <AddBox onSubmit={handleSubmit}>
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
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
        />
        <AddContactButton type="submit" onClick={handleSubmit}>
          Add contact
        </AddContactButton>
      </AddBox>
    </Wrapper>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

