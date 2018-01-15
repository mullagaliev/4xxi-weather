import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Clock from 'react-live-clock';
import WeatherApi from '../../services/WeatherApi';
const styles = require('./WeatherCard.sass');
const weatherApi = new WeatherApi({ appid: process.env.REACT_APP_OPEN_WEATHER_SECRET });
const moment = require('moment');

class Weather extends Component {
  state = {
    done: false
  };

  componentWillMount() {
    const { cityId } = this.props;
    weatherApi.getCurrentByCityId(cityId)
        .then(data => {
          const newState = Object.assign({
            done: true
          }, data);
          this.setState(newState);
        })
        .catch(err => {
          console.log(err);
        });
  }

  render() {
    const { state } = this;
    if (!state.done) {
      return <div className={styles.WeatherContainer}>
        <div className={styles.WeatherContent}>
          <div className={styles.WeatherErrorMsg}>
            Not loaded
          </div>
          <div className={styles.WeatherCityImage}/>
        </div>
      </div>
    }
    return (<div className={styles.WeatherContainer}>
      <div className={styles.WeatherContent}>
        <div className={styles.WeatherTemperature}>
          {Math.floor(state.main.temp)}
        </div>
        <div className={styles.WeatherIcon}>
          <div className={classnames(styles.Icon, styles.Cloudy)}>
            <div className={styles.Cloud}/>
            <div className={styles.Cloud}/>
          </div>
        </div>
        <div className={styles.WeatherCity}>
          {state.name}
        </div>
        <div className={styles.WeatherDatetime}>
          {moment.unix(state.dt).format("MMM DD, dddd")}
        </div>
        <div className={styles.WeatherWind}>
          <span className={styles.WeatherWindSpeed}>
           {state.wind.speed} m/s
          </span>
          <span className={styles.WeatherWindDeg}>
            {state.wind.deg} °
          </span>
        </div>
        <div className={styles.WeatherCityImage}/>
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
