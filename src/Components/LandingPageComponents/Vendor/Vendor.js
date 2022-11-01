import React from 'react'
import Images from "../../../Images/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Vendor = () => {
    const CategoriesData = [
        {
            imgSource: Images.web,
            text: 'Web Development',
        },
        {
            imgSource: Images.app,
            text: 'App Development',
        },
        {
            imgSource: Images.software,
            text: 'Software Development',
        },
        {
            imgSource: Images.digital,
            text: 'Digital Marketing',
        },
        {
            imgSource: Images.android,
            text: 'Android Development',
        },
        {
            imgSource: Images.marketing,
            text: 'Marketing',
        },
        {
            imgSource: Images.clang,
            text: 'C Language',
        },
        {
            imgSource: Images.cppjava,
            text: 'C++ & Java Master',
        },
        {
            imgSource: Images.database,
            text: 'Database Management',
        },
        {
            imgSource: Images.one,
            text: 'Food & Drink',
        },
        {
            imgSource: Images.two,
            text: 'Plumber',
        },
        {
            imgSource: Images.three,
            text: 'Cleaning Services',
        },
        {
            imgSource: Images.four,
            text: 'Yoga Classes',
        },
        {
            imgSource: Images.five,
            text: 'Salon spa',
        },
        {
            imgSource: Images.six,
            text: 'Gym',
        },
        {
            imgSource: Images.seven,
            text: 'Transport',
        },
    ]

    const slides = CategoriesData.map((item, index) => {
        return (
            <SwiperSlide key={`slide-${index}`} style={{ listStyle: "none" }}>
                <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 4" style={{ width: "362px", marginRight: "30px" }}>
                    <div className="aon-ow-provider-wrap">
                        <div className="aon-ow-provider shine-hover">
                            <div className="aon-ow-top">
                                <div className="aon-pro-check"><span> <DoneIcon /></span></div>
                                <div className="aon-pro-favorite"><a href="#"> <FavoriteBorderIcon /></a></div>
                                <div className="aon-ow-info">
                                    <h4 className="aon-title"><a href="#!">Mila Kunis</a></h4>
                                    <span>Queens, United States</span>
                                </div>
                            </div>
                            <div className="aon-ow-mid">
                                <div className="aon-ow-media media-bg-animate">
                                    <a className="shine-box" href="#!"><img src={item.imgSource} alt="" /></a>
                                </div>
                                <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
                                <div className="aon-ow-pro-rating">
                                    <span><StarBorderIcon /></span>
                                    <span><StarBorderIcon /></span>
                                    <span><StarBorderIcon /></span>
                                    <span><StarBorderIcon /></span>
                                    <span><StarBorderIcon /></span>
                                </div>
                            </div>
                        </div>
                        <div className="aon-ow-bottom">
                            <a href="profile-full.html">Request A Quote</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section className="site-bg-gray aon-feature-provider-area sf-curve-pos">
            <div className="container">
                <div className="section-head">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <span className="aon-sub-title">VENDOR</span>
                            <h2 className="aon-title">Featured Providers</h2>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="service-slider-one swiper-container style2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode">
                    <div className="animationVendor" id="swiper-wrapper-service" aria-live="off">
                        <Swiper
                            id="swiper"
                            virtual
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay
                            onReachEnd={() => {
                                const tmp = slides.unshift();
                                slides.push(tmp);
                            }}
                            // navigation
                            pagination
                        >
                            {slides}
                        </Swiper>
                    </div>
                </div>
                <div className="slider-btn-wrap">
                    <div className="service-prev slider-btn style2" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-service">
                        <i><ArrowBackIcon style={{ cursor: 'pointer' }} /></i>
                    </div>
                    <div className="service-next slider-btn style2" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-service">
                        <i><ArrowForwardIcon style={{ cursor: 'pointer' }} /></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vendor
