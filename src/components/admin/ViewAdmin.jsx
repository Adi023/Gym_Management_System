import React, { useEffect, useState } from 'react'

import AdminServices from '../../services/AdminServices';
import Admin from '../Admin';

export default function ViewAdmin() {
  const [data, setData] = useState([]);

  const viewMembers = () => {
   AdminServices.viewAdmin().then(
      (Response) => {
        console.log(Response.data);
        setData(Response.data);
      }, (Error) => {
        console.log(Error);
      }

    )
  }
  useEffect(() => {
    viewMembers()
  }, []);

  return (
    <><Admin/>
    <div>
    <h1>View Admin</h1>

    <div>

      {data.map((d) =>
      (
        <div id='home' key={d.admin_id}>


          <div class="tools">
            <div class="circle">
              <span class="red box"></span>
            </div>
            <div class="circle">
              <span class="yellow box"></span>
            </div>
            <div class="circle">
              <span class="green box"></span>
            </div>
            <div >
              <span>ID : {d.admin_id}</span>
            </div>
          </div>

          <h4>Name :  {d.admin_name}</h4>
        </div>
      ))}
    </div>

  </div>
  </>
  )
}
