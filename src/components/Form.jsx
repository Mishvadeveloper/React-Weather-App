import styled from '@emotion/styled'
import {Box, InputBase, Button} from '@mui/material'
import { useState } from 'react'
import { getWeather } from '../api'

// Information Box ==> Search Box CSS
const Container = styled(Box)({
    background: '#445A6F',
    padding: '10px',
})

// Information Box ==> Info CSS
const Input = styled(InputBase)({
    color:'#FFF',
    marginRight:'20px',
    fontSize: '18px'
})

//Information Box ==> info ==> Button CSS
const GetButton= styled(Button)({
    background:"#e67e22",
})


const Form = ({setResult}) => {  
    
  const [data, setData] = useState({ city:'', country:''})
  
  // To get city and Country name
  const handleChange= (e)=> {
    setData({...data,[e.target.name]: e.target.value })
  }  

  // get weather information ==> city and country 
  const getWeatherInfo=async ()=>{
    let response = await getWeather(data.city, data.country)
    setResult(response)
  }

  return (
    <Container>
        <Input placeholder='City' name='city' onChange={(e)=> handleChange(e)}/>
        <Input placeholder='Country' name='country' onChange={(e)=> handleChange(e)} />
        <GetButton variant='contained' onClick={()=> getWeatherInfo()}>Get Weather</GetButton>
    </Container>
  )
}

export default Form;