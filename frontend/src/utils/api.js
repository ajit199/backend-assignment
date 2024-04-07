import axios from "axios";
import Cookies from "js-cookie";

const Base_Url = process.env.REACT_APP_API_URL;

async function getData(url) {
  const accessToken = Cookies.get("accessToken");
  const response = await axios.get(`${Base_Url}${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = response.data;
  return data;
}

async function postData(url, data) {
  const accessToken = Cookies.get("accessToken");
  const response = await axios.post(`${Base_Url}${url}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const resData = response.data;
  return resData;
}

async function patchData(url, data) {
  const accessToken = Cookies.get("accessToken");
  const response = await axios.patch(`${Base_Url}${url}`, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const resData = response.data;
  return resData?.data;
}

export { getData, postData, patchData };
