import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectFilter } from './filtersSlice';

const handlePending = state => {
  state.error = false;
  state.loading = true;
}

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
  }
});

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContact = createSelector([selectContacts, selectFilter], (contacts, textFilter) => {
  return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
)

export const contactsReducer = contactsSlice.reducer;