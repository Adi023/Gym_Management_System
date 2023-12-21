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
      {/* Sliding Main Images */}
      <div className="row text-center" >
        <div className='col-12'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" >
              <div className="carousel-item active " >
                <img src={background} className="d-block w-100 img-fluid" style={{height:'500px'}} alt='not available' />
                <div className="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br />Management <br />System</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background2} className="d-block w-100 img-fluid" style={{height:'500px'}} alt='not available' />
                <div className="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br />Management <br />System</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background3} className="d-block w-100 img-fluid" style={{height:'500px'}} alt='not available' />
                <div className="card-img-overlay">
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

      {/* Triple Cards */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff', padding: '20px', margin: '30px'
      }}>

        <div className="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px', marginBottom: '20px' }}>
          <img src={background3} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
      </div>
      {/* single info card with image */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff', padding: '20px', margin: '30px'
      }}>
      <div className="card mb-3 w-100" style={{ flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <div className="row g-0">
          <div className="col-md-4 w-50">
            <img src={background} className="img-fluid rounded-start" alt="..." />
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
      {/* Single Button Card */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff', padding: '20px', margin: '30px'
      }}>
        <div className="card text-center w-100">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>

      {/* Footer area */}
      <Footer />
    </>

  )
}