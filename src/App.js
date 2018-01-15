import React, { Component } from 'react';
import logo from './logo.svg';
import WeatherCard from './components/WeatherCard';

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
            <div className="WeatherCardList">
              <WeatherCard cityId={524901}/>
              <WeatherCard cityId={498817}/>
              <WeatherCard cityId={1488754}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
