import React from 'react';
import { Recoding } from './pages/index';

const state = {
  names: [
    {name : 'This is your first recording 1'},
    {name : 'This is your first recording 2'}
    ]
}

function App() {
  return (
    <div>
      <Recoding name={state.names[0].name} />
      <Recoding name={state.names[1].name} />
    </div>
  );
}

export default App;