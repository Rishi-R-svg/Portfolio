import axios from "axios";


const sendData = (data)=> {
    return axios.post(`${import.meta.env.BACKEND_URL}/api/v1/contact`,data)
}


export {sendData}