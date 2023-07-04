import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactApi,
  editContactApi,
  fetchContactsApi,
  deleteContactApi,
} from './connectionAPI.js'


export const fetchContacts =  createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchContactsApi();
      return data;
    } catch (error) {
return thunkAPI.rejectWithValue(error.message);
    }
  },
 {
  condition: (_, { getState }) => {
    return Boolean(getState().auth.token);
  }
}
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await addContactApi(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact =  createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const data = await editContactApi(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await deleteContactApi(contactId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);