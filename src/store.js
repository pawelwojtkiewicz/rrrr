import { configureStore } from "@reduxjs/toolkit";
import keyWordsReducer from './keyWordsFeature/keyWordsSlice';
import counterReducerPlus from './counterFeature/counterSlicePlus';
import counterReducerMinus from './counterFeature/counterSliceMinus';

export const store = configureStore({
    reducer: {
        keyWords: keyWordsReducer,
        counterPlus: counterReducerPlus,
        counterMinus: counterReducerMinus,
    },
});
