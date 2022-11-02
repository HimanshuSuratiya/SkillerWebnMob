import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import Images from "../../Images/Image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Login.css"

const Login = () => {
    return (
        <>
            <section className="vh-80">
                <div className="container py-4 h-80 abc">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 animation">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>
                                <div className="form-outline mb-2">
                                    <label className="form-label mb-0" for="form1Example13">Email</label>
                                    <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label mb-0" for="form1Example23">Password</label>
                                    <input type="password" id="form1Example23" className="form-control form-control-lg" />
                                </div>
                                <div className="d-flex justify-content-around align-items-center mb-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label className="form-check-label" for="form1Example3"> Remember me </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block LoginBtn">Log in <ArrowRightAltIcon /></button>
                                </div>
                                <div className="divider d-flex align-items-center my-3 justify-content-center">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>
                                <div className="LoginPlatforms d-flex justify-content-between">
                                    <div className="d-flex justify-content-center LoginFields">
                                        <div className="media-options">
                                            <a href="#">
                                                <FacebookIcon />
                                                <span> Login with Facebook</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center LoginFields">
                                        <div className="media-options">
                                            <a href="#" className="googleImage">
                                                <img src={Images.google} />
                                                <span> Login with Google</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a className="d-flex justify-content-center text-decoration-underline mt-2">Don't have an account ?... </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;