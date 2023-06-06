import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = [];

export const rawKeywordsSlice = createSlice({
    name: 'rawKeywords',
    initialState,
    reducers: {
        addRawKeyword: (state, { payload: { name = "", names }}) => {
            if (names) {
                const keywords = names.map((name) => ({ id: uuid(), name: name.toLowerCase() }));
                const newArr = [
                    ...state,
                    ...keywords,
                ];
                state.splice(0, state.length, ...newArr);
                return
            }
            if (name) {
                const keywordData = { id: uuid(), name };
                state.push(keywordData);
            }
        },
        removeRawKeyword: (state, { payload: { id }}) => {
            const newRawKeywords = state.filter((word) => word.id !== id);
            state.splice(0, state.length, ...newRawKeywords);
        },

        removeSameNameRawKeywords: (state, { payload: { name }}) => {
            const newRawKeywords = state.filter((word) => word.name !== name);
            state.splice(0, state.length, ...newRawKeywords);
        },
    },
});

export const getRawKeywords = state => state.rawKeywords;

export const getRawKeywordById = (state, wordId) =>
    state.rawKeywords.find(word => word.id === wordId);

export const { addRawKeyword, removeRawKeyword, removeSameNameRawKeywords } = rawKeywordsSlice.actions;

export default rawKeywordsSlice.reducer;
