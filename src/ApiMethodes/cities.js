import axios from "axios"

export const CitiesList = async ()=>{
   const response =  await axios.get('http://localhost:8081/cities', {});
    return response.data; 
    
};