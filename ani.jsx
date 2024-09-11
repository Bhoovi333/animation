import React from 'react'
import imgi from "../src/img.jpeg"                                  //import image firstly paste in src then import where required.
import imgi2 from "../src/img2.jpeg"
import imgi3 from "../src/bho.jpeg"
import './home.css'
const Home = () => {
  return (
    <div>
    <h1>hi,i m bhoovi a react developer!</h1>
    <h3>Welcomes you all to my site</h3>
    <img src={imgi3} className='ingi3' id='ingi2'></img>
<img src={imgi} className='ingi' id='ingi'></img>
<img src={imgi2} className='ingi2' id='ingi2'></img>

    </div>
  )
}

export default Home
