import React from 'react';
import ReactSokoban from './ReactSokoban';

function App() {
  return (
    <div className="App">
      <ReactSokoban width={20} height={12} tilesize={16} />
    </div>
  );
}

export default App;
