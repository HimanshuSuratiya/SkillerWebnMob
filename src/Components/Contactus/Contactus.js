import React from 'react'
import "./Contactus.css"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Menu from "../Menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Banner from '../Banner/Banner';
import Images from "../../Images/Image";
import Footer from "../Footer/Footer";
import { TextField, TextareaAutosize } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const useStyles = makeStyles(() => ({
    LoginBtn: {
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

    imgMainDiv: {
        height: '100%',
        width: '100%',
        "& img": {
            borderRadius: '10px',
        },
    },

}));

const Contactus = () => {
    const classes = useStyles();
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner imgSource={Images.contactus} text="Contact us" />
                <div className="contact py-5">
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
                                        <div className="d-flex justify-content-center mt-2 align-items-center">
                                            <button className={`btn btn-primary btn-lg btn-block ${classes.LoginBtn}`}> <CallIcon /> Call </button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center mb-2' style={{ height: '20px', width: '100%' }}>
                                        <ArrowRightAltIcon style={{ fontSize: '35px', cursor: 'pointer' }} />
                                    </div>
                                </div>
                                <div className="card-main-box">
                                    <div className="card-icon-box">
                                        <AddLocationAltIcon className="card-main-icon" />
                                    </div>
                                    <p className="w-100 d-flex justify-content-center m-0 card-main-label"> Address</p>
                                    <a className="w-100 d-flex justify-content-center m-0 card-main-text" style={{ textAlign: 'center' }}>House No 112 Pandit Mohalla Village Kondli Delhi-110096</a>
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex justify-content-center mt-2 align-items-center">
                                            <button className={`btn btn-primary btn-lg btn-block ${classes.LoginBtn}`}> <MapsHomeWorkIcon /> Go to Google maps </button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center mb-2' style={{ height: '20px', width: '100%' }}>
                                        <ArrowRightAltIcon style={{ fontSize: '35px', cursor: 'pointer' }} />
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
                                        <div className="d-flex justify-content-center mt-2 align-items-center">
                                            <button className={`btn btn-primary btn-lg btn-block ${classes.LoginBtn}`}> <MarkEmailReadIcon /> Contact by a email </button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center mb-2' style={{ height: '20px', width: '100%' }}>
                                        <ArrowRightAltIcon style={{ fontSize: '35px', cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={`card-shadow d-flex justify-content-center align-items-center ${classes.imgMainDiv}`}>
                                        <img src="https://storage-asset.msi.com/template/images/contact_us/kv-contact-us-xs.jpg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-box ml-3">
                                        <h2 className="font-weight-light mt-2">Quick Contact</h2>
                                        <form className="mt-4">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <TextField
                                                        fullWidth
                                                        variant='outlined'
                                                        size='large'
                                                        label={'Name'}
                                                    />
                                                </div>
                                                <div className="col-lg-12 mt-2">
                                                    <TextField
                                                        fullWidth
                                                        variant='outlined'
                                                        size='large'
                                                        label={'Email address'}
                                                    />
                                                </div>
                                                <div className="col-lg-12 mt-2">
                                                    <TextField
                                                        fullWidth
                                                        variant='outlined'
                                                        type="number"
                                                        size='large'
                                                        label={'Phone'}
                                                    />
                                                </div>
                                                <div className="col-lg-12 mt-2">
                                                    <TextareaAutosize
                                                        className='p-2'
                                                        aria-label="minimum height"
                                                        minRows={2}
                                                        style={{ width: '100%' }}
                                                        placeholder="Message"
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-center mt-2">
                                                    <button className={`btn btn-primary btn-lg btn-block ${classes.LoginBtn}`}>Submit <ArrowRightAltIcon /></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contactus
