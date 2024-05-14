import React, { useState, useEffect } from 'react';

export default function DigitalClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">


      <div className="row justify-content-center " >
        <div className="col" >
          <div className="card bg-dark text-white">


            <div className="card-body text-center d-flex flex-wrap justify-content-center align-items-center" >
{/* 
              <div className="clock-item">
                <p className="clock-label mx-2">Date</p>
                <h4 className="clock-day clock-timer">{dateTime.toLocaleDateString("es-CL")}</h4>
              </div> */}


              <div className="clock-item">
                <h4 className="clock-hours clock-timer">{dateTime.getHours()}</h4>
                <p className="clock-label mr-4 mx-4">Hours</p>
              </div>
              <p className="clock-timer mx-2">:</p>
              <div className="clock-item">
                <h4 className="clock-minutes clock-timer">{dateTime.getMinutes()}</h4>
                <p className="clock-label mx-2">Minute</p>
              </div>
              <p className="clock-timer mx-2">:</p>
              <div className="clock-item">
                <h4 className="clock-seconds clock-timer">{dateTime.getSeconds()}</h4>
                <p className="clock-label mx-2">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}