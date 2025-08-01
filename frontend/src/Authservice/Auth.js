import axios from "axios";


const sendData = (data)=> {
    return axios.post(`${import.meta.env.BACKEND_URL}`,data)
}


export {sendData}