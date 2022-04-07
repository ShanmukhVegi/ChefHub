import axios from "axios";

export async function callGetApi(baseUrl, api) {
  try {
    const response = await axios.get(baseUrl + api);
  } catch (e) {
    console.log("Promise Rejected");
  }
}

export async function callPostApi(baseUrl, api, data) {
  console.log(baseUrl + api);
  try {
    let result = await axios.post(baseUrl + api, data);
    return result.data;
  } catch (err) {
    console.error(err.response.data);
  }
}
