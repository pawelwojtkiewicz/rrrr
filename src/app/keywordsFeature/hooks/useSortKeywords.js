"use client"

import { useDispatch } from 'react-redux';
import { addSortedKeywords } from '../slices/sortedKeywordsSlice';

const useSortKeywords = () => {
  const dispatch = useDispatch();

  const sortKeywords = rawKeywords => Object.entries(rawKeywords.reduce((acc, { name }) => {
    acc.hasOwnProperty(name.toString()) ? acc[name] += 1 : acc[name] = 1;
    return acc;
  }, {}));

  const handleSortKeywords = rawKeywords => {
    if(Array.isArray(rawKeywords) && rawKeywords.length >= 1) {
      const sortedKeywords = sortKeywords(rawKeywords);
      dispatch(addSortedKeywords({ sortedKeywords }));
    }
  };

  return {
    handleSortKeywords,
  };
};

export default useSortKeywords;
