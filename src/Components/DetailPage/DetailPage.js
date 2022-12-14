import React, { useState } from 'react'
import "./DetailPage.css";
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
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import CategoryIcon from '@mui/icons-material/Category';
import Images from "../../Images/Image";
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TranslateIcon from '@mui/icons-material/Translate';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Tooltip from '@mui/material/Tooltip';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const photos = [
    {
        src: Images.one,
        width: 3,
        height: 3
    },
    {
        src: Images.two,
        width: 1,
        height: 1
    },
    {
        src: Images.three,
        width: 3,
        height: 4
    },
    {
        src: Images.four,
        width: 3,
        height: 4
    },
    {
        src: Images.five,
        width: 3,
        height: 4
    },
    {
        src: Images.six,
        width: 3,
        height: 3
    },
];

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleBidRejectDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleBidRejectClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleBidRejectClose} open={open} className="dialog-comment">
            <div className='d-flex align-items-center justify-content-between'>
                <DialogTitle className="p-0 px-3 py-2">Please enter your comment ?</DialogTitle>
                <CloseIcon className='me-2' style={{ fontSize: '35px', cursor: 'pointer' }} onClick={handleBidRejectClose} />
            </div>
            <Divider style={{ backgroundColor: '#a9a4a4' }} />
            <div className='p-3'>
                <TextareaAutosize
                    className='p-2'
                    aria-label="minimum height"
                    minRows={2}
                    style={{ width: '100%' }}
                    placeholder="Please type about something..."
                />
            </div>
            <div className='d-flex align-items-center justify-content-end px-3 mb-3'>
                <button className='btn btn-primary btn-lg btn-block make-an-offer-btn me-3' onClick={handleBidRejectClose}>Cancel</button>
                <button className='btn btn-primary btn-lg btn-block make-an-offer-btn' onClick={handleBidRejectClose}>Submit</button>
            </div>
        </Dialog>
    );
}

SimpleBidRejectDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

const DetailPage = ({ setDetail, Map, cardData }) => {
    const [moreOption, setMoreOption] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [openBidReject, setOpenBidReject] = useState(false);
    const [selectedValue, setSelectedValue] = useState(emails[1]);
    const [openCancelModal, setOpenCancelModal] = useState(false);
    const [openCompleteModal, setOpenCompleteModal] = useState(false);

    const handleChangeMoreOption = (event) => {
        setMoreOption(event.target.value);
    };

    const handleClickOpen = () => {
        setOpenBidReject(true);
    };

    const handleBidRejectClose = (value) => {
        setOpenBidReject(false);
        setSelectedValue(value);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const handleClickOpenCancelModal = () => {
        setOpenCancelModal(true);
    };

    const handleCloseOpenCancelModal = () => {
        setOpenCancelModal(false);
    };

    const handleClickOpenCompleteModal = () => {
        setOpenCompleteModal(true);
    };

    const handleCloseOpenCompleteModal = () => {
        setOpenCompleteModal(false);
    };

    return (
        <>
            <div className='main-top-container container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='d-flex align-items-center justify-content-between task-status-main-area p-2'>
                            <div className='d-flex align-items-center task-status-area'>
                                <p className='task-status d-flex align-items-center'>{cardData.status}</p>
                            </div>
                            {cardData.status === 'Pending' && <p className='follow-user d-flex align-items-center'>Cancel</p>}
                        </div>
                        <div className='p-2'>
                            <h4 className='task-status-heading text-uppercase heading-color'>{cardData.taskName}</h4>
                            {Map && <p className='p-0 m-0 d-flex returntomap align-items-center' onClick={() => { setDetail(false) }}><ArrowBackIcon className="follow-icon" /> Return to map</p>}
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <NavLink to="/user-profile">
                                    <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2202413/profilepic-dcf6a39c355c95ad9e930b974af69496.jpeg?width=64&height=64" sx={{ width: 45, height: 45 }} />
                                </NavLink>
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>POSTED BY</p>
                                    <a className='p-0 m-0'>{cardData.postedBy}</a>
                                </div>
                            </div>
                            {cardData.status === 'Completed' &&
                                <div className='d-flex align-items-center post-location-data w-50'>
                                    <NavLink to="/user-profile">
                                        <Avatar src="https://eu7cmie.cloudimg.io/v7/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2202413/profilepic-dcf6a39c355c95ad9e930b974af69496.jpeg?width=64&height=64" sx={{ width: 45, height: 45 }} />
                                    </NavLink>
                                    <div className='px-1 posted-area'>
                                        <p className='p-0 m-0'>COMPLETED BY</p>
                                        <a className='p-0 m-0'>{cardData.completedBy}</a>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <CategoryIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>CATEGORY</p>
                                    <a className='p-0 m-0'>{cardData.categoryList}</a>
                                </div>
                            </div>
                            <div className='px-2 d-flex align-items-center post-location-data w-50'>
                                <LocationOnIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LOCATION</p>
                                    <a className='p-0 m-0'>{cardData.location}</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <EventIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>ORDER DUE DATE</p>
                                    <a className='p-0 m-0'>{cardData.date}</a>
                                </div>
                            </div>
                            <div className='d-flex px-2 align-items-center post-location-data w-50'>
                                <TranslateIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LANGUAGE</p>
                                    <a className='p-0 m-0'>{cardData.language}</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex align-items-center post-location-data w-50'>
                                <SchoolIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>SKILLS</p>
                                    <a className='p-0 m-0'>{cardData.skills}</a>
                                </div>
                            </div>
                            <div className='d-flex px-2 align-items-center post-location-data w-50'>
                                <LocalLibraryIcon className='icon-size' />
                                <div className='px-1 posted-area'>
                                    <p className='p-0 m-0'>LEARNING METHOD</p>
                                    <a className='p-0 m-0'>{cardData.learningMethod}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 py-2'>
                        <div className='py-3' style={{ border: '1px solid black', borderRadius: '4px' }}>
                            <h3 className='p-0 m-0 py-3 d-flex align-item-center justify-content-center heading-color'>Task Budget</h3>
                            <p className='p-0 m-0 py-1 d-flex align-item-center justify-content-center' style={{ color: '#000', fontWeight: '600', fontSize: '36px' }}>$50</p>
                            {cardData.status === 'Pending' &&
                                <div className="d-flex justify-content-center py-2">
                                    <button className='btn btn-primary btn-lg btn-block make-an-offer-btn' >Make an offer</button>
                                </div>
                            }
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
                        <p className='p-0 m-0'>{cardData.description}</p>
                    </div>
                    <div className='p-2'>
                        <h4 className='p-0 m-0 py-2 heading-color'>PHOTOS</h4>
                        <Gallery photos={photos} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map((x) => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                    <Divider className='mx-2 my-5' style={{ backgroundColor: '#a9a4a4' }} />
                    {cardData.status === 'Pending' &&
                        <div className='py-3 pt-0'>
                            <h4 className='p-0 m-0 px-2 heading-color'>BIDS</h4>
                            {cardData.bids.map((item) => {
                                return (
                                    <>
                                        <div className='py-4'>
                                            <div className='p-0 m-0 px-2 d-flex align-items-center justify-content-between'>
                                                <div className='d-flex'>
                                                    <NavLink to="/user-profile">
                                                        <Avatar src={item.imgSrc} sx={{ width: 65, height: 65 }} />
                                                    </NavLink>
                                                    <div className='px-4'>
                                                        <h4 className='p-0 m-0 heading-color'>{item.name}</h4>
                                                        <p className='m-0 new-comment'>New !</p>
                                                        <p className='m-0' style={{ border: '1px solid gray', padding: '0px 8px 0px 8px', borderRadius: '10px' }}>AfterPay awailable</p>
                                                    </div>
                                                </div>
                                                <div className='my-2'>
                                                    <p className='p-0 m-0 d-flex align-item-center justify-content-center' style={{ color: '#000', fontWeight: '600', fontSize: '36px' }}>{item.budget}</p>
                                                    <div>
                                                        <button className='btn btn-primary btn-lg btn-block make-an-offer-btn me-4' >Accept</button>
                                                        <button className='btn btn-primary btn-lg btn-block make-an-offer-btn' onClick={handleClickOpen}>Reject</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='p-0 m-0 px-2'>{item.description}</p>
                                            <p className='p-0 m-0 px-2' style={{ fontWeight: '700', fontSize: '12px', color: '#188dc7' }}>{item.timeAgo}</p>
                                        </div>
                                        <Divider className='mx-2 my-3' style={{ backgroundColor: '#a9a4a4' }} />
                                    </>
                                )
                            })}
                        </div>
                    }
                    {cardData.status === 'In Progress' &&
                        <div className='py-3 pt-0 d-flex justify-content-evenly align-items-center'>
                            <Tooltip title="Cancel" placement="top-start">
                                <button className='btn btn-primary btn-lg btn-block make-an-offer-btn me-3 d-flex justify-centent-center align-items-center' onClick={handleClickOpenCancelModal}>Cancel <CancelPresentationIcon className='ms-2' /></button>
                            </Tooltip>
                            <Tooltip title="Complete" placement="top-start">
                                <button className='btn btn-primary btn-lg btn-block make-an-offer-btn me-3 d-flex justify-centent-center align-items-center' onClick={handleClickOpenCompleteModal}>Complete <LibraryAddCheckIcon className='ms-2' /></button>
                            </Tooltip>
                            <Tooltip title="Chat" placement="top-start">
                                <button className='btn btn-primary btn-lg btn-block make-an-offer-btn me-3 d-flex justify-centent-center align-items-center'>Chat <MarkUnreadChatAltIcon className='ms-2' /></button>
                            </Tooltip>
                        </div>
                    }
                    {cardData.rating &&
                        <div className='px-2'>
                            <div className='d-flex'>
                                <div className='py-2 pe-2'>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={Images.one}
                                        sx={{ width: 50, height: 50 }}
                                    />
                                </div>
                                <div className='py-2 w-100'>
                                    <div className='d-flex justify-content-between align-items-between'>
                                        <h5 className='p-0 m-0'>Oriolgabalda</h5>
                                        <p className='p-0 m-0 status-day-review'> <AccessAlarmIcon style={{ fontSize: '18px', marginRight: '3px' }} />2 days ago</p>
                                    </div>
                                    <p className='p-0 m-0 user-profile-flag-text-area'><AssistantPhotoIcon style={{ fontSize: '18px' }} />Germany</p>
                                    <div className='d-flex align-items-center rating-icon-star'>
                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    </div>
                                    <p className='p-0 user-review-text'>Ich bin noch relativ neu in der Welt der Dating Apps und bin recht naiv an die Sache herangegangen. Philippa hat mir neben wertvollen Anregungen vor allem ehrliches Feedback gegeben, mit dem ich mein Profil bestimmt werde verbessern können. Ich kann den Gig also nur empfehlen.</p>
                                    <div className='d-flex align-items-center helpful'>
                                        <p className='p-0 m-0 pe-2'>Helpful?</p>
                                        <p className='p-0 m-0 pe-2'><ThumbUpOffAltIcon style={{ fontSize: '18px', color: '#188dc7' }} /> Yes</p>
                                        <p className='p-0 m-0'><ThumbDownOffAltIcon style={{ fontSize: '18px', color: '#188dc7' }} /> No</p>
                                    </div>
                                </div>
                            </div>
                            <Divider className='my-2' style={{ backgroundColor: 'gray' }} />
                        </div>
                    }
                    <div className='task-detail-area'>
                        {cardData.remark &&
                            <div className='py-2'>
                                <h4 className='p-0 px-2 detail'>Remark</h4>
                                <p className='p-0 m-0 px-2'>{cardData.remark}</p>
                            </div>
                        }
                        <div className='py-2'>
                            <h5 className='p-0 px-2 heading-color detail'>Details</h5>
                            <p className='p-0 m-0 px-2'>I need the help of a professional with a background in learning and development or organizationalI need the help of a professional with a background in learning and development or organizational</p>
                            <p className='p-0 m-0 px-2'>Due date: Before Friday, 18 November 2022</p>
                        </div>
                        <div className='py-2'>
                            <h5 className='p-0 px-2 heading-color detail'>About</h5>
                            <p className='p-0 m-0 px-2'>I need the help of a professional with a background in learning and development or organizational</p>
                            <p className='p-0 m-0 px-2'>Due date: Before Friday, 18 November 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <SimpleBidRejectDialog
                selectedValue={selectedValue}
                open={openBidReject}
                onClose={handleBidRejectClose}
            />
            <Dialog
                open={openCancelModal}
                onClose={handleCloseOpenCancelModal}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Are you sure .. ?"}
                </DialogTitle>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <DialogContent>
                    <p>Cancel Request</p>
                    <DialogContentText>
                        <TextareaAutosize
                            className='p-2'
                            aria-label="minimum height"
                            minRows={1}
                            style={{ width: '100%' }}
                            placeholder="Enter your remark"
                        />
                    </DialogContentText>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ color: '#188dc7' }}>Terms and condition please read this not</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </DialogContent>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <DialogActions>
                    <button className='make-an-offer-btn' onClick={handleCloseOpenCancelModal} autoFocus>
                        Cancel
                    </button>
                    <button className='make-an-offer-btn' onClick={handleCloseOpenCancelModal} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openCompleteModal}
                onClose={handleCloseOpenCompleteModal}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Complete"}
                </DialogTitle>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <DialogContent>
                    <DialogContentText>
                        <div className='d-flex align-items-center justify-content-between' style={{ width: '300px' }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={Images.two}
                                sx={{ width: 65, height: 65 }}
                            />
                            <div className='text-right'>
                                <h4 className='task-status-heading text-uppercase heading-color'>Himanshu Suratiya</h4>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.2} readOnly />
                            </div>
                        </div>
                    </DialogContentText>
                    <TextareaAutosize
                        className='p-2 mt-4'
                        aria-label="minimum height"
                        minRows={2}
                        style={{ width: '100%' }}
                        placeholder="Enter your review"
                    />
                </DialogContent>
                <Divider style={{ backgroundColor: '#a9a4a4' }} />
                <DialogActions>
                    <button className='make-an-offer-btn' onClick={handleCloseOpenCompleteModal} autoFocus>
                        Cancel
                    </button>
                    <button className='make-an-offer-btn' onClick={handleCloseOpenCompleteModal} autoFocus>
                        Submit
                    </button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DetailPage