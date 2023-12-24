import React from 'react'
import Footer from './Footer'
import conta from '../../src/components/images/about.jpg'

export default function AboutUs() {
    return (
        <div>
            <div className='card' style={{ border: 'black' }}>
                <img src={conta} className="d-block w-100 " style={{ height: '450px' }} alt='not available' />
                <div className='card-img-overlay' style={{ marginTop: '250px' }}>
                    <h1 className="text-center" style={{ color: "white" }}>About<span style={{ color: '#00ca4e' }}> GMS</span></h1><br /><br /><br />
                </div>

            </div>
            <br /><br /><br />
            <div className='container py-4 ' style={{
                display: 'flex', flexWrap: 'wrap',
                background: '#ffffff',
                boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
            }}>
                {/* <h1 className="text-center"style={{  textAlign: 'center', width: '100%' }}>About<span style={{ color: '#00ca4e' }}> GMS</span></h1><br /><br /><br /> */}

                <p>GMS provides a 24/7 Fitness facility to residents of Martinsville and Henry County, as well as surrounding areas to help people reach and maintain their goals. We combine different types of fitness equipment to meet different fitness needs and levels.
                    <br /><br />
                    At GMS you’ll find all the latest strength and cardio equipment along with an energetic group exercise program that includes POUND, Zumba, Kickboxing, Bootcamp, Muscle Building and many other cardio CLASSES. You’ll find a supportive environment with all kinds of people who are working just as hard as you to meet their goals.
                    <br /><br />
                    Our Staff, Trainers & Group Exercise Instructors are committed to offering our members a great fitness experience. Whether you’re a mom looking to get back into shape, a marathon runner trying to shave a few minutes off your personal best or just trying to stay healthy we would love to help you realize your potential and meet your goals!
                </p>
            </div>

            <br /><br />
            <Footer />
        </div>
    )
}
