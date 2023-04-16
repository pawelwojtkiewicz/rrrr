import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRawKeyword } from '../slices/rawKeywordsSlice';

const RawKeywordComponent = ({ id, name }) => {
    const dispatch = useDispatch();

    return (
      <div style={{ margin: '0 0 10px 0' }}>
        <p style={{ display: 'inline-block', margin: '0 5px 0 0' }}>{name}</p>
        <button onClick={() => dispatch(removeRawKeyword({ id, name }))}>Remove me</button>
    </div>
)};

export default React.memo(RawKeywordComponent);
