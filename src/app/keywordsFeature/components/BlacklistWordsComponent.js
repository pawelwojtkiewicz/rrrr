"use client"

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWordFromBlacklist } from '../slices/wordsBlacklistSlice';

const BlacklistWordsComponent = ({ id, name }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ margin: '0 0 10px 0' }}>
        <button onClick={() => dispatch(removeWordFromBlacklist({ id }))}>Unblock me</button>
        &nbsp;
        <p style={{ display: 'inline-block', margin: '0 5px 0 0' }}>{name}</p>
        </div>
    );
};

export default BlacklistWordsComponent;
