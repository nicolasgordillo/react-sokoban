import React from 'react';
import Header from './Header';
import ReactSokoban from './ReactSokoban';

function App() {
  return (
    <div className="App">
      <Header width={20*32} />
      <ReactSokoban width={20} height={12} tilesize={32} />
    </div>
  );
}

export default App;
