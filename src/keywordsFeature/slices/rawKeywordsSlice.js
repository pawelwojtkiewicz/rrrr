import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState =  [];

export const rawKeywordsSlice = createSlice({
    name: 'rawKeywords',
    initialState,
    reducers: {
        addRawKeyword: (state, { payload: { name = "" }}) => {
            name && state.push({id: uuid(), name})
        },
        removeRawKeyword: (state, { payload: { id }}) => {
            const newRawKeywords = state.filter((word) => word.id !== id);
            state.splice(0, state.length, ...newRawKeywords);
        },
    },
});

export const getRawKeywords = state => state.rawKeywords;

export const getRawKeywordById = (state, wordId) =>
    state.rawKeywords.find(word => word.id === wordId);

export const getRawKeywordByName = (state, wordName) =>
    state.rawKeywords.find(word => word.name === wordName);

export const { addRawKeyword, removeRawKeyword } = rawKeywordsSlice.actions;

export default rawKeywordsSlice.reducer;
