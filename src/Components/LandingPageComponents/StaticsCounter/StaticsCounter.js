import React from 'react'
import "../LandingPage.css";

const StaticsCounter = () => {
    return (
        <section className="counterSection">
            <div className="transformNone">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="section-head">
                                <span className="aon-sub-title">Statics</span>
                                <h2 className="sf-title">Trusted by thousands of people all over the world</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="counter">
                                        <span className="counter-value">36</span>
                                        <h6>Providers</h6>
                                    </div>

                                    <div className="counter purple mt-3">
                                        <span className="counter-value">108</span>
                                        <h6>Customer</h6>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="counter">
                                        <span className="counter-value">89</span>
                                        <h6>Jobs</h6>
                                    </div>

                                    <div className="counter purple mt-3">
                                        <span className="counter-value">59</span>
                                        <h6>Categories</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StaticsCounter
