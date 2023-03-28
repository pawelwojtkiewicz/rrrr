import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
    words: [{id: "0", name: "JQuery", amount: 1}],
};

export const keyWordsSlice = createSlice({
    name: 'keyWords',
    initialState,
    reducers: {
        add: (state, { payload, type }) => {
            const isInState = state.words.find(obj => obj.name.toLowerCase().trim() === payload.toLowerCase().trim());
            // console.log('payload: ', payload); payload:  'React'
            // console.log('type: ', type); type:  'keyWords/add'
            if (isInState) isInState.amount += 1
            else state.words.push({id: uuid(), name: payload, amount: 1});
        },
        remove: (state, { payload: { name, id }, type }) => {
            console.log('removed: ', name, id);
            const newWords = state.words.filter((obj) => obj.id !== id);
            state.words = newWords;
        },
        edit: (state, { payload, type }) => {
            state.count += 1;
        },
        subtractAmount: (state, { payload: { id }, type }) => {
            const keyWord = state.words.find(obj => obj.id === id);
            if (keyWord.amount > 1) keyWord.amount -= 1
            else {
                const elId = state.words.findIndex((obj) => obj.id === id);
                state.words.splice(elId, 1);
            }
        },
    },
});

export const getKeyWords = (state) => state.keyWords.words;

export const { add, remove, edit, subtractAmount } = keyWordsSlice.actions;

export default keyWordsSlice.reducer;
