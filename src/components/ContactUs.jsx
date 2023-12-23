import React from 'react'
import back from '../../src/components/images/meningym.jpg'
import Footer from './Footer'


export default function ContactUs() {
  return (
<>  
<h1 className='text-center w-100'>Contact Us</h1>
   <div className='container py-4' style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
      }}>
        <div className="card mb-3 w-100" style={{ flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <div className="row no-gutters">
                <div className="col-md-5 m-1">
                    <img src={back} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6" >
                    <div className="card-body " >
                      <h5 className="card-title" >GET IN TOUCH</h5>
                        <p className="card-text">WE ARE ALWAYS READY TO HEAR FROM YOU<br/>
                                OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. <br/>
                                WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS <br/>ON WEEKDAYS AND 48 HOURS ON WEEKENDS.</p>

                       <br/><br/>
                       <div  style={{display:'inline-block',position:'relative',marginRight:'15%'}}>
                       <p className="card-text"><i className="fas fa-home me-3"></i> Address : <br/> 
                                                          Dhantak Plaza, 203,<br/>
                                                          2nd Floor, Makwana Rd, <br/>
                                                          Gamdevi, Marol, Andheri East, <br/>
                                                          Mumbai, Maharashtra 400059<br/>
                                                          <br/>
                        <i className="fas fa-envelope me-3"></i>Email: info@gms.com</p>
                       </div>

                       <div style={{display:'inline-block',position:'relative'}}>
                       <p className="card-text"><i class="fa fa-info-circle me-3"></i>Additional Information :<br/>
                       We are open <br/>Monday - Saturday,<br/> 10AM - 5PM <br/>and closed on sunday sorry for that.<br/><br/>
                       <i className="fas fa-phone me-3"></i> Contact : +91 1234567890</p>
                       </div>

                    </div>
                    <br/><br/>
                    <h6 style={{display: 'flex', justifyContent: 'center',marginTop:'5%'}}>Join us on Social Media.</h6>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div><br/>
    
      

    <Footer/>
</>
  )
}
