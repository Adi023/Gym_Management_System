import React from 'react'

import background from '../components/images/back5.jpg'
import background2 from '../components/images/back3.jpg'
import background3 from '../components/images/back4.jpg'
import './Home.css'
import Footer from './Footer'

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
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" >
              <div className="carousel-item active " >
                <img src={background} className="d-block w-100 " alt='not available' />
                <div class="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br />Management <br />System</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background2} className="d-block w-100"  alt='not available' />
                <div class="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br />Management <br />System</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background3} className="d-block w-100 " alt='not available' />
                <div class="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br />Management <br />System</h1>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
              <span aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
              <span aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff', padding: '20px', margin: '30px'
      }}>

        <div class="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} class="card-img-top" alt='Image Not Available' />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} class="card-img-top" alt='Image Not Available' />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} class="card-img-top" alt='Image Not Available' />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff', padding: '20px', margin: '30px'
      }}>
        <div class="card text-center w-100">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
      <Footer/>
    </>

  )
}