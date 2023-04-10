import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRawKeyword } from '../slices/rawKeywordsSlice';

const useKeywords = () => {
  const dispatch = useDispatch();
  const [inputValue, handleInputValue] = useState("");

  const handleInput = ({ target: { value } }) => handleInputValue(value);

  const handleAdd = () => {
    if (inputValue) {
        dispatch(addRawKeyword({name: inputValue}));
        handleInputValue("");
    }
  };

  return {
    inputValue,
    handleInput,
    handleAdd,
  };
};

export default useKeywords;
