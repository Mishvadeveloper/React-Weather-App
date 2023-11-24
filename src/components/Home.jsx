import React, { useState } from 'react'
import {Box, styled} from '@mui/material'
import Sunset from '../assets/image/bg.jpg'
import Form from './Form'
import Information from './Information'

//Main box CSS
const Component= styled(Box)({
    height:'95vh',
    display:'flex',
    alignItems:'center',
    margin: '0 auto',
    width:'65%'
 })  

 // Image box CSS
 const Image= styled(Box)({
   backgroundImage: `url(${Sunset})`,
   width:'27%',
   height:'80%',
   backgroundSize:'cover',
   borderRadius:'20px 0 0 20px'
 })  

 // Information Box CSS
 const BoxInfo= styled(Box)({
    width: '73%',
    height:'80%'
 })


 const Home = () => {
  const [result, setResult]= useState({})   

  return (
    <Component>
        <Image></Image>
        <BoxInfo>
            <Form setResult={setResult}/>               {/* Pass as Props*/}
            <Information result={result}/>
        </BoxInfo>
    </Component>
  )
}

export default Home;