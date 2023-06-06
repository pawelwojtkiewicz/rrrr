"use client"

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRawKeyword } from '../slices/rawKeywordsSlice';
import { addWordToBlacklist } from '../slices/wordsBlacklistSlice';

const RawKeywordComponent = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <button onClick={() => dispatch(removeRawKeyword({ id, name }))}>Remove me</button>
      &nbsp;
      <button onClick={() => dispatch(addWordToBlacklist({ name }))}>Block me</button>
      &nbsp;
      <p style={{ display: 'inline-block', margin: '0 5px 0 0' }}>{name}</p>
    </div>
  );
};

export default React.memo(RawKeywordComponent);
