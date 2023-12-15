import React from 'react'

import background from '../components/images/back2.jpg'
import background2 from '../components/images/back.jpg'
import background3 from '../components/images/background.jpg'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* <div style={{
        backgroundImage: `url(${background})`, height: "100vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      </div> */}
     
        <div className="row text-center" >
          <div className='col-12'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" >
                <div class="carousel-item active">
                  <img src={background} class="d-block w-100"  alt='not available' />
                </div>
                <div class="carousel-item">
                  <img src={background2} class="d-block w-100"  alt='not available' />
                </div>
                <div class="carousel-item">
                  <img src={background3} class="d-block w-100"  alt='not available' />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
     
    </>

  )
}