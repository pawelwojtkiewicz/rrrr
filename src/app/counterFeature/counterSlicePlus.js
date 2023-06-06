"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counterPlus',
    initialState,
    reducers: {
        increment: (state, { payload, type }) => {
            state.count += 1;
        },
        // decrement: {
        //     reducer(state, { payload, type }) {
        //         console.log("payload: ", payload);
        //         console.log("type: ", type);
        //         state.count -= 1;
        //     },
        //     prepare(symbol, title = "Nowy tytuł") {
        //         return {
        //             payload: {
        //                 symbol,
        //                 //title,
        //             },
        //         };
        //     },
        // },
    },
});

export const getCountPlus = (state) => state.counterPlus.count;

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
