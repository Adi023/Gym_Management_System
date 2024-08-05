import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices'
import { useSelector } from 'react-redux';
import back from '../images/about.jpg'
import profile from '../images/profile.jpg'

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
    }, []);

    return (
        <>
            <style>
                {
                    `

                .padding {
                    padding: 3rem !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0; 
                }
                @media(max-width:840px){
                    .padding{
                        margin-left:25px;
                    }
                }

                .card-img-top{
                    height:200px;
                }

                .card-no-border .card {     
                    border-color: #d7dfe3;
                    border-radius: 4px;
                    margin-bottom: 30px;
                    -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
                    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05)
                }

                .card-body {
                    -ms-flex: 1 1 auto;
                    flex: 1 1 auto;
                    padding: 1.25rem;
                }

                .update-button {
                    margin-left : 85%;
                    margin-top: 10px;
                }
                .pro-img {
                    margin-top: -90px;
                    margin-bottom: 20px;
                }

                .little-profile .pro-img img {
                    width: 128px;
                    height: 128px;
                    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                    border-radius: 100%;
                }

                h3 {
                    line-height: 30px;
                    font-size: 21px;
                    color: #455a64;
                    font-family: "Poppins", sans-serif;
                    font-weight: 400;
                }

                .m-t-20 {
                    margin-top: 20px;
                }

                .text-center {
                    text-align: center !important;
                }

                p {
                    margin-top: 0;
                    margin-bottom: 1rem;
                }

                .group 	{ 
                    position:relative; 
                    margin-bottom:45px; 
                }

                input 	{
                    font-size:18px;
                    padding:10px 10px 0px 20px;
                    display:block;
                    width:250px;
                    border:none;
                }

                input:hover {
                    border-width: 0 0 1px;
                }

                label {
                    top:-25px;
                    font-size:14px;
                    color:#5264AE;
                    font-weight:normal;
                    position:absolute;
                    pointer-events:none;
                    left:5px;
                }

                `
                }
            </style>
            <div className="padding">
                <div className="col-md-10">
                    {/* <!-- Column --> */}
                    <div className="card">
                        <img className="card-img-top" src={back} alt="Card image cap" />

                        <div className="card-body little-profile text-center">
                            <div className="pro-img">
                                <img src={profile} alt="user" />
                              
                            </div>  
                            <a href={'updateUser/'+data.userId}><i class="bi bi-pencil-square update-button">Update Profile</i></a>
                            
                            {/* <div className='update-button'>
                                <i class="bi bi-pencil-square update-button"></i>
                            </div> */}
                            <form>
                                <h3 className="m-b-0">{data.name ? data.name : 'N/A'}</h3>
                                <p>
                                    {data.active !== undefined ? (
                                        data.active ? (
                                            <> Active 
                                                <span style={{ display: 'inline-block', width: '10px', height: '10px',
                                                 borderRadius: '50%', backgroundColor: 'green', marginRight: '5px',
                                                 marginLeft:'5px' }}></span>
                                            </>
                                        ) : (
                                            <>Inactive 
                                                <span style={{ display: 'inline-block', width: '10px', height: '10px',
                                                 borderRadius: '50%', backgroundColor: 'red', marginRight: '5px',
                                                 marginLeft:'5px' }}></span>
                                            </>
                                        )
                                    ) : (
                                        'N/A'
                                    )}
                                </p>
                                <div className="row text-center m-t-20">

                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="m-b-0 font-light">
                                        <div className="group">
                                                <input type="text" value={data.email ? data.email : 'N/A'} readOnly />
                                                <label>Email :</label>
                                            </div>

                                            <div className="group">
                                                <input type="text" value={data.bloodGroup ? data.bloodGroup : 'N/A'} readOnly />
                                                <label>Blood Group :</label>
                                            </div>
                                            <div className="group">
                                                <input type="text" value={data.address ? data.address : 'N/A'} readOnly />
                                                <label>Address :</label>
                                            </div>

                                        </h3>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="m-b-0 font-light">
                                           
                                            <div className="group">
                                                <input type="text" value={data.mobile ? data.mobile : 'N/A'} readOnly />
                                                <label>Mobile :</label>
                                            </div>
                                            <div className="group">
                                                <input type="text" value={data.dob ? data.dob : 'N/A'} readOnly />
                                                <label>DOB :</label>
                                            </div>
                                            <div className="group">
                                                <input type="text" value={data.cityId?.cityName ? data.cityId?.cityName : 'N/A'} readOnly />
                                                <label>City :</label>
                                            </div>
                                        </h3>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="m-b-0 font-light">
                                        <div className="group">
                                                <input type="text" value={data.gender ? data.gender : 'N/A'} readOnly />
                                                <label>Gender :</label>
                                            </div>

                                            <div className="group">
                                                <input type="text" value={data.dateOfJoining ? data.dateOfJoining : 'N/A'} readOnly />
                                                <label>Date of Joining :</label>
                                            </div>
                                            <div className="group">
                                                <input type="text" value={data.cityId?.stateId?.stateName ? data.cityId?.stateId?.stateName : 'N/A'} readOnly />
                                                <label>State :</label>
                                            </div>
                                        </h3>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}