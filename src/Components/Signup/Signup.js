import React from 'react'
import Images from "../../Images/Image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../Login/Login.css";
import { TextField, TextareaAutosize } from '@mui/material';

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
