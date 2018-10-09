import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title/Title';

// ファイルの実質上の中身
class App extends Component {
  state =  {version: '1.0'}
  onClickHandler = () => {
    let nextVersion = parseInt(this.state.version, 10) + 1
    this.setState({ version: nextVersion.toFixed(1)})
  }
 render() {
   // ①upgradeButton初期の要素
    let upgradeButton = (
      <p
        onClick={this.onClickHandler}
        id="upgradeButton"
        className="upgrade-button"
      >Upgrade</p>
    );

     // ②upgradeButton初期の要素
    if( this.state.version === '5.0'){
      upgradeButton = (
        
        //バージョンが5.0になった時に表示されて欲しいボタン
        <p
          className="upgraded-button"
        >Already up-to-date</p>
      );
    }
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <Title 
         titleStyle={{color: 'orange'}}
         >
         Hello World <span id="versionCounter" style={{borderBottom: '1px solid orange'}}>
         {this.state.version}
         </span>
         </Title>
         {upgradeButton}
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