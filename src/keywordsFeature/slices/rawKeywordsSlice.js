import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import { 
    saveRawKeywordToLocalStorage,
    removeRawKeywordFromLocalStorage,
} from '../tools/handleLocalStorage';
import { getInitialRawKeywordsLocalStorage } from '../tools/handleLocalStorage';

const initialState = getInitialRawKeywordsLocalStorage();

export const rawKeywordsSlice = createSlice({
    name: 'rawKeywords',
    initialState,
    reducers: {
        addRawKeyword: (state, { payload: { name = "" }}) => {
            if (name) {
                const keywordData = { id: uuid(), name };
                state.push(keywordData);
                saveRawKeywordToLocalStorage(keywordData);
            }
        },
        removeRawKeyword: (state, { payload: { id }}) => {
            const newRawKeywords = state.filter((word) => word.id !== id);
            state.splice(0, state.length, ...newRawKeywords);
            removeRawKeywordFromLocalStorage(id);
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
