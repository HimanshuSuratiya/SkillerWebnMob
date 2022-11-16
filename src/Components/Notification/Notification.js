import React from 'react'
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Images from '../../Images/Image';
import { Accordion } from "react-bootstrap";
import DeleteForever from '@material-ui/icons/DeleteForever';
import "./Notification.css";

const Notification = () => {
    return (
        <>
            <Menu />
            <section>
                <Banner imgSource={Images.notification} text="Notification" />
                <div className='p-4'>
                    <div className='container'>
                        <div className="page-wrapper" style={{ minHeight: '250px' }}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="faq-accordian-main-area notification-arrow-hide-parents">
                                            <div className="accordion accordion-" id="accordionFlushExample">
                                                <Accordion defaultActiveKey="0">
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
                                                            <Accordion.Body>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                                            <Accordion.Body>
                                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
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
                                                            <Accordion.Body>
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
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
                                                            <Accordion.Body>
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
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
                                                            <Accordion.Body>
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
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
                                                            <Accordion.Body>
                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                                            </Accordion.Body>
                                                        </div>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer text-center"> 2021 © Ample Admin brought to you by <a
                                href="https://www.wrappixel.com/">wrappixel.com</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notification
