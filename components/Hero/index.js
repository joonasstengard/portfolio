import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Hero extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    {/*<div className="slide" style={{ backgroundImage: `url(${'images/ekatausta.ng'})` }}>*/}
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-10 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>Joonas Stengård</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Software Developer</h2>
                                    </div>
                                    <div className="hero-desc-text">
                                        <p>Software development. Programming. Design.<br/>
                                            Web applications, websites & enterprise software.</p>
                                    </div>
                                    
                                    {/*<div className="btns">
                                        <AnchorLink href="#contact" className="template-btn go-contact-area">Contact Me</AnchorLink>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <div className="overlay"></div>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joonas-s-420b24266"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="white_svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        )
    }
}

export default Hero;