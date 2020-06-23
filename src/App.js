import React from 'react';
import './App.css';
import Table from './app/components/Table';
import UndoRedo from './app/components/UndoRedo';
import Save from './app/components/Save';

function App() {
  return (
    <div className="App">
      <Table />
      <UndoRedo />
      <Save />
    </div>
  );
}

export default App;
