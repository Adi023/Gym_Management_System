import React from 'react'

import background from '../components/images/back5.jpg'
import background2 from '../components/images/back3.jpg'
import background3 from '../components/images/back4.jpg'

import card1 from '../components/images/trainer.jpg'
import card2 from '../components/images/equipments.jpg'
import card3 from '../components/images/activities.jpg'
import scard from '../components/images/lediingym.jpg'
import scard2 from '../components/images/meningym.jpg'
import yoga from '../components/images/yoga.jpg'





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
                <img src={background} className="d-block w-100 img-fluid" style={{ height: '550px' }} alt='not available' />
                <div className="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br/>Management <br/>System</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background2} className="d-block w-100 img-fluid" style={{ height: '550px' }} alt='not available' />
                <div className="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br/>Management <br/>System</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={background3} className="d-block w-100 img-fluid" style={{ height: '550px' }} alt='not available' />
                <div className="card-img-overlay">
                  <div id="left" >
                    <h1>Gym <br/>Management <br/>System</h1>
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
      <div className='container py-4' style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
      }}>

        <div className="card" style={{ width: '360px', marginBottom: '20px' }}>
          <img src={card1} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">"Forge your strength with the finest trainers in town.
              Unleash your best self at our gym, where excellence meets expertise."</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        <div className="card" style={{ width: '360px', marginBottom: '20px' }}>
          <img src={card2} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">"Elevate your workout with precision-crafted gym equipment.
              Unleash your full potential with gear designed for performance and results."</p>

            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        <div className="card" style={{ width: '360px', marginBottom: '20px' }}>
          <img src={yoga} className="card-img-top" alt=' Not Available'/>
          <div className="card-body">
            <p className="card-text">"Beyond the weights, discover balance and serenity.
              Elevate your fitness journey with a blend of strength and tranquility through our diverse range of activities,
              including invigorating yoga sessions."</p>

            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>
        {/* <div className="card" style={{ width: '400px', marginBottom: '20px' }}>
          <img src={background3} className="card-img-top" alt=' Not Available' />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div> */}
      </div><br />
      {/* single info card with image */}
      <div className='container py-4' style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
      }}>
        <div className="card mb-3 w-100" style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div className="row no-gutters">
            <div className="col-md-3 ">
              <img src={scard} className="card-img img-fluid rounded-start" alt="..." />
            </div>

            <div className="col-md-7 ">
              <div className="card-body ">
                <h5 className="card-title">About Gym</h5>
                <p className="card-text" style={{ letterSpacing: '2px' }} >
                  "Welcome to [Your Gym Name], where fitness transcends boundaries. Our elite team of certified trainers will guide you through personalized workouts using cutting-edge equipment, ensuring a transformative experience tailored to your goals. Beyond the weights, discover a harmonious balance with rejuvenating yoga sessions and diverse activities that nurture your mind, body, and spirit. Join a thriving community that celebrates every achievement, fostering an environment of support and camaraderie.
                  <br /> <br />At [Your Gym Name], we believe in personalized journeys, offering tailored fitness programs that guarantee success. Break barriers, redefine your limits, and embark on a journey to a stronger, healthier, and happier you. This is not just a gym; it's a sanctuary for your well-being, where every drop of sweat brings you closer to triumph."
                </p>
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>
      </div><br />

      <div className="container py-4" style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
      }}>
        <h1 className="h1 text-center" id="pageHeaderTitle">My Horizontal Card</h1>
        <div className="card bg-light text-black">
          <div className="row no-gutters">
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Podcast Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero.</p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={scard2} className="card-img img-fluid" alt=" Title" />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <br />
      <div className="container py-4" style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
      }}>
        <h1 className="h1 text-center" id="pageHeaderTitle">Upcoming Activities </h1>

        <div className="card bg-light text-black">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={card3} className="card-img img-fluid" alt=" Title" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Activity Title</h5>
                <p className="card-text">"Get ready to elevate your fitness journey! Join us for an exciting upcoming activity that promises to add a fun and dynamic twist to your workout routine. Stay tuned for an energizing experience designed to boost your motivation and keep you on track toward your fitness goals. Don't miss out it's time to level up together!"</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><i className="fas fa-calendar-alt mr-2"></i>Mon, JANUARY 1st 2024</li>
                  <li className="list-group-item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                </ul>
                <a href="/" className="btn btn-light mt-3">Enroll</a>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Single Button Card */}
      <br /> <div className='container py-4' style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
        background: '#ffffff',
        boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
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
          {/* <div className="card-footer text-muted">
            2 days ago
          </div> */}
        </div>
      </div><br />

      {/* Footer area */}
      <Footer />
    </>

  )
}