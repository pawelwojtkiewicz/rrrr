"use client"

import React from 'react';
import { useSelector } from 'react-redux';
import { getRawKeywords } from './keywordsFeature/slices/rawKeywordsSlice';
import { getArraySortedKeywords } from './keywordsFeature/slices/sortedKeywordsSlice';
import { getBlacklistWords } from './keywordsFeature/slices/wordsBlacklistSlice';
import useRawKeywords from './keywordsFeature/hooks/useRawKeywords';
import useMyHook from './keywordsFeature/hooks/useMyHook';
import RawKeywordComponent from './keywordsFeature/components/RawKeywordComponent';
import SortedKeywordComponent from './keywordsFeature/components/SortedKeywordComponent';
import BlacklistWordsComponent from './keywordsFeature/components/BlacklistWordsComponent';

const App = () => {
  const rawKeywords = useSelector(getRawKeywords);
  const sortedKeywords = useSelector(getArraySortedKeywords);
  const blacklistWords = useSelector(getBlacklistWords);
  const {
    inputValue,
    handleInput,
    testTest,
  } = useRawKeywords();
  const {
    textareaValue,
    webpageInputValue,
    handleTextarea,
    handleSortWords,
    handleWebpageInputValue,
    getDataFromWebPages,
  } = useMyHook();



  return (
    <main>
      <div style={{ display: 'flex' }}>
        <section style={{ width: '50%' }}>

          <p>Raw keywords</p>
          {rawKeywords.map(rawKeyword => <RawKeywordComponent key={rawKeyword.id} {...rawKeyword} />)}

          <input type="text" value={webpageInputValue} onChange={handleWebpageInputValue} />
          &nbsp;
          <button onClick={getDataFromWebPages}>Add by webpages</button>

          <p>Paste a whole text</p>
          <textarea value={textareaValue} onChange={handleTextarea} />
          &nbsp;
          <button onClick={handleSortWords}>Sort and add your keyword</button>
          
        </section>
    
        <section style={{ width: '50%' }}>

          <p>Sorted keywords</p>
          {sortedKeywords.map(([name, amount]) => <SortedKeywordComponent key={name} name={name} amount={amount} />)}

        </section>
      </div>
      <div style={{ display: 'flex' }}>
        <section style={{ width: '50%' }}>

          <p>Blocked keywords</p>
          {blacklistWords.map(({id, name}) => <BlacklistWordsComponent key={id} id={id} name={name} />)}
        </section>
      </div>
    </main>
  );
};

export default App;
