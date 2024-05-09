import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar' 
import Firstsec from '../../components/firstsec/Firstsec'
import Pic from '../../components/pictures/Pic'
import Slider from '../../components/slider/slider'
import Questions from '../../components/ques/questions'
import Footer from '../../components/footer/footer'
export default function Home() {
  return (
    <div>
       <Navbar />
       <br/>
       <br/>
       <Firstsec />
       <br/>
       <br/>
     
       <Pic/>
       <Slider/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

     <div className='questions'>
     <Questions/>
     </div>
    
     <br/><br/><br/><br/>
     <Footer/>
    </div>
  )
}
