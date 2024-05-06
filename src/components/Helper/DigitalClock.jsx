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

              <div className="clock-item">
                <p className="clock-label mx-2">Date</p>
                <p className="clock-day clock-timer">{dateTime.toLocaleDateString("es-CL")}</p>
              </div>
              <div className="clock-item">
                <p className="clock-hours clock-timer">{dateTime.getHours()}</p>
                <p className="clock-label mr-4 mx-4">Hours</p>
              </div>
              <div className="clock-item">
                <p className="clock-minutes clock-timer">{dateTime.getMinutes()}</p>
                <p className="clock-label mx-2">Minutes</p>
              </div>
              <div className="clock-item">
                <p className="clock-seconds clock-timer">{dateTime.getSeconds()}</p>
                <p className="clock-label mx-2">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}