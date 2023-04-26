import { createSlice } from '@reduxjs/toolkit';

const AddContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload ],

    removeContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, removeContact } = AddContactsSlice.actions;
export const contactsReducer = AddContactsSlice.reducer;