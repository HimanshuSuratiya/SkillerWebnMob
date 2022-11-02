import React from 'react'
import "../Login/Login.css"
import "./Otp.css";

const OtpVerification = () => {
    return (
        <section className="vh-80">
            <div className="container py-4 h-80 abc">
                <div className="row d-flex align-items-center justify-content-center h-50">
                    <div className="col-md-8 col-lg-7 col-xl-6 Otpanimation">
                        <img src="https://www.kaleyra.com/wp-content/uploads/2020/07/2FA-graphic.png" className="img-fluid" alt="Phone image" style={{ height: '50%' }} />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>
                            <a className="d-flex justify-content-center" style={{ fontSize: '22px', letterSpacing: "2px" }}>OTP Verification</a>
                            <div className="form-outline mb-2">
                                <span className="form-label mb-0 d-flex justify-content-center" for="form1Example13">Your Phone number is +91*******732</span>
                            </div>
                            <div className="form-outline mb-2 align-items-center justify-content-center">
                                <div className='d-flex justify-content-center'>
                                    <label className="form-label mb-0 p-2" for="form1Example23">Enter OTP </label>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <input style={{ width: '50%' }} type="password" id="form1Example23" className="form-control form-control-lg" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-around align-items-center mb-2">
                                <a href="#!">Resend OTP</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn-lg btn-block LoginBtn">Skip</button>
                                <button type="submit" className="btn btn-primary btn-lg btn-block LoginBtn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OtpVerification
