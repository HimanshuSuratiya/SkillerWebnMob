import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
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
                                <label className="form-label mb-0" for="form1Example13">Email / Phone number</label>
                                <input type="email" id="form1Example13" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label mb-0" for="form1Example23">Create Password</label>
                                <input type="password" id="form1Example23" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label mb-0" for="form1Example23">Confirm Password</label>
                                <input type="password" id="form1Example23" className="form-control form-control-lg" />
                            </div>
                            <a className="d-flex justify-content-center text-decoration-underline">Already have an account ?... </a>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn-lg btn-block LoginBtn">Sign up <ArrowRightAltIcon /></button>
                            </div>
                            <div className="divider d-flex align-items-center my-3 justify-content-center">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>
                            <div className="LoginPlatforms d-flex justify-content-between">
                                <div className="d-flex justify-content-center LoginFields">
                                    <div className="media-options">
                                        <a href="#">
                                            <FacebookIcon />
                                            <span> Singup with Facebook</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center LoginFields">
                                    <div className="media-options">
                                        <a href="#">
                                            <AppleIcon />
                                            <span> Singup with Apple</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="LoginPlatforms d-flex justify-content-between mt-2">
                                <div className="d-flex justify-content-center LoginFields">
                                    <div className="media-options">
                                        <a href="#" className="googleImage">
                                            <img src={Images.google} />
                                            <span> Singup with Google</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
