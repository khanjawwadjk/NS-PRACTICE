import axios from "axios";

const URL = "http://localhost:3001/prods";

export const getProducts = () =>{
    return axios.get(URL);
}

export const delProducts = (id) =>{
    axios.delete(URL, id);
}