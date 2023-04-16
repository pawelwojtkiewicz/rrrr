import React from 'react';
import { useSelector } from 'react-redux';
import { getRawKeywords } from './keywordsFeature/slices/rawKeywordsSlice';
import { getArraySortedKeywords } from './keywordsFeature/slices/sortedKeywordsSlice';
import useRawKeywords from './keywordsFeature/hooks/useRawKeywords';
import RawKeywordComponent from './keywordsFeature/components/RawKeywordComponent';
import SortedKeywordComponent from './keywordsFeature/components/SortedKeywordComponent';

const App = () => {
  const rawKeywords = useSelector(getRawKeywords);
  const sortedKeywords = useSelector(getArraySortedKeywords);
  const {
    inputValue,
    handleInput,
    handleAdd,
  } = useRawKeywords();

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <section style={{ width: '50%' }}>
          <p>Raw keywords</p>
          {rawKeywords.map(rawKeyword => <RawKeywordComponent key={rawKeyword.id} {...rawKeyword} />)}
          <input type="text" value={inputValue} onChange={handleInput} />
          <button onClick={handleAdd}>Add your keyword</button>
        </section>
        <section style={{ width: '50%' }}>
          <p>Sorted keywords</p>
          {sortedKeywords.map(([name, amount]) => <SortedKeywordComponent key={name} name={name} amount={amount} />)}
        </section>
      </div>
    </main>
  );
};

export default App;
