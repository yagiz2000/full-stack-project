import Axios from "axios";
const makeRequest = async (payload) => {
  const config = {
    method: payload.type,
    url: payload.url,
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token")===null ? null:localStorage.getItem("token"),
    },
    data: JSON.stringify({ ...payload.data }),
  };
  try {
    let response = await Axios(config);
    return response;
  } catch (error) {
    throw new Error("Hata oluştu");
  }
};
export { makeRequest };
