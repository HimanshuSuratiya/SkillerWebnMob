import React, { useState } from 'react'
import "./DetailPage.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

const DetailPage = ({ setDetail }) => {
    const [moreOption, setMoreOption] = useState('');

    const handleChangeMoreOption = (event) => {
        setMoreOption(event.target.value);
    };

    return (
        <>
            <div className='main-top-container container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='d-flex align-items-center justify-content-between task-status-main-area p-2'>
                            <div className='d-flex align-items-center task-status-area'>
                                <p className='task-status d-flex align-items-center'>On progress</p>
                            </div>
                            <p className='follow-user d-flex align-items-center'>Cancel</p>
                        </div>
                        <div className='p-2'>
                            <h4 className='task-status-heading text-uppercase heading-color'>Embroidery knitted or heated onto Christmas stockings</h4>
                            <p className='p-0 m-0 d-flex returntomap align-items-center' onClick={() => { setDetail(false) }}><ArrowBackIcon className="follow-icon" /> Return to map</p>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <NavLink to="/user-profile">
                                    <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2202413/profilepic-dcf6a39c355c95ad9e930b974af69496.jpeg?width=64&height=64" sx={{ width: 45, height: 45 }} />
                                </NavLink>
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>POSTED BY</p>
                                    <a className='p-0 m-0'>Sarah D.</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>CATEGORY</p>
                                    <a className='p-0 m-0'>Accountants , Bakers</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='px-2 d-flex align-items-center post-location-data w-50'>
                                <LocationOnIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LOCATION</p>
                                    <a className='p-0 m-0'>Kensington Park SA</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>ORDER DUE DATE</p>
                                    <a className='p-0 m-0'>Sat,19th Nov 2022 4:44 PM</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex px-2 align-items-center post-location-data w-50'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LANGUAGE</p>
                                    <a className='p-0 m-0'>English , Spanis</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>SKILLS</p>
                                    <a className='p-0 m-0'>React.js, javscript, html</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 py-2'>
                        <div className='' style={{ border: '1px solid black', borderRadius: '4px' }}>
                            <h4 className='p-0 m-0 py-2 d-flex align-item-center justify-content-center heading-color'>Task Budget</h4>
                            <p className='p-0 m-0 d-flex align-item-center justify-content-center' style={{ color: '#000', fontWeight: '600', fontSize: '32px' }}>$50</p>
                            <div className="d-flex justify-content-center py-2">
                                <button className='btn btn-primary btn-lg btn-block make-an-offer-btn' >Make an offer</button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end py-2'>
                            <p className='p-0 m-0 px-1' style={{ fontWeight: '700' }}>About 1 hour ago</p>
                        </div>
                        <div>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-select-small">More options</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={moreOption}
                                    label="More options"
                                    onChange={handleChangeMoreOption}
                                >
                                    <MenuItem value={10}>Option-1</MenuItem>
                                    <MenuItem value={20}>Option-2</MenuItem>
                                    <MenuItem value={30}>Option-3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <h5 className='p-0 m-0 heading-color'>Description</h5>
                        <p className='p-0 m-0'>Your task may be impacted. See Safety Centre for info. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <Divider className='mx-2 my-3' style={{ backgroundColor: '#a9a4a4' }} />
                    <div className='py-3'>
                        <h4 className='p-0 m-0 px-2 heading-color'>OFFERS</h4>
                        <div className='py-4'>
                            <div className='p-0 m-0 px-2 d-flex align-items-center'>
                                <NavLink to="/user-profile">
                                    <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/5441221/image-89efc0365cc985ed1656290545d9c015.jpg?width=136&height=136" sx={{ width: 65, height: 65 }} />
                                </NavLink>
                                <div className='px-4'>
                                    <h4 className='p-0 m-0 heading-color'>Brunzo Z.</h4>
                                    <p className='m-0 new-comment'>New !</p>
                                    <p className='m-0' style={{ border: '1px solid gray', padding: '0px 8px 0px 8px', borderRadius: '10px' }}>AfterPay awailable</p>
                                </div>
                            </div>
                            <p className='p-0 m-0 px-2'>I have many years of experience</p>
                            <p className='p-0 m-0 px-2' style={{ fontWeight: '700', fontSize: '12px', color: '#188dc7' }}>About 1 hour ago</p>
                        </div>
                        <Divider className='mx-2 my-3' style={{ backgroundColor: '#a9a4a4' }} />
                        <div className='py-4'>
                            <div className='m-0 px-2 d-flex align-items-center'>
                                <NavLink to="/user-profile">
                                    <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1243367/image-830d0c54d494305f887b46065b48fccd.jpg?width=136&height=136" sx={{ width: 65, height: 65 }} />
                                </NavLink>
                                <div className='px-4'>
                                    <h4 className='p-0 m-0 heading-color'>Mohammed  I.</h4>
                                    <p className='m-0 new-comment'>New !</p>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <Rating className='p-0 m-0 ratingFont' name="read-only" value={4} readOnly />
                                        <span className='ratingNumberFont'>(65)</span>
                                    </div>
                                </div>
                            </div>
                            <p className='p-0 m-0 px-2'>Hi, I have 2 tonne van, I have blankets and straps needed, happy to do the job, I’ll look after your stuff, I’ve done furniture removal before, check my 5 star customers feedback</p>
                            <p className='p-0 m-0 px-2' style={{ fontWeight: '700', fontSize: '12px', color: '#188dc7' }}>About 20 mins ago</p>
                        </div>
                        <Divider className='mx-2 my-3' style={{ backgroundColor: '#a9a4a4' }} />
                        <div className='py-4'>
                            <div className='m-0 px-2 d-flex align-items-center'>
                                <NavLink to="/user-profile">
                                    <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/5113175/daf2201a-c641-4b30-9615-1f52d88b1eb8-04da006b57a894675d67ccda1006dc66.jpg?width=136&height=136" sx={{ width: 65, height: 65 }} />
                                </NavLink>
                                <div className='px-4'>
                                    <h4 className='p-0 m-0 heading-color'>Jordan  K.</h4>
                                    <p className='m-0 new-comment'>New !</p>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <Rating className='p-0 m-0 ratingFont' name="read-only" value={5} readOnly />
                                        <span className='ratingNumberFont'>(165)</span>
                                    </div>
                                </div>
                            </div>
                            <p className='p-0 m-0 px-2'>Two removalists with a large 4 ton van with a manual ramp too load up heavy items, all the moving equipment, tie downs, safety blankets, trolleys, dollys. We are fully insured. Price includes all expenses on my end,  includes AirTasker fee, Fuel, Labour, GST, Dumping fees.</p>
                            <p className='p-0 m-0 px-2' style={{ fontWeight: '700', fontSize: '12px', color: '#188dc7' }}>About 2 days ago</p>
                        </div>
                        <Divider className='mx-2 my-3' style={{ backgroundColor: '#a9a4a4' }} />
                    </div>
                    <div className='task-detail-area'>
                        <div className='py-2'>
                            <h5 className='p-0 px-2 heading-color detail'>Details</h5>
                            <p className='p-0 m-0 px-2'>I need the help of a professional with a background in learning and development or organizational</p>
                            <p className='p-0 m-0 px-2'>Due date: Before Friday, 18 November 2022</p>
                        </div>
                        <div className='py-2'>
                            <h5 className='p-0 px-2 heading-color detail'>Details</h5>
                            <p className='p-0 m-0 px-2'>I need the help of a professional with a background in learning and development or organizational</p>
                            <p className='p-0 m-0 px-2'>Due date: Before Friday, 18 November 2022</p>
                        </div>
                        <div className='py-2'>
                            <h5 className='p-0 px-2 heading-color detail'>Details</h5>
                            <p className='p-0 m-0 px-2'>I need the help of a professional with a background in learning and development or organizational</p>
                            <p className='p-0 m-0 px-2'>Due date: Before Friday, 18 November 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage
