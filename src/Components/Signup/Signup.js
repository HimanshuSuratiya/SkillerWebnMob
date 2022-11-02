import React from 'react'
import Images from "../../Images/Image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../Login/Login.css";

const Signup = () => {
    return (
        <section className="vh-80">
            <div className="container py-4 h-80 abc">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6 animation">
                        <img src={Images.SignUp} className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>
                            <div className="form-outline mb-2">
                                <label className="form-label mb-0" for="form1Example13">First Name</label>
                                <input type="email" id="form1Example13" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label mb-0" for="form1Example13">Last Name</label>
                                <input type="email" id="form1Example13" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label mb-0" for="form1Example23">Location</label>
                                <input type="password" id="form1Example23" className="form-control form-control-lg" />
                                <div className="form-outline mb-2">
                                    <label className="form-label mb-0" for="form1Example13">Phone number</label>
                                    <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                </div>
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label mb-0" for="form1Example23">County </label>
                                <input type="password" id="form1Example23" className="form-control form-control-lg" />
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mt-2">
                                    <label className="form-label mb-0" for="form1Example23">Address </label>
                                    <textarea className="form-control p-2" rows="4" placeholder="Enter your address"></textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-2">
                                <button type="submit" className="btn btn-primary btn-lg btn-block LoginBtn">Sign up <ArrowRightAltIcon /></button>
                            </div>
                            <a className="d-flex justify-content-center text-decoration-underline mt-2">Already have an account ?... </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
