import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Table from './app/components/Table';
import UndoRedo from './app/components/UndoRedo';
import Save from './app/components/Save';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Table />
        <UndoRedo />
        <Save />
      </DndProvider>
    </div>
  );
}

export default App;
