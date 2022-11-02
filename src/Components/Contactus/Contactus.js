import React from 'react'
import "./Contactus.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Contactus = () => {
    return (
        <div className="contact3 py-5">
            <div className="row no-gutters">
                <div className="container">
                    <div className="mb-2 d-flex justify-content-evenly w-100 align-items-center">
                        <div className="card-main-box">
                            <div className="card-icon-box">
                                <PermPhoneMsgIcon className="card-main-icon" />
                            </div>
                            <p className="w-100 d-flex justify-content-center m-0 card-main-label"> Phone</p>
                            <a className="w-100 d-flex justify-content-center m-0 card-main-text">+918285999309</a>
                            <a className="w-100 d-flex justify-content-center m-0 card-main-text">+911234567890</a>
                            <div className="d-flex justify-content-center">
                                <p>Contact us</p>
                            </div>
                        </div>
                        <div className="card-main-box">
                            <div className="card-icon-box">
                                <AddLocationAltIcon className="card-main-icon" />
                            </div>
                            <p className="w-100 d-flex justify-content-center m-0 card-main-label"> Address</p>
                            <a className="w-100 d-flex justify-content-center m-0 card-main-text" style={{ textAlign: 'center' }}>House No 112 Pandit Mohalla Village Kondli Delhi-110096</a>
                            <div className="d-flex justify-content-center">
                                <a>Direction..</a>
                            </div>
                        </div>
                        <div className="card-main-box">
                            <div className="card-icon-box">
                                <AttachEmailIcon className="card-main-icon" />
                            </div>
                            <p className="w-100 d-flex justify-content-center m-0 card-main-label">Email</p>
                            <a className="w-100 d-flex justify-content-center m-0 card-main-text">Admin123@gmail.com</a>
                            <a className="w-100 d-flex justify-content-center m-0 card-main-text">Himanshu123@gmail.com</a>
                            <div className="d-flex justify-content-center">
                                <a>---------------</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-shadow">
                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-box ml-3">
                                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                                <form className="mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control p-2" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control p-2" type="email" placeholder="Email address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control p-2" type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <textarea className="form-control p-2" rows="8" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
