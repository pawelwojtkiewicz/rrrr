import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addRawKeyword, removeRawKeyword, removeSameNameRawKeywords } from '../slices/rawKeywordsSlice';
import { addSortedKeywords, removeSortedKeywords, removeAllSortedKeywordsOfOneType } from '../slices/sortedKeywordsSlice';
import { addWordToBlacklist } from '../slices/wordsBlacklistSlice';

const sortedKeywordsListener = createListenerMiddleware()

sortedKeywordsListener.startListening({
    actionCreator: addRawKeyword,
    effect: async ({ payload: { name = '', names } = {} }, listenerApi) => {
        if(names) names.forEach(x => listenerApi.dispatch(addSortedKeywords({ keyword: x })));
        if (name) listenerApi.dispatch(addSortedKeywords({ keyword: name }));
    },
});

sortedKeywordsListener.startListening({
    actionCreator: removeRawKeyword,
    effect: async ({ payload: { name = '' } = {} }, listenerApi) => {
        listenerApi.dispatch(removeSortedKeywords({ keyword: name }));
    },
});

sortedKeywordsListener.startListening({
    actionCreator: addWordToBlacklist,
    effect: async ({ payload: { name = '' } = {} }, listenerApi) => {
        listenerApi.dispatch(removeSameNameRawKeywords({ name }));
        listenerApi.dispatch(removeAllSortedKeywordsOfOneType({ keyword: name }));
    },
});

export default sortedKeywordsListener;
