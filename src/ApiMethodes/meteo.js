import axios from "axios"
export const temperature  = async (ville)=>{
    const response =  await axios.post("http://localhost:8081/meteo?ville="+ville+"");
     return response.data.current.temp_c; 
     
 };