import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = [];

export const wordsBlacklistSlice = createSlice({
    name: 'wordsBlacklist',
    initialState,
    reducers: {
        addWordToBlacklist: (state, { payload: { name = "" }}) => {
            if (name) {
                const wordData = { id: uuid(), name: name.toLowerCase() };
                state.push(wordData);
            }
        },
        removeWordFromBlacklist: (state, { payload: { id }}) => {
            const newWords = state.filter((word) => word.id !== id);
            state.splice(0, state.length, ...newWords);
        },
    },
});

export const getBlacklistWords = state => state.wordsBlacklist;

export const { addWordToBlacklist, removeWordFromBlacklist } = wordsBlacklistSlice.actions;

export default wordsBlacklistSlice.reducer;
