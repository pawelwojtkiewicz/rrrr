"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const sortedKeywordsSlice = createSlice({
    name: 'sortedKeywords',
    initialState,
    reducers: {
        addSortedKeywords: (state, { payload: { keyword = '' }}) => {
            const kword = keyword.toLowerCase()
            if (state.hasOwnProperty(kword)) {
                state[kword]++
            } else {
                state[kword] = 1;
            }
        },
        removeSortedKeywords: (state, { payload: { keyword = '' }}) => {
            const kword = keyword.toLowerCase()
            if (state[kword] > 1) {
                state[kword]--
            } else {
                delete state[kword]; 
            }
        },
        removeAllSortedKeywordsOfOneType: (state, { payload: { keyword = '' }}) => {
            const kword = keyword.toLowerCase()
            delete state[kword]; 
        },
    },
});

export const getSortedKeywords = state => state.sortedKeywords;

export const getArraySortedKeywords = state => Object.entries(state.sortedKeywords);

export const { addSortedKeywords, removeSortedKeywords, removeAllSortedKeywordsOfOneType } = sortedKeywordsSlice.actions;

export default sortedKeywordsSlice.reducer;
