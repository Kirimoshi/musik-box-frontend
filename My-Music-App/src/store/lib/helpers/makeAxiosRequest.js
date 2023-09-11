import axios from "axios";

const makeAxiosRequest = async (reqOptions) => {
  try {
    const response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    throw error.response.data.errors;
  }
};

export default makeAxiosRequest;
