import axios from "axios";

const URL = "http://127.0.0.1:4001/prodDetails";

export const getAPI = () =>{
    return axios.get(URL);
}

export const postAPI = (postData) =>{
    return axios.post(URL, postData);
}

export const deleteProducts = (id) =>{
    return axios.delete(`${URL}/${id}`);
}
