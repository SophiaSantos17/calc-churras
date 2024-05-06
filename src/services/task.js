import axios from 'axios';

const BASE_URL = "http://172.16.1.167:3000"

export async function insertParticipantes(data){
    try{
        const response = await axios.post(`${BASE_URL}/participantes`, data);
        console.log("aigciagdig",response);
        return response;
    }catch(error){
        console.log(error);
    }
}