import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
};

export const counterSlice = createSlice({
    name: 'counterMinus',
    initialState,
    reducers: {
        // increment: (state, { payload, type }) => {
        //     state.count += 1;
        // },
        decrement: {
            reducer(state, { payload, type }) {
                console.log("payload: ", payload);
                console.log("type: ", type);
                state.count -= 1;
            },
            prepare(symbol, title = "Nowy tytuł") {
                return {
                    payload: {
                        symbol,
                        //title,
                    },
                };
            },
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase("counterPlus/increment", (state, action) => {
                console.log("Wywołuję się z minusa i dodaje teraz do minusa LOL");
                state.count += 1;
            })
    },
});

export const getCountMinus = (state) => state.counterMinus.count;

export const { decrement } = counterSlice.actions;

export default counterSlice.reducer;
