import React from 'react';
import './App.css';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;
