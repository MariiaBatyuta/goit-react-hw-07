import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

axios.defaults.baseURL = "https://66004aa1df565f1a614611d5.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const responce = await axios.get("/contacts");
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const responce = await axios.post("/contacts", newContact);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})