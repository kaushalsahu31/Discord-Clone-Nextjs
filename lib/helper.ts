
import Axios from "./axios";

export const apiData = async (method: string, url: string, condition: any) => {
  try {
    if (method === "get") {
      const Data = await Axios.post(url, condition);
      return Data.data.data;
    } else if (method === "post") {
      const Data = await Axios.post(url, condition);
      return Data.data.data;
    } else if (method === "patch") {
      const Data = await Axios.patch(url, condition);
      return Data.data.data;
    } else if (method === "delete") {
      const Data = await Axios.delete(url);
      return Data.data.data;
    } else {
      throw new Error("Unsupported HTTP method");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const apiImage = async (image: any) => {
    const payload = new FormData()
    payload.append("image", image);
    const Data = await Axios.post('/upload',payload)
    return Data.data.data
  
}
export const apiKillbot = async (data: any) => {
  try {
    
      const Data = await Axios.post("/killbot", data);
      return Data.data.data;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
