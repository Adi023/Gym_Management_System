import React from 'react'

import background from '../components/images/back2.jpg'


export default function Home() {
  return (
    <>
     <div style={{backgroundImage:`url(${background})`, height: "100vh",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", }}>
      {/* <h1 style={{background:'white',border:'solid black' ,width:'750px',padding:'10px'}}>Welcome To Gym Management System</h1> */}

    </div>
    </>
   
  )
}