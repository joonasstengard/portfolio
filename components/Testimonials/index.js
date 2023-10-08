import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonial extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="testimonial-area">
                <div className="container">
                    <div className="testimonial-active">
                        <div className="testimonial-wrap">
                            <Slider {...settings}>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        {/*<div className="testimonial-img">
                                            <img src='images/testimonial/1.jpg' alt="" />
        </div>*/}
                                        <div className="testimonial-content">
                                            <h4>Kristina H.</h4>
                                            <span>Project Coordinator SAFE / MOTION</span>
                                            <p>Joonas has proved to be an invaluable member of the project teams. He has worked with high motivation, 
diligence, and preciseness. Furthermore, he works with a proactive approach, and the quality of his work is 
professional. Joonas has a pleasant character, and he is highly reliable.</p>
<p>--</p> <p>As Joonas’s supervisor, I can highly recommend him for any similar kinds of tasks.</p>
                                        </div>
                                        <div className="testimonial-icon">
                                            <i className="fi flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        {/*<div className="testimonial-img">
                                            <img src='images/testimonial/2.jpg' alt="" />
                                        </div>*/}
                                        <div className="testimonial-content">
                                            <h4>Tuuli P.</h4>
                                            <span>Helmiprinsessa, Owner</span>
                                            <p>Joonas worked with us to create our website and we are very pleased with the results.</p>
                                        </div>
                                        <div className="testimonial-icon">
                                            <i className="fi flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <div className="testimonial-img">
                                            <img src="images/testimonial/3.jpg" alt="" />
                                        </div>
                                        <div className="testimonial-content">
                                            <h4>Martin Gaptil</h4>
                                            <span>SEO of Alka</span>
                                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is the therefore always free from repetition, injected humour,sure there embarrassing the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined Lorem Ipsum is therefore always free from repetition.</p>
                                        </div>
                                        <div className="testimonial-icon">
                                            <i className="fi flaticon-right-quote"></i>
                                        </div>
                                    </div>
                                </div>*/}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="white_svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </div>




        );
    }
}

export default Testimonial;