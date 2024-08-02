import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices'
import { useSelector } from 'react-redux';
import back from '../images/about.jpg'
import profile from '../images/profile.jpg'
import './ProfileStyle.css'

export default function ProfilePage() {
    const reduxUserId = useSelector(state => state.userId);
    const getService = () => {
        // var userId = 1
        // var id = localStorage.getItem('userId');

        UserServices.getUserById(reduxUserId).then(
            (Response) => {
                // console.log(Response.data)
                setData(Response.data)
            },
            (Error) => {
                console.log(Error);
            }
        );
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        getService();
    });

    return (
        <div className="padding">
            <div className="col-md-10">
                {/* <!-- Column --> */}
                <div className="card">
                    <img className="card-img-top" src={back} alt="Card image cap" />

                    <div className="card-body little-profile text-center">
                        <div className="pro-img">
                            <img src={profile} alt="user" />
                        </div>
                        <form>
                            <h3 className="m-b-0">{data.name ? data.name : 'N/A'}</h3>
                            <p>{data.active ? "Active" : 'N/A'} </p>
                            <div className="row text-center m-t-20">

                                <div className="col-lg-4 col-md-4 m-t-20">
                                    <h3 className="m-b-0 font-light">
                                        <div class="group">
                                            <input type="text" value={data.gender ? data.gender : 'N/A'} required />
                                            <label>Gender :</label>
                                        </div>
                                        <div class="group">
                                            <input type="text" value={data.bloodGroup ? data.bloodGroup : 'N/A'} required />
                                            <label>Blood Group :</label>
                                        </div>
                                        <div class="group">
                                            <input type="text" value={data.dob ? data.dob : 'N/A'} required />
                                            <label>DOB :</label>
                                        </div>
                                    </h3>
                                </div>
                                <div className="col-lg-4 col-md-4 m-t-20">
                                    <h3 className="m-b-0 font-light">
                                        <div class="group">
                                            <input type="text" value={data.email ? data.email : 'N/A'} required />
                                            <label>Email :</label>
                                        </div>
                                        <div class="group">
                                            <input type="text" value={data.mobile ? data.mobile : 'N/A'} required />
                                            <label>Mobile :</label>
                                        </div>
                                        <div class="group">
                                            <input type="text" value={data.address ? data.address : 'N/A'} required />
                                            <label>Address :</label>
                                        </div>
                                    </h3>
                                </div>
                                 <div className="col-lg-4 col-md-4 m-t-20">
                                    <h3 className="m-b-0 font-light">
                                        <div class="group">
                                            <input type="text" value={data.cityId?.cityName ? data.cityId?.cityName : 'N/A'} required />
                                            <label>City :</label>
                                        </div>
                                        <div class="group">
                                            <input type="text" value={data.cityId?.stateId?.stateName ? data.cityId?.stateId?.stateName : 'N/A'} required />
                                            <label>State :</label>
                                        </div>
                                        <div class="group">
                                            <input type="text" value={data.dateOfJoining ? data.dateOfJoining : 'N/A'} required />
                                            <label>Date of Joining :</label>
                                        </div>
                                       
                                    </h3>
                                </div>
                               

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    )
}