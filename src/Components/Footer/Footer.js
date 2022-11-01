import React from 'react'
import Images from "../../Images/Image";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <footer class="site-footer footer-light">
            <div class="footer-top-newsletter">
                <div class="container">
                    <div class="sf-news-letter">
                        <span>Subscribe Our Newsletter</span>
                        <form>
                            <div class="form-group sf-news-l-form">
                                <input type="text" class="form-control" placeholder="Enter Your Email" />
                                <button type="submit" class="sf-sb-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6  m-b30">
                            <div class="sf-site-link sf-widget-link">
                                <h4 class="sf-f-title">Site Links</h4>
                                <ul>
                                    <li><a href="#!">Blog</a></li>
                                    <li><a href="#!">Contact Us</a></li>
                                    <li><a href="#!">Jobs</a></li>
                                    <li><a href="#!">Categories</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6  m-b30">
                            <div class="sf-site-link sf-widget-cities">
                                <h4 class="sf-f-title">Popular Cities</h4>
                                <ul>
                                    <li><a href="#!">Ballston Lake</a></li>
                                    <li><a href="#!">Batumi</a></li>
                                    <li><a href="#!">Brooklyn</a></li>
                                    <li><a href="#!">Cambridge</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6  m-b30">
                            <div class="sf-site-link sf-widget-categories">
                                <h4 class="sf-f-title">Categories</h4>
                                <ul>
                                    <li><a href="#!">Car Service</a></li>
                                    <li><a href="#!">House Cleaning</a></li>
                                    <li><a href="#!">Transport</a></li>
                                    <li><a href="#!">Yoga Classes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6  m-b30">
                            <div class="sf-site-link sf-widget-contact">
                                <h4 class="sf-f-title">Contact Info</h4>
                                <ul>
                                    <li>India</li>
                                    <li>+91 000 000 0000</li>
                                    <li>+91 000 000 0000</li>
                                    <li>info@Skiller.com</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="sf-footer-bottom-section">
                        <div class="sf-f-logo"><a href="javascript:void(0);"><img src={Images.logodark} alt="" /></a>
                        </div>
                        <div class="sf-f-copyright">
                            <span>Copyright 2022 | Skiller. All Rights Reserved</span>
                        </div>

                        <div class="sf-f-social">
                            <ul class="socila-box">
                                <li><a href="javascript:void(0);"><i> <TwitterIcon /> </i></a></li>
                                <li><a href="javascript:void(0);"><i> <FacebookIcon /></i></a></li>
                                <li><a href="javascript:void(0);"><i> <EmailIcon /></i></a></li>
                                <li><a href="javascript:void(0);"><i> <InstagramIcon /></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
