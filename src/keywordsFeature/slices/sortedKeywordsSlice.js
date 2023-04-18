import { createSlice } from "@reduxjs/toolkit";
import { 
    saveSortedKeywordToLocalStorage,
    removeSortedKeywordFromLocalStorage,
} from '../tools/handleLocalStorage';
import { getInitialSortedKeywordsLocalStorage } from '../tools/handleLocalStorage';

const initialState = getInitialSortedKeywordsLocalStorage();

export const sortedKeywordsSlice = createSlice({
    name: 'sortedKeywords',
    initialState,
    reducers: {
        addSortedKeywords: (state, { payload: { keyword = '' }}) => {
            if (state.hasOwnProperty(keyword)) {
                state[keyword]++
            } else {
                state[keyword] = 1;
            }
            saveSortedKeywordToLocalStorage(keyword);
        },
        removeSortedKeywords: (state, { payload: { keyword = '' }}) => {
            if (state[keyword] > 1) {
                state[keyword]--
            } else {
                delete state[keyword]; 
            }
            removeSortedKeywordFromLocalStorage(keyword);
        },
    },
});

export const getSortedKeywords = state => state.sortedKeywords;

export const getArraySortedKeywords = state => Object.entries(state.sortedKeywords);

export const { addSortedKeywords, removeSortedKeywords } = sortedKeywordsSlice.actions;

export default sortedKeywordsSlice.reducer;
