"use client"

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import rawKeywordsReducer from './keywordsFeature/slices/rawKeywordsSlice';
import sortedKeywordsReducer from './keywordsFeature/slices/sortedKeywordsSlice';
import sortedKeywordsListener from './keywordsFeature/listeners/sortedKeywordsListener';
import wordsBlacklistReducer from './keywordsFeature/slices/wordsBlacklistSlice';

import counterReducerPlus from './counterFeature/counterSlicePlus';
import counterReducerMinus from './counterFeature/counterSliceMinus';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['rawKeywords', 'sortedKeywords', 'wordsBlacklist']
};

const rootReducer = combineReducers({ 
    rawKeywords: rawKeywordsReducer,
    sortedKeywords: sortedKeywordsReducer,
    counterPlus: counterReducerPlus,
    counterMinus: counterReducerMinus,
    wordsBlacklist: wordsBlacklistReducer,
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer,
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(sortedKeywordsListener.middleware),
});

export const persistor = persistStore(store);
