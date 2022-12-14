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
import { useNavigate } from 'react-router-dom';
import Menu from "../../Menu/Menu";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { TextField } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
];

const useStyles = makeStyles(() => ({
    otpButtons: {
        color: '#ffffff',
        background: '#188dc7',
        padding: '4px 20px',
        transition: '.5s',
        fontSize: '16px',
        borderRadius: '20px',
        border: '2px solid #188dc7',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },
}));

const defaultState = {
    category: [],
    registerType: false,
    skillProvider: false,
}

const OtpVerification = () => {
    const [state, setState] = useState(defaultState);
    let navigate = useNavigate();
    const classes = useStyles();

    const selectCategory = (event) => {
        const {
            target: { value }
        } = event;
        setState((prevState) => ({ ...prevState, category: typeof value === "string" ? value.split(",") : value }));
    };

    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner imgSource={Images.otpVerify} text="One time verification" />
                <div className="container py-4 h-80 abc">
                    <div className="row d-flex align-items-center justify-content-center h-50">
                        <div className="col-md-8 col-lg-7 col-xl-6 Otpanimation">
                            <img src={Images.otpAnnimation} className="img-fluid" alt="Phone image" style={{ height: '50%' }} />
                        </div>
                        {state.registerType != true ?
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
                                        <div className="w-50 d-flex justify-content-evenly">
                                            <button className={`btn btn-primary btn-lg btn-block ${classes.otpButtons}`} onClick={() => { setState((prevState) => ({ ...prevState, registerType: true })) }}>Skip</button>
                                            <button className={`btn btn-primary btn-lg btn-block ${classes.otpButtons}`} onClick={() => { setState((prevState) => ({ ...prevState, registerType: true })) }}>Verify</button>
                                        </div>
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
                                            <FormControlLabel value="female" control={<Radio />} label="Skill Seeker" onClick={() => { setState((prevState) => ({ ...prevState, skillProvider: false })) }} />
                                            <FormControlLabel value="male" control={<Radio />} label="Skill Provider" onClick={() => { setState((prevState) => ({ ...prevState, skillProvider: true })) }} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {state.skillProvider &&
                                    <div className='d-flex justify-content-center mt-2'>
                                        <div>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <FormControl size="large" sx={{ width: 350 }}>
                                                    <InputLabel id="demo-multiple-checkbox-label">Select Category</InputLabel>
                                                    <Select
                                                        labelId="demo-multiple-checkbox-label"
                                                        id="demo-multiple-checkbox"
                                                        multiple
                                                        value={state.category}
                                                        onChange={selectCategory}
                                                        input={<OutlinedInput label="Select Category" />}
                                                        renderValue={(selected) => selected.join(", ")}
                                                        MenuProps={MenuProps}
                                                    >
                                                        {names.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                <Checkbox checked={state.category.indexOf(name) > -1} />
                                                                <ListItemText primary={name} />
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="form-outline mt-3">
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    size='large'
                                                    label={'Account Holder Name'}
                                                />
                                            </div>
                                            <div className="form-outline mt-3">
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    size='large'
                                                    label={'Account Number'}
                                                />
                                            </div>
                                            <div className="form-outline mt-3">
                                                <TextField
                                                    fullWidth
                                                    variant='outlined'
                                                    size='large'
                                                    label={'BSB'}
                                                />
                                            </div>
                                            <div className='mt-2 d-flex align-items-center justify-content-between'>
                                                <img src={Images.paypal} style={{ height: '50px', width: '80px' }} />
                                                <TextField
                                                    sx={{ width: 220 }}
                                                    variant='outlined'
                                                    size='small'
                                                    label={'Enter your paypal ID'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="d-flex justify-content-center my-2">
                                    <button className={`btn btn-primary btn-lg btn-block ${classes.otpButtons}`} onClick={() => { navigate('/') }}><ArrowRightAltIcon /> Continue</button>
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