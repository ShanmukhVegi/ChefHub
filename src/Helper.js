import axios from "axios";

const FAILURE = "FAILURE";

export async function callGetApi(baseUrl, api, data) {
  console.log(baseUrl + api);
  try {
    const result = await axios.get(baseUrl + api, { params: data });
    return result.data;
  } catch (err) {
    console.error(err.response.data);
    return FAILURE;
  }
}

export async function callPostApi(baseUrl, api, data) {
  console.log(baseUrl + api);
  try {
    const result = await axios.post(baseUrl + api, data);
    return result.data;
  } catch (err) {
    console.error(err.response.data);
    return FAILURE;
  }
}
