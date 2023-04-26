

import { removeContact } from 'redux/AddContactsSlice';
import { Wrapper, List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

export function ContactList() {
  const filterData = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const lowCase = filterData.toLowerCase();
const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowCase)
    )

  return (
    <Wrapper>
      <List>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
