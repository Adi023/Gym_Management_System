import React from 'react'
import back from '../../src/components/images/logo.png'
import Footer from './Footer'


export default function ContactUs() {
  return (
<>  
<h1 className='text-center w-100'>Contact Us</h1>
   <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff', padding: '20px', margin: '30px'
      }}>
        <div className="card mb-3 w-100" style={{ flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <div className="row g-0">
                <div className="col-md-4 w-50">
                    <img src={back} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8  w-50">
                    <div className="card-body ">
                      <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</>
  )
}
