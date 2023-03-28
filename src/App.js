import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getKeyWords, add, remove, edit, subtractAmount } from './keyWordsFeature/keyWordsSlice';

const App = () => {
  const dispatch = useDispatch();
  const keyWords = useSelector(getKeyWords);

  return (
    <main>
      <section>
        {keyWords.map(({id, name, amount}) => (
          <div key={id} style={{display: 'flex', margin: '0 0 10px 0'}}>
            <p>{name}</p>&nbsp;&nbsp;
            <p>amount: {amount}</p>&nbsp;&nbsp;
            <button onClick={() => dispatch(remove({name, id}))}>Remove me</button>
            <button onClick={() => dispatch(subtractAmount({id}))}>subtract one</button>
          </div>
        ))}
        <input type="text" onBlur={({target: { value }}) => value && dispatch(add(value))} />
      </section>
    </main>
  );
};


export default App;
