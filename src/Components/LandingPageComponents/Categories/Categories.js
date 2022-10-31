import React from "react";
import Images from "../../../Images/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Categories = () => {
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
                <div className="swiper-slide">
                    <a href="#!" className="teamImg">
                        <img src={item.imgSource} />
                    </a>
                    <div className="member-info">
                        <h3>{item.text}</h3>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <>
            <section className="categoriesSection aon-categories-area">
                <div className="container">
                    <div className="section-head">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <span className="aon-sub-title">categories</span>
                                <h2 className="aon-title">Popular Categories</h2>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-t80">
                                <div className="swiper categories">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            id="swiper"
                                            virtual
                                            slidesPerView={5}
                                            spaceBetween={30}
                                            autoplay
                                            onReachEnd={() => {
                                                const tmp = slides.unshift();
                                                slides.push(tmp);
                                            }}
                                            navigation
                                            pagination
                                        >
                                            {slides}
                                        </Swiper>
                                    </div>
                                    <div className="categoriesControler">
                                        <div className="swiper-button-next"><ArrowBackIcon style={{ cursor: 'pointer' }} /></div>
                                        <div className="swiper-button-prev"><ArrowForwardIcon style={{ cursor: 'pointer' }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Categories;