import React from 'react'
import "./DetailPage.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import CircularProgress from '@mui/material/CircularProgress';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';

const DetailPage = ({ setDetail }) => {
    return (
        <>
            <div className='main-top-container container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='d-flex align-items-center justify-content-between task-status-main-area py-2 px-2'>
                            <div className='d-flex align-items-center task-status-area'>
                                <p className='task-status d-flex align-items-center'><DoneIcon style={{ fontSize: '20px', color: '#fff' }} /> Open</p>
                                <p className='task-status d-flex align-items-center'><CircularProgress className='circular-progress' /> Assigned</p>
                                <p className='task-status d-flex align-items-center'><CircularProgress className='circular-progress' /> Completed</p>
                            </div>
                            <p className='follow-user d-flex align-items-center'><FavoriteBorderIcon className="follow-icon" /> Follow</p>
                        </div>
                        <div className='py-3'>
                            <h3 className='task-status-heading px-2'>Embroidery knitted or heated onto Christmas stockings ....</h3>
                            <p className='p-0 m-0 px-2 d-flex returntomap align-items-center' onClick={() => { setDetail(false) }}><ArrowBackIcon className="follow-icon" /> Return to map</p>
                        </div>
                        <div className='px-2 py-2 d-flex justify-content-between'>
                            <div className='d-flex align-items-center post-location-data'>
                                <Avatar src="/broken-image.jpg" sx={{ width: 35, height: 35 }} />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>POSTED BY</p>
                                    <a className='p-0 m-0'>Sarah D.</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-location-data'>
                                <LocationOnIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LOCATION</p>
                                    <a className='p-0 m-0'>Remote</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center post-location-data'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>DUE DATE</p>
                                    <a className='p-0 m-0'>Sat,19th Nov 2022</a>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 py-2'>
                            <h5 className='p-0 m-0'>GOVERNMENT COVID-19 RESTRICTIONS HAVE CHANGED.</h5>
                            <p className='p-0 m-0'>Your task may be impacted. See Safety Centre for info.</p>
                        </div>
                        {/* <div className='px-2 py-2'>
                            <a style={{ fontWeight: 600, fontSize: '20px', color: 'rgb(125, 179, 67)' }}>About 2 hours ago</a>
                        </div> */}
                    </div>
                    <div className='col-lg-4'>
                        <div style={{ marginTop: '65px', border: '1px solid black', borderRadius: '4px' }}>
                            <h4 className='p-0 m-0 px-2 py-2 d-flex align-item-center justify-content-center'>Task Budget</h4>
                            <p className='p-0 m-0 px-2 py-2 d-flex align-item-center justify-content-center' style={{ color: '#000', fontWeight: '600', fontSize: '28px' }}>$ 50</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage
