import axios from 'axios';

// Api from openweathermap.org website
const API_KEY='3f685397cfa04546bbb577d740839f71';
const API_URL= 'https://api.openweathermap.org/data/2.5/weather';


// Get API
export const getWeather =async (city, country)=>{

    try{
       let response= await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
       return response.data;
    }
    catch(error){
        console.log('Error while calling API', error.message )
        return error.response;    
    }

}
