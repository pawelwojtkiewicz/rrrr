import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const sortedKeywordsSlice = createSlice({
    name: 'sortedKeywords',
    initialState,
    reducers: {
        addSortedKeywords: (state, { payload: { sortedKeywords = [] }}) => {
            if (sortedKeywords.length >= 1) state.splice(0, state.length, ...sortedKeywords);
        },
    },
});

export const getSortedKeywords = state => state.sortedKeywords;

export const { addSortedKeywords } = sortedKeywordsSlice.actions;

export default sortedKeywordsSlice.reducer;
