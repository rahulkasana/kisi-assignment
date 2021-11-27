import axios from "axios";
import qs from "qs";
import { message } from "antd";

export const doRequest = async (requestData) => {
  const defaultHeader = {};
  const secret = JSON.parse(localStorage.getItem("secret"));

  const {
    headers = { Authorization: secret ? `KISI-LOGIN ${secret}` : null },
    method = "get",
    url = "",
    baseURL = process.env.REACT_APP_API_HOST,
    params = {},
    data = {},
  } = requestData;
  console.log("params ----1", params);
  //create request config according to data
  const requestConfig = {
    headers: Object.assign(defaultHeader, headers),
    method,
    url,
    baseURL,
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "comma" });
    },
    data,
  };

  try {
    console.log("requestConfig ----", requestConfig);
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    if (error?.response?.status === 401) {
      message.error(`Token expired login again`, 8);
    }
    const { response: { data = {} } = {} } = error || {};
    return data;
  }
};
