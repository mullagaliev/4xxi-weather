import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Clock from 'react-live-clock';

const styles = require('./Weather.sass');

class Weather extends Component {
  componentWillMount(){
    console.log('ready');
  }
  render() {
    return (<div className={styles.Weather} weather-index="1">
      <div className={styles.WeatherLeftCol}>
        <div className={styles.WeatherTemperature}>-7</div>
        <div className={styles.WeatherCity}>Сургут</div>
      </div>
      <div className={styles.WeatherRightCol}>
        <div className={styles.WeatherIcon}>
          <div className={classnames(styles.Icon, styles.Cloudy)}>
            <div className={styles.Cloud}/>
            <div className={styles.Cloud}/>
          </div>
        </div>
        <div className={styles.WeatherAttr}>
          <div className={styles.WeatherTime}>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </div>
        </div>
      </div>
    </div>);
  }
}

Weather.propTypes = {
  cityId: PropTypes.number
};
Weather.defaultProps = {
  cityId: 0
};

export default Weather;
