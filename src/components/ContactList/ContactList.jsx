import PropTypes from 'prop-types';

// import React, { Component } from 'react';

import { Wrapper, List, ListItem } from './ContactList.styled';

export function ContactList({ contacts, removeContact }) {
  return (
    <Wrapper>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button onClick={() => removeContact(contact.id)}>Delete</button>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};
