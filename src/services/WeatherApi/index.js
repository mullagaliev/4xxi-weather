import { camelizeKeys } from 'humps';
const request = require('superagent');

const defaultSettings = {
  appid: null,
  protocol: 'http',
  version: '2.5',
  format: 'json'
};

class WeatherApi {
  constructor(customSettings = {}) {
    const settings = Object.assign(defaultSettings, customSettings);
    const { appid } = settings;
    const { protocol = 'http', version = '2.5', format = 'json' } = settings;
    const SITE = 'api.openweathermap.org/data';

    this.appid = appid;
    this.rootUrl = `${protocol}://${SITE}/${version}`;
    this.format = format;
    return this;
  }

  _formatParams(params) {
    return Object.assign(params, {
      appid: this.appid,
      format: this.format
    });
  }

  _callApi(endPoint, params = {}) {
    const data = this._formatParams(params);
    const { rootUrl } = this;
    const fullUrl = (endPoint.indexOf(rootUrl) === -1) ?
        rootUrl + endPoint : endPoint;

    return request
        .get(fullUrl)
        .query(data)
        .set('accept', 'json')
        .then(response => {
          if (!response.ok) {
            throw { code: response.statusCode, err: 'Status error' };
          }
          if (response.body.cod === 200) {
            return camelizeKeys(response.body.result);
          }
          else {
            throw { code: response.body.cod, err: response.body };
          }
        })
        .catch(err => {
          throw { code: 400, err: 'Bad Request' };
        });
  }

  getCurrentByCityId(cityID = 0) {
    return this._callApi('/weather', { id: cityID });
  }
}

export default WeatherApi;
