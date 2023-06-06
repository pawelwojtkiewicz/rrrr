import React from 'react';

const SortedKeywordComponent = ({ name, amount }) => (
    <p key={name}>{name}: {amount}</p>
);

export default SortedKeywordComponent;
