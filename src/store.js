import { configureStore } from "@reduxjs/toolkit";
import rawKeywordsReducer from './keywordsFeature/slices/rawKeywordsSlice';
import sortedKeywordsReducer from './keywordsFeature/slices/sortedKeywordsSlice';
import sortedKeywordsListener from './keywordsFeature/listeners/sortedKeywordsListener';

import counterReducerPlus from './counterFeature/counterSlicePlus';
import counterReducerMinus from './counterFeature/counterSliceMinus';

export const store = configureStore({
    reducer: {
        rawKeywords: rawKeywordsReducer,
        sortedKeywords: sortedKeywordsReducer,
        counterPlus: counterReducerPlus,
        counterMinus: counterReducerMinus,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(sortedKeywordsListener.middleware),
});
