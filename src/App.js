import React from 'react';
import './App.css';
import Lists from './Component/Lists';
import ApiInfo from './Component/ApiInfo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Lists />
      <div className="blog-area">
        <ApiInfo />
      </div>
      </header>
    </div>
  );
}

export default App;
