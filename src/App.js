import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './components/Weather';

const styles = require('./App.sass');

class App extends Component {
  render() {
    return (
        <div className={styles.App}>
          <header className={styles.AppHeader}>
            <img src={logo} className={styles.AppLogo} alt="logo"/>
            <h1 className={styles.AppTitle}>Welcome to React</h1>
          </header>
          <div className={styles.AppIntro}>
            <Weather cityId={524901}/>
            <Weather/>
          </div>
        </div>
    );
  }
}

export default App;
