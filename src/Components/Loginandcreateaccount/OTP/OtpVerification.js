import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import OtpInput from "react-otp-input";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Images from "../../../Images/Image";
import FormControl from '@mui/material/FormControl';
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from '@mui/material/FormLabel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../Animation.css";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles(() => ({
    otpButtons: {
        color: '#ffffff',
        marginLeft: '11px',
        background: '#188dc7',
        padding: '4px 20px',
        transition: '.5s',
        borderRadius: '20px',
        border: '2px solid #188dc7',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },
}));

const OtpVerification = () => {
    const [registerType, setRegisterType] = useState(false)
    const classes = useStyles();
    return (
        <>
            <section className="vh-80">
                <Banner imgSource={Images.otpVerify} text="One time verification" />
                <div className="container py-4 h-80 abc">
                    <div className="row d-flex align-items-center justify-content-center h-50">
                        <div className="col-md-8 col-lg-7 col-xl-6 Otpanimation">
                            <img src="https://www.kaleyra.com/wp-content/uploads/2020/07/2FA-graphic.png" className="img-fluid" alt="Phone image" style={{ height: '50%' }} />
                        </div>
                        {registerType != true ?
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <div>
                                    <a className="d-flex justify-content-center" style={{ fontSize: '22px', letterSpacing: "2px" }}>OTP Verification</a>
                                    <div className="form-outline mb-2">
                                        <span className="form-label mb-0 d-flex justify-content-center" for="form1Example13">Your Phone number is +91*******732</span>
                                    </div>
                                    <div className="form-outline mb-2 align-items-center justify-content-center">
                                        <div className='d-flex justify-content-center'>
                                            <label className="form-label mb-0 p-2" for="form1Example23">Enter OTP </label>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <Grid
                                                item
                                                xs={12}
                                                container
                                                justify="center"
                                                alignItems="center"
                                                direction="column"
                                            >
                                                <Grid item spacing={3} justify="center">
                                                    <OtpInput
                                                        separator={
                                                            <span>
                                                                <strong>.</strong>
                                                            </span>
                                                        }
                                                        inputStyle={{
                                                            width: "3rem",
                                                            height: "3rem",
                                                            margin: "0 1rem",
                                                            fontSize: "2rem",
                                                            borderRadius: 4,
                                                            border: "1px solid rgba(0,0,0,0.3)"
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center mb-2">
                                        <a>Resend OTP</a>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className={`btn btn-primary btn-lg btn-block ${classes.otpButtons}`}>Skip</button>
                                        <button className={`btn btn-primary btn-lg btn-block ${classes.otpButtons}`} onClick={() => { setRegisterType(true) }}>Verify</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <div className='d-flex justify-content-center mt-2'>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: '#188dc7' }}>Register Type</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Skill Seeker" />
                                            <FormControlLabel value="male" control={<Radio />} label="Skill Provider" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className={`btn btn-primary btn-lg btn-block ${classes.otpButtons}`}><ArrowRightAltIcon /> Continue</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default OtpVerification


