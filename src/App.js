import React from 'react';
import Routes from './routes';
const axios = require('axios').default;


axios.defaults.withCredentials = true;
export default () => (<Routes />);
