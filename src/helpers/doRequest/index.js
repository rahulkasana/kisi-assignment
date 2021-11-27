import axios from 'axios';
import qs from 'qs';

export const doRequest = async (requestData) => {
  const defaultHeader = {};
  const auth = JSON.parse(localStorage.getItem('auth'));
  const token = auth ? auth.token : null;

  const {
    headers = {Authorization: token ? `Token ${token}` : null},
    method = 'get',
    url = '',
    baseURL = process.env.REACT_APP_API_HOST,
    params = {},
    data = {},
    onUploadProgress,
  } = requestData;
  console.log('params ----1', params);
  //create request config according to data
  const requestConfig = {
    headers: Object.assign(defaultHeader, headers),
    method,
    url,
    baseURL,
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, {arrayFormat: 'comma'});
    },
    data,
    // xsrfCookieName,
    // xsrfHeaderName,
    onUploadProgress,
  };

  try {
    console.log('requestConfig ----', requestConfig);
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    if (error?.response?.status === 401) {
    }
    // const {response: {data = {}} = {}} = error || {};
    // return isEmpty(data) ? {data, message: error.message} : data;
  }
};
