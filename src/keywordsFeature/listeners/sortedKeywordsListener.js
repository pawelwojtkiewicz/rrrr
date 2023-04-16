import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addRawKeyword, removeRawKeyword } from '../slices/rawKeywordsSlice';
import { addSortedKeywords, removeSortedKeywords } from '../slices/sortedKeywordsSlice';

const sortedKeywordsListener = createListenerMiddleware()

sortedKeywordsListener.startListening({
    actionCreator: addRawKeyword,
    effect: async ({ payload: { name = '' } = {} }, listenerApi) => {
        listenerApi.dispatch(addSortedKeywords({ keyword: name }));
    },
});

sortedKeywordsListener.startListening({
    actionCreator: removeRawKeyword,
    effect: async ({ payload: { name = '' } = {} }, listenerApi) => {
        listenerApi.dispatch(removeSortedKeywords({ keyword: name }));
    },
});

export default sortedKeywordsListener;
