"use client"

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlacklistWords } from '../slices/wordsBlacklistSlice';
import { addRawKeyword } from '../slices/rawKeywordsSlice';

const useMyHook = () => {
    const dispatch = useDispatch();
    const blockedWords = useSelector(getBlacklistWords);
    const [textareaValue, handleTextareaValue] = useState("");
    const [inputValue, handleInputValue] = useState("");

    const sortWords = (text) => {
        const noSpecialChars = text.replace(/[^a-zA-Z0-9ąęłśćżźóś]/g, ' ');
        const words0 = noSpecialChars.toLowerCase().trim().split(" ");

        const words1 = words0.map(x => {
            let a =  blockedWords.find(({ name }) => name === x);
            if (!a) return x
        }).filter(x => x)

        return words1;
    };

    const handleTextarea = ({ target: { value } }) => handleTextareaValue(value);

    const handleInput = ({ target: { value } }) => handleInputValue(value);

    const handleSortWords = () => {
        if (textareaValue) {
            const sortedWords = sortWords(textareaValue);
            dispatch(addRawKeyword({names: sortedWords}));
            handleTextareaValue("");
        }
    };

    const getDataFromWebPages = async () => {
        const response = await fetch(`https://test.elgof.io/api/getPage?webpage=${inputValue}`);
        const { text } = await response.json();

        const sortedWords = sortWords(text);
        dispatch(addRawKeyword({names: sortedWords}));
        handleInputValue("");
    }

    return {
        textareaValue,
        webpageInputValue: inputValue,
        handleTextarea,
        handleSortWords,
        handleWebpageInputValue: handleInput,
        getDataFromWebPages,
    };
};

export default useMyHook;
