import React from 'react'
import Images from "../../../Images/Image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField, TextareaAutosize } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import "../Animation.css";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles(() => ({
    SignupBtn: {
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

const Signup = () => {
    const classes = useStyles();
    return (
        <>
            <section className="vh-80">
                <Banner imgSource={Images.register} text="Signup or Register" />
                <div className="container py-4 h-80 abc">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 Signupanimation">
                            <img src={Images.SignUp} className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>
                                <div className="form-outline">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        size='large'
                                        label={'First Name'}
                                    />
                                </div>
                                <div className="form-outline mt-3">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        size='large'
                                        label={'Last Name'}
                                    />
                                </div>
                                <div className="form-outline mt-3">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        size='large'
                                        label={'Location'}
                                    />
                                </div>
                                <div className="form-outline mt-3">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        size='large'
                                        label={'Phone Number'}
                                    />
                                </div>
                                <div className="form-outline mt-3">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        size='large'
                                        label={'Country'}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <TextareaAutosize
                                        className='p-2'
                                        aria-label="minimum height"
                                        minRows={2}
                                        style={{ width: '100%' }}
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button type="submit" className={`btn btn-primary btn-lg btn-block ${classes.SignupBtn}`}>Sign up <ArrowRightAltIcon /></button>
                                </div>
                                <a className="d-flex justify-content-center text-decoration-underline mt-2">Already have an account ?... </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Signup
