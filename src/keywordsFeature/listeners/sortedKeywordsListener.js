import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addRawKeyword, removeRawKeyword } from '../slices/rawKeywordsSlice';
import { addSortedKeywords } from '../slices/sortedKeywordsSlice';
import { sortKeywords } from '../tools/sortedKeywordsTools';

const sortedKeywordsListener = createListenerMiddleware()

sortedKeywordsListener.startListening({
    actionCreator: addRawKeyword,
    effect: async (action, listenerApi) => {
        const rawKeywords = listenerApi.getState().rawKeywords;
        const sortedKeywords = sortKeywords(rawKeywords);
        listenerApi.dispatch(addSortedKeywords({ sortedKeywords }));
    },
});

sortedKeywordsListener.startListening({
    actionCreator: removeRawKeyword,
    effect: async (action, listenerApi) => {
        const rawKeywords = listenerApi.getState().rawKeywords;
        const sortedKeywords = sortKeywords(rawKeywords);
        listenerApi.dispatch(addSortedKeywords({ sortedKeywords }));
    },
});

export default sortedKeywordsListener;
