import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Tiltle';

// ファイルの実質上の中身
class App extends Component {
 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <Title />
       </header>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
     </div>
   );
 }
}

// エクスポート
export default App;