import React from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Images from '../../Images/Image';
import { Accordion } from "react-bootstrap";
import DeleteForever from '@material-ui/icons/DeleteForever';
import Footer from "../Footer/Footer";
import "./Notification.css";

const Notification = () => {
    return (
        <>
            <Menu />
            <section>
                <Banner imgSource={Images.notification} text="Notification" />
                <div className='p-4'>
                    <div className='container p-0'>
                        <div className="page-wrapper" style={{ minHeight: '250px' }}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="faq-accordian-main-area notification-arrow-hide-parents">
                                            <div className="accordion accordion-" id="accordionFlushExample">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <div className="notification-detail-main-area">
                                                                    <div className="notification-user-img">
                                                                        <img src={Images.two} alt="user img" />
                                                                    </div>
                                                                    <div className="notification-heading-main-area">
                                                                        <Accordion.Header>
                                                                            <h2>Wrapped Bitcoin is now listed on Unity Exchange</h2>
                                                                        </Accordion.Header>
                                                                        <p>25 min ago</p>
                                                                    </div>
                                                                    <div className="notification-dlt-main-area">
                                                                        <DeleteForever style={{ color: '#FF5C93' }} />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <Accordion.Body className='notification-main-text-area'>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <div className="notification-detail-main-area">
                                                                    <div className="notification-user-img">
                                                                        <img src={Images.two} alt="user img" />
                                                                    </div>
                                                                    <div className="notification-heading-main-area">
                                                                        <Accordion.Header>
                                                                            <h2>Vivamus tortor, odio viverra malesuada sapien dui.</h2>
                                                                        </Accordion.Header>
                                                                        <p>30 min ago</p>
                                                                    </div>
                                                                    <div className="notification-dlt-main-area">
                                                                        <DeleteForever style={{ color: '#FF5C93' }} />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <Accordion.Body className='notification-main-text-area'>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <div className="notification-detail-main-area">
                                                                    <div className="notification-user-img">
                                                                        <img src={Images.two} alt="user img" />
                                                                    </div>
                                                                    <div className="notification-heading-main-area">
                                                                        <Accordion.Header>
                                                                            <h2>Srapped Citcoin is now listed on Unity Exchange</h2>
                                                                        </Accordion.Header>
                                                                        <p>45 min ago</p>
                                                                    </div>
                                                                    <div className="notification-dlt-main-area">
                                                                        <DeleteForever style={{ color: '#FF5C93' }} />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <Accordion.Body className='notification-main-text-area'>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="3">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <div className="notification-detail-main-area">
                                                                    <div className="notification-user-img">
                                                                        <img src={Images.two} alt="user img" />
                                                                    </div>
                                                                    <div className="notification-heading-main-area">
                                                                        <Accordion.Header>
                                                                            <h2>Trapped Eitcoin is now listed on Unity Exchange</h2>
                                                                        </Accordion.Header>
                                                                        <p>50 min ago</p>
                                                                    </div>
                                                                    <div className="notification-dlt-main-area">
                                                                        <DeleteForever style={{ color: '#FF5C93' }} />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <Accordion.Body className='notification-main-text-area'>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="4">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <div className="notification-detail-main-area">
                                                                    <div className="notification-user-img">
                                                                        <img src={Images.two} alt="user img" />
                                                                    </div>
                                                                    <div className="notification-heading-main-area">
                                                                        <Accordion.Header>
                                                                            <h2>Lindy Uikit on trending</h2>
                                                                        </Accordion.Header>
                                                                        <p>15 min ago</p>
                                                                    </div>
                                                                    <div className="notification-dlt-main-area">
                                                                        <DeleteForever style={{ color: '#FF5C93' }} />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <Accordion.Body className='notification-main-text-area'>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="5">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <div className="notification-detail-main-area">
                                                                    <div className="notification-user-img">
                                                                        <img src={Images.two} alt="user img" />
                                                                    </div>
                                                                    <div className="notification-heading-main-area">
                                                                        <Accordion.Header>
                                                                            <h2>Urapped Bitcoin is now listed on Unity Exchange</h2>
                                                                        </Accordion.Header>
                                                                        <p>45 min ago</p>
                                                                    </div>
                                                                    <div className="notification-dlt-main-area">
                                                                        <DeleteForever style={{ color: '#FF5C93' }} />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <Accordion.Body className='notification-main-text-area'>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Notification
